const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";

let dbName = "students";
let client = new MongoClient(url, { useNewUrlParser: true });

/* client.connect(err => {
    if (err) throw err;

    let collection = client.db('test').collection('dervice');

    collection.insertOne({ name: 'wangxing', age: 25 }, (err, res) => {
        if (err) throw err;
        console.log('插入成功！');

        collection.find().toArray((err, res) => {
            if (err) throw err;
            console.log(res);

        });
    })
}); */

let oAction = {
    insert: (insertData, callback) => {
        _connect(dbName, (col) => {
            col.insertMany(insertData, (err, res) => {
                callback(err, res);
                // client.close();
            });
        });
    },
    find: (findData, callback) => {
        _connect(dbName, col => {
            col.find(findData).toArray((err, res) => {
                callback(err, res);
                // client.close();
            });
        });
    },
    update: (filter, ubdated, callback) => {
        _connect(dbName, col => {
            col.update(filter, { $set: ubdated }, (err, res) => {
                callback(err, res);
                client.close();
            });
        });
    },
    delete: (filter, callback) => {
        _connect(dbName, col => {
            col.deleteMany(filter, (err, res) => {
                callback(err, res);
                client.close();
            });
        });
    }
};

function _connect(dbName, callback) {
    client.connect(err => {
        if (err) throw err;
        col = client.db('test').collection(dbName);
        callback(col);
    });
}
// 插入
/* oAction.insert([{
    name: '222',
    imgName: 'imgs/upload_d24b4ec19930104ec8b3e49d97197c19.png'
}], (err, res) => {
    if (err) throw err;
    // console.log(res);    
}); */
// 更新
/* oAction.update({ name: 'wangxing' }, { name: 'wangwen' }, (err, res) => {
    if (err) throw err;
    // console.log(res);
}); */
// 删除
/* oAction.delete({ name: 'wangwen' }, (err, res) => {
    if (err) throw err;
    console.log(res);
}); */
// 查找
/* oAction.find({}, (err, res) => {
    if (err) throw err;
    console.log(res);
}); */

module.exports = oAction;




