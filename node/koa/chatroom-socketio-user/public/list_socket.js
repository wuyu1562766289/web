// var socket = io('http://localhost:8888');
var privateTo = document.getElementById('toWho').value;

// 向什么组发
var groupTo;

socket.on('msg1', function (data) {
    console.log(msg1);

});
socket.on('disconnect', function () {
    console.log('断开链接了');

});
// 获取实时在线列表信息
socket.on('online', function (data) {
    var users = Object.values(data.online);
    // 展示在线人数
    document.getElementById('online').innerHTML = users.length;
    var select = document.getElementById('toWho');
    var html;
    for (var i = users.length - 1; i >= 0; i--) {
        var u = users[i];
        html += `<option value="${u.socketid}">${u.username}</option>`
        select.innerHTML = html;
    }
});

// 发起私聊
document.getElementById('sendPrivateMsg').onclick = function () {
    socket.emit('sendPrivateMsg', {
        msg: document.getElementById('privateMsg').value,
        // 向谁发
        to: privateTo,  // socketid
    });
}

// 加入男生组
document.getElementById('male').onclick = function () {
    socket.emit('joinGroup', 'male');
    // console.log('male'); 
    groupTo = 'male';
}
// 加入女生组
document.getElementById('female').onclick = function () {
    socket.emit('joinGroup', 'female');
    // console.log('female');    
    groupTo = 'female';
}
// 发起组聊
document.getElementById('sendGroupMsg').onclick = function () {
    // 获取发送的消息
    var msg = document.getElementById('groupMsg').value;
    socket.emit('sendGroupMsg', {
        groupTo, msg
    });
}

document.getElementById('btn').onclick = function () {
    var newContent = document.getElementById('newContent').value;
    socket.emit('sendMsg', {
        newContent: newContent
    });
};
socket.on('allmessage', function (data) {
    var html = document.getElementById('ul');
    html.innerHTML += data + '<br>';
});