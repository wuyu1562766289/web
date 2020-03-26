const express = require('express');
const db = require('./dbTools');
const path = require('path');
const formidable = require('formidable');
const fs = require('fs');

let server = express();

// 引入https
const https = require('https');
const options = {
    key: fs.readFileSync('./1530632509237.key'),
    cert: fs.readFileSync('./1530632509237.pem')
};
let app = https.createServer(options, server);


server.engine('.html', require('express-art-template'));
server.set('view engine', '.html');

let router = express.Router();

router.get('/list', (req, res) => {
    // left/right
    let location = req.headers.cookie.split('=');
    if (!location) return res.send('没有注册');
    location = location[1];
    let left = parseFloat(location.split(',')[1]);
    let right = parseFloat(location.split(',')[0]);

    db.nearMe('students', { left, right}, (err, call) => {
        if (err) throw err;
        console.log(call);
        res.render('list', {
            students: call
        })
    })
})
    .get('/', (req, res, next) => {
        res.render('index');
    })
    .post('/add', (req, res, next) => {
        let form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, 'public', 'imgs');
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
            let name = fields.name;
            let imgName = 'imgs/' + path.parse(files.imgName.path).base;
            let location = fields.location;
            let left = parseFloat(location.split(',')[1]);
            let right = parseFloat(location.split(',')[0]);
            console.log(imgName);
            db.insert('students', [{ name, imgName, anystr: { type: "Point", coordinates: [left, right] } }], (err, call) => {
                res.setHeader('set-cookie', 'location=' + location);
                res.redirect('/list');
            })
        })
    });

server.use(express.static('./public'));

server.use(router);

server.use((err, req, res, next) => {
    console.log(err);
    res.send('访问出错了');
})

// server.listen(8888);
app.listen(8888);