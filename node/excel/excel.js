var xlsx = require('node-xlsx').default;
const fs = require('fs');

/* 读取Excel文档内容 */
// // Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`1.xls`));
// // Parse a file
// const workSheetsFromFile = xlsx.parse(`2.xlsx`);

// // console.log(workSheetsFromBuffer);
// // console.log(workSheetsFromFile);
// console.log(workSheetsFromBuffer[0].data);
// console.log(workSheetsFromFile[0].data);


/* 新建文件 */
// var xlsx = require('node-xlsx').default;

// const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
// var buffer = xlsx.build([{ name: "mySheetName", data: data }]); // Returns a buffer
// fs.writeFile('./3.xlsx', buffer, function () { });


/* 合并单元格 */
// sheet1内容合并
// var xlsx = require('node-xlsx').default;
// const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
// const range = { s: { c: 0, r: 0 }, e: { c: 0, r: 3 } }; // A1:A4
// const options = { '!merges': [range] };

// var buffer = xlsx.build([{ name: "mySheetName", data: data }], options); // Returns a buffer
// fs.writeFile('./4.xlsx', buffer, function () { });

// 合并sheet2内容
// var xlsx = require('node-xlsx').default;
// const dataSheet1 = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
// const dataSheet2 = [[4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14], ['baz', null, 'qux']];
// const range = { s: { c: 0, r: 0 }, e: { c: 0, r: 3 } }; // A1:A4
// const sheetOptions = { '!merges': [range] };

// var buffer = xlsx.build([{ name: "myFirstSheet", data: dataSheet1 }, { name: "mySecondSheet", data: dataSheet2, options: sheetOptions }]); // Returns a buffe
// fs.writeFile('./5.xlsx', buffer, function () { });

/*  */
// const rowAverage = [[{ t: 'n', z: 10, f: '=AVERAGE(2:2)' }], [1, 2, 3]];
// var buffer = xlsx.build([{ name: "Average Formula", data: rowAverage }]);
// fs.writeFile('./6.xlsx', buffer, function () { });


/* 设置列宽 */
var xlsx = require('node-xlsx').default;

const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']]
const options = { '!cols': [{ wch: 6 }, { wch: 7 }, { wch: 40 }, { wch: 20 }] };

var buffer = xlsx.build([{ name: "mySheetName", data: data }], options); // Returns a buffer
fs.writeFile('./7.xlsx', buffer, function () { });