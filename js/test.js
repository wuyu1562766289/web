// 闭包实际应用场景
// 隐藏数据，对外提供api

// function test() {
//   let data = {};

//   return {
//     set: function (key, value) {
//       data[key] = value;
//     },
//     get: function (key) {
//       return data[key];
//     }
//   }
// }

// let fun = test();
// fun.set('name', 'test');
// console.log(fun.get('name'));
// console.log(fun);


// // bind实现
// Function.prototype._bind = function () {
//   args = Array.prototype.slice.call(arguments);

//   let that = this;

//   return function () {
//     that.apply(args.shift(), args);
//   }
// }
// function fun(a, b, c) {
//   console.log(a, b, c);
//   console.log(this);
// }
// let test = fun._bind({ name: 'bind' }, 1, 2, 3);
// test();


// var name = "lucy";
// let obj = {
//   name: "martin",
//   say: function () {
//     console.log(this.name);
//   }
// };
// obj.say(); // martin，this指向obj对象
// setTimeout(obj.say, 0); // lucy，this指向window对象


// // 深度拷贝
// function deepClone(data = {}) {
//   if (typeof data !== "object" || data == null) {
//     return data;
//   }

//   let temp = data instanceof Array ? [] : {};
//   for (let i in data) {
//     if (data.hasOwnProperty(i))
//       temp[i] = typeof data[i] === 'object' ? deepClone(data[i]) : data[i];
//   }

//   return temp;
// }
// let test = {
//   name: 'obj',
//   age: 25,
//   like: {
//     food: 'banana'
//   }
// }
// let a = test;
// let b = deepClone(test);
// // JSON方法
// let c = JSON.parse(JSON.stringify(test));
// a.like.food = 'orange';
// console.log(a, b, c, test);

// let arr = [1, 2, [3, 4], { name: 'array', data: { length: 10 } }];
// let d = deepClone(arr);
// let e = JSON.parse(JSON.stringify(arr));
// arr[2][1] = 40;
// arr[3].data.length = 100;
// console.log(arr, d, e);


//! 闭包
// 函数作为返回值
// function create() {
//     const a = 100
//     return function () {
//         console.log(a)
//     }
// }

// const fn = create()
// const a = 200
// fn() // 100

// 函数作为参数被传递
function print(fn) {
  const a = 200
  fn()
}
const a = 100
function fn() {
  console.log(a)
}
print(fn) // 100

// 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方！！！
