const path = require('path');
module.exports = {
    dbConfig: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test'
    },
    appPort: 8888,
    staticPath: path.resolve('./public'),
    rootPath: path.join(__dirname, 'views'),
    uploadDir: path.resolve('./public/files')
}