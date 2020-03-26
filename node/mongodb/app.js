const express = require('express');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const db = require('./dbTools');

let server = express();
let router = express.Router();

let students = [];

// 注册一个模板引擎
server.engine('.html', require('express-art-template'));
// 区分开发和生产环节的不同配置
server.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    imports: {
        num: 1,
        reverse: function (str) {
            return '^_^' + str + '^_^';
        }
    }
});
// 配置默认渲染引擎
server.set('view engine', '.html');

router.get('/', (req, res) => {    
    db.find({}, (err, students) => {
        if (err) throw err;
        res.render('index', {
            students
        });
    })
})
    .post('/add', (req, res, next) => {
        // 解析文件,用包
        var form = new formidable.IncomingForm();

        // 修改上传目录
        form.uploadDir = path.join(__dirname, 'public', 'imgs');
        // 保持原有后缀名
        form.keepExtensions = true;

        // 解析
        form.parse(req, function (err, fields, files) {
            let name = fields.name;
            let imgName = path.parse(files.imgName.path).base;
            
            // 存储imgs:网络能请求到的路径
            imgName = 'imgs/' + imgName;
            console.log({ name, imgName });
            
            /* students.push({
                name, imgName
            }); */
            db.insert([{ name, imgName }], (err, students) => {
                if (err) throw err;
                // if (err) return next(err);
                console.log(students);
                
                // 同步提交，浏览器等待页面显示
                res.redirect('/');
            });
        });
    })
    .all('*', (req, res) => {
        res.send('<h2>页面错误，去<a href="/">首页</a></h2>');
    });

// 要把public下的文件暴露出来
// server.use('/public', express.static('./public'));
server.use(express.static('./public'));

server.use(router);

// 处理错误（参数位置错误优先）
server.use((err, req, res, next) => {
    res.send('<h2>页面错误，去<a href="/">首页</a>看看</h2>');
});

server.listen(8888);