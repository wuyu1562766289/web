const express = require('express');
const db = require('./dbTools');
const path = require('path');
const formidable = require('formidable');



let server = express();

server.engine('.html', require('express-art-template'));
server.set('view engine', '.html');

let router = express.Router();

router.get('/', (req, res) => {
    db.find('students', {}, (err, call) => {
        if (err) throw err;
        // console.log(call);
        res.render('index', {
            students: call
        })
    })
})
    .post('/add', (req, res, next) => {
        let form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, 'public', 'imgs');
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
            let name = fields.name;
            let imgName = 'imgs/' + path.parse(files.imgName.path).base;
            console.log(imgName);
            db.insert('students', [{ name, imgName }], (err, call) => {
                res.redirect('/');
            })
        })
    });

server.use(express.static('./public'));

server.use(router);

server.use((err, req, res, next) => {
    console.log(err);
    res.send('访问出错了');
})

server.listen(8888);