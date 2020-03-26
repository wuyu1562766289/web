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