let mysql = require('mysql');
const { dbConfig } = require('../config');
let pool = mysql.createPool(dbConfig);

let db = {};
db.q = function (sql, params) {
    return new Promise((resolve, reject) => {
        // 取出链接
        pool.getConnection(function (err, connection) {
            if (err) {                
                return reject(err);
            }
            connection.query(sql, params, (error, results, fields) => {
                console.log(`${sql}=>${params}`);
                // 释放连接
                connection.release();
                if (error) {           
                    // console.log(error);
                    
                    return reject(error);
                }
                resolve(results);
            })
        })
    })
}

module.exports = db;