const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, { useNewUrlParser: true });

function _connect(col, callback) {
    client.connect(err => {
        if (err) throw err;
        const collection = client.db('test').collection(col);
        callback(collection);
    });
}

function _init_(collection) {
    _connect(collection, (collection) => {
        collection.createIndex({ "anystr": "2dsphere" }, function (err) {
            if (err) throw err;
            console.log('索引创建成功！');
            
            // client.close();
        })
    });
}
// 数据初始化
_init_('students');


let oAction = {
    insert: (collection, insertData, callback) => {
        _connect(collection, (collection) => {
            collection.insertMany(insertData, (err, res) => {
                callback(err, res);

                // client.close();
            });
        });
    },
    find: (collection, findData, callback) => {
        _connect(collection, (collection) => {
            collection.find(findData).toArray((err, res) => {
                callback(err, res);

                // client.close();
            });
        });
    },
    // 获取离我最近
    nearMe: (collection, findData, callback) => {
        _connect(collection, (collection) => {
            collection.aggregate({
                $geoNear: {
                    near: { type: "Point", coordinates: [parseFloat(findData.left), parseFloat(findData.right)] },
                    distanceField: "dist.calculated",
                    spherical: true/* ,
                    maxDistance: 40000 */
                }
            }, function (err, cursor) {
                cursor.toArray(function (err, docs) {
                    callback(err, docs);
                })
            })
        });
    }
}

/* oAction.insert('students', [{ name: 'wangxing', age: 18 }], (err, call) => {
    if (err) throw err;
    console.log(call);    
});
oAction.find('students', { name: 'wangxing'}, (err, call) => {
    if (err) throw err;
    console.log(call);
}); */

module.exports = oAction;