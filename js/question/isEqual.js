// 全相等（深度）
function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isEqual(obj1, obj2) {
  if(!isObject(obj1) || !isObject(obj2)) {
    // 值类型（注：参与equal的一般不会是函数）
    return obj1 === obj2;
  }
  
  // 两个都是对象或数组，而且不相等
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if(obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // 递归比较
  for(let key in obj1) {
    let res = isEqual(obj1[key], obj2[key]);
    if(!res) {
      return false;
    }
  }

  // 全相等
  return true;
}

let obj1 = {
  a: 100,
  b: 200,
  c: {
    x: 100,
    y: 200
  }
};

let obj2 = {
  a: 100,
  b: 200,
  c: {
    x: 100,
    y: 200,
    z: 300
  }
};

console.log(isEqual(obj1, obj2));
