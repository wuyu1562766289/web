let a = 4, b = 10;

// 1.异或运算
// let dest = (a, b) => {
//   a ^= b;
//   b ^= a;
//   a ^= b;
//   return [a, b];
// }

// 2.加减运算
// let dest = (a, b) => {
//   a = a - b;
//   b = b + a;
//   a = b - a;
//   return [a, b];
// }

// console.log(dest(a, b));

// 3.解构
[a, b] = [b, a];
console.log(a, b);


