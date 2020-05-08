// 纯函数：1.不改变原数组（没有副作用）；
//        2.返回一个数组；
// concat
// map
// filter
// slice

// 非纯函数
// splice


// const res = [10, 20, 30].map(parseInt);
// console.log(res);   //  [10, NaN, NaN]


// 多维数组转一维数组
function flat(arr) {
  // 验证arr中是否还有深层数组
  const isDeep = arr.some(item => item instanceof Array);
  if(!isDeep) {
    return arr;
  }

  const res = Array.prototype.concat.apply([], arr);
  //递归
  return flat(res);
}

const test = flat([1,2,3,[4,5,[6,7,[8,9]]],10]);
console.log(test);

