const buf1 = Buffer.alloc(10);
console.log(buf1);  // <Buffer 00 00 00 00 00 00 00 00 00 00>
buf1.write('hello');
console.log(buf1);  // <Buffer 68 65 6c 6c 6f 00 00 00 00 00>

const buf2 = Buffer.from('A');
console.log(buf2);  // <Buffer 41>

const buf3 = Buffer.from('王');
console.log(buf3);  // <Buffer e7 8e 8b>

const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4.toString()); // A王
console.log(buf4.toJSON()); // { type: 'Buffer', data: [ 65, 231, 142, 139 ] }
