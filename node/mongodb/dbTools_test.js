const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

// 客户端连接服务器
/* MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var col = db.db('test').collection('dervice');
    var myObj = { name: 'wd', age: 19 };
    col.insertOne(myObj, function (err, res) {
        if (err) throw err;
        console.log("插入成功");

        col.find().toArray(function (err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
        });
    })
}); */

const client = new MongoClient(url, {
    useNewUrlParser: true
});
client.connect(err => {
    if (err) throw err;
    const col = client.db("test").collection("dervice");

    var myObj = [
        { name: 'wd', age: 19 },
        { name: 'wx', age: 26 },
        { name: 'dx', age: 7 }];
    col.insertMany(myObj, function (err, res) {
        if (err) throw err;
        console.log("插入成功");

        col.find().toArray(function (err, res) {
            if (err) throw err;
            console.log(res);
            client.close();
        });
    })
});