// 1. 淘宝页面使用标签统计以及出现次数最多的标签：
// new Set([...document.querySelectorAll('*')].map(v => v.tagName))
// Object.entries([...document.querySelectorAll('*')].map(v=>v.tagName).reduce((a,b)=>{
//   a[b]=(a[b]||0)+1;
// return a
// } ,{})).sort((a,b)=>b[1]-a[1]).slice(0,3)

let tagArray = [...document.querySelectorAll('*')].map(v => v.tagName);
console.log(tagArray);

let obj = tagArray.reduce((a, b) => {
  a[b] = (a[b] || 0) + 1;
  return a;
}, {});
console.log(obj);

let arry = Object.entries(obj).sort((a, b) => b[1] - a[1]);
console.log(arry);

let data = arry.slice(0, 5);
console.log(data);

Object.entries([...document.querySelectorAll('*')].map(v=>v.nodeName).reduce((a,b)=>{a[b]=(a[b]||0)+1;return a},{})).sort((a,b)=>{b[1]-a[1]})

// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组   
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]             