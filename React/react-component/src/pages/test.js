// while (lines = readline()) {
//   // print(lines);
//   for (let i = 0; i < lines.length; i += 8) {
//     let tmp = lines.substr(i, 8);
//     if (tmp.length < 8) {
//       while (tmp.length < 8) {
//         tmp += '0';
//       }
//       i += 8;
//     }
//     print(tmp);
//   }
// }

// let line1 = readline();
// let line2 = readline();

// let num = 0;
// for(let i = 0; i< line1.length; i++){
//     if(line1[i].toLocalString() === line2.)
//         num++
// }
// print(num);


// while(line = readline()) {
//   let line = 'aargbn';
//   let str = line.split('');
//   let tmp = str.reduce((obj, item, index) => {
//     obj[item] = (obj[item] || 0) + 1;
//     return obj;
//   }, {});
//   let test = Object.entries(tmp).sort((a,b) => a[1] - b[1]);
//   // console.log(test);
//   let num = test[0][1];
//   for(let i = 0; i < test.length; i++) {
//     if(test[i][1] > num) {
//       break;
//     }
//     str.splice(str.indexOf(test[i][0]), 1);
//   }
//   print(str.join(''));  
// }

// let line = readline();
// line = line.replace(/[^a-zA-Z]/g, ' ');
// let arr = line.split(' ');
// print(arr.filter(v=>v).reverse().join(' '));

// while (line = readline()) {
//   let arr = [0, 0];
//   let x = (num) => arr[0] += num;
//   let y = (num) => arr[1] += num;
//   let isTrue = (v) => {
//     let tmp = ['A', 'D', 'W', 'S'];
//     let isNum = parseInt(v.substring(1, v.length - 1));
//     if ((0 <= isNum < 100) && (tmp.indexOf(v[0]) === -1)) {
//       return false;
//     }
//     return true;
//   }

//   let str = line.split(';');
//   let dest = str.filter(v => {
//     if (v && (1 < v.length < 4) && isTrue) {
//       return v;
//     }
//   });
//   // print(dest);
//   dest.map(v => {
//     let num = parseInt(v.substring(1, v.length - 1));
//     switch (v[0]) {
//       case 'A':
//         x(-num);
//         break;
//       case 'S':
//         y(-num);
//         break;
//       case 'W':
//         y(num);
//         break;
//       case 'D':
//         x(num);
//         break;
//       default:
//         break;
//     }
//   });
//   print(arr.join(','))
// }
while (line = readline()) {
  let line = 'A10;S20;W10;D30;X;A1A;B10A11';
  let arr = [0, 0];
  let x = (num) => arr[0] += num;
  let y = (num) => arr[1] += num;

  let str = line.split(';');
  str.map(v => {
    let num = parseInt(v.substring(1, v.length - 1));
    switch (v[0]) {
      case 'A':
        x(-num);
        break;
      case 'S':
        y(-num);
        break;
      case 'W':
        y(num);
        break;
      case 'D':
        x(num);
        break;
      default:
        break;
    }
  });
  print(arr.join(','))
}