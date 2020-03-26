const fs = require('fs');

fs.readFile('1.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);  // <Buffer 5b 31 2c 32 2c 33 2c 34 5d 0d 0a>
    }
});
