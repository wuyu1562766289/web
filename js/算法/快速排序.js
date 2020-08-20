let quickSort = function(arr) {
  if(arr.length <= 1) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [],
      reight = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      reight.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(reight));
}

let arr = [34,56,22,98,0,2,988,23,11,56,44,35,34,22,11];
console.log(quickSort(arr));