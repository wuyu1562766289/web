const musicModel = require('../models/music');
const path = require('path');

/* 无id */
function otpUpload(ctx) {
    // 1.获取字符串数据
    let { title, singer, time } = ctx.request.body;
    // 2.获取文件 -> 保存文件的网络路径
    let { file, filelrc } = ctx.request.files;
    // 保存文件的绝对路径也可以，但是麻烦
    let saveSingObj = {
        title, singer, time
    };
    // 2.5歌词可选
    saveSingObj.filelrc = 'no upload';
    if (filelrc) {
        // 文件路径 
        saveSingObj.filelrc = '/public/files/' + path.parse(filelrc.path).base;
    }

    if (!file) {
        ctx.throw('歌曲必须上传');
        return;
    }
    // 处理歌曲路径
    saveSingObj.file = '/public/files/' + path.parse(file.path).base;

    // 加入用户id
    saveSingObj.uid = ctx.session.user;

    return saveSingObj;
}

module.exports = {
    addMusic: async (ctx, next) => {
        let saveSingObj = otpUpload(ctx);        
        console.log(ctx);
       
        // 3.插入数据到数据库
        let result = await musicModel.addMusicByObj(saveSingObj);
        // 4.响应结果给用户
        console.log(result);
        
        ctx.body = {
            // ajax接收到的消息
            code: '001', msg: result.message
        }
    },
    // 更新音乐
    updateMusic: async (ctx, next) => {
        let saveSingObj = otpUpload(ctx);
        let { id } = ctx.request.body;
        Object.assign(saveSingObj, { id: parseInt(id) });
        // 3.更新数据到数据库
        console.log(saveSingObj);
        
        let result = await musicModel.updatedMusicByObj(saveSingObj);
        // 4.响应结果给用户
        console.log(result);
        if (result.affectedRows != 1) {
            // 没有更新成功
            ctx.body = { code: '002', msg: result.message };
            return;
        }

        ctx.body = {
            // ajax接收到的消息
            code: '001', msg: '更新成功'
        }
    },
    deleteMusic: async (ctx, next) => {
        // 接收请求URL中的查询字符串
        let id = ctx.request.query.id;  // ctx.query.icon-date
        
        // 删除音乐
        let result = await musicModel.deleteMusicById(id);
        console.log(result); 
        
        if (result.affectedRows === 0) {
            ctx.throw('删除失败:' + result.message);
            return;
        }

        // 响应请求
        ctx.body = { code: '001', msg: '删除成功！' };
        ctx.redirect('/music/index');
    },
    async showEdit(ctx, next) {
        // 获取查询字符串参数
        let id = ctx.query.id;
        // 通过id查询音乐
        let musics = await musicModel.findMusicById(id);
        // 判断是否存在
        if (musics.length === 0) {
            ctx.throw('歌曲不存在');
            return;
        }
        let music = musics[0];
        // console.log(music);
        
        // 渲染edit页面
        ctx.render('edit', {
            music: music
        });
    },
    async showIndex(ctx, next) {
        // 根据用户session中的id来查询数据
        let uid = ctx.session.user;
        // 根据id查询歌曲
        console.log(uid);
        
        let musics = await musicModel.findMusicByUid(uid);
        console.log(musics);
        
        // 展示给用户
        ctx.render('index', {
            musics
        });
    }
}