const cmd = require("node-cmd");

// //���бʼǱ�
// cmd.run("notepad");

// //���бʼǱ�
// cmd.get("notepad", function (err, data) {
//     console.log(data);
// });

//ping�������ֵ
// cmd.get("ping 127.0.0.1", function (err, data) {
//     console.log(data);
// });

let aUser = ['a', 'HY0052', 'HY0053', 'HY0002', 'HY0012'];

function getUser(nTotal) {
    return Math.floor(Math.random() * nTotal);
}

let sUser = aUser[getUser(5)];
console.log(sUser);

let sStr = `ping 127.0.0.1 -a${sUser}`;
console.log(sStr);

cmd.get(sStr, function (err, data) {
    console.log(data);
});

