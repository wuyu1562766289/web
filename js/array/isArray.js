let arr = [1,2,3];
let str = "abc";

// console.log(Array.isArray(arr));

// console.log(Object.prototype.toString.call(arr) === "[object Array]");

function isArray(arr) {
  if(!Array.isArray) {
    Array.isArray = function(arr) {
      return Object.prototype.toString.call(arr) === "[object Array]";
    }
  } else {
    return Array.isArray(arr);
  }
}

console.log(isArray(arr));
console.log(isArray(str));
