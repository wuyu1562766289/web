const buf1 = Buffer.alloc(20);
console.log(buf1);  // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.from('A');
console.log(buf2);  // <Buffer 41>

const buf3 = Buffer.from('王');
console.log(buf3);  // <Buffer e7 8e 8b>

const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4.toString()); // A王
