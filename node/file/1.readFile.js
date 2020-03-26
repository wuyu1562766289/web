const fs = require("fs");

fs.readFile("./read.txt", "Utf-8", (err, data) => {
    console.log(data);
    fs.writeFile("./write.txt", data, err => {
        err && console.log("写入错误！");
        console.log(data);
    });
});

