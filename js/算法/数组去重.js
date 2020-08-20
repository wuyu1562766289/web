let arr = ['1', '2', '3', '1', 'a', 'b', 'b'];

// forEach
// let dest = arr => {
//   let obj = {};
//   arr.forEach(value => {
//     obj[value] = 0;
//   });
//   return Object.keys(obj);
// }

// filter
// let dest = arr => {
//   return arr.filter((element, index, array) => {
//     return index === array.indexOf(element);
//   })
// }

// reduce
let dest = arr => {
  let temp = arr.reduce((obj, item) => {
    obj[item] = 0;
    return obj;
  }, {})

  return Object.keys(temp);
}

// Set
// let dest = arr => {
//   return [...new Set(arr)];
// }

console.log(dest(arr));