# 二分查找

```js
/**
 * 二分查找：折半查找算法要求查找表的数据是线性结构存储，还要求查找表中的顺序是由⼩到⼤排序（由⼤到⼩排序）
 *
 * 算法思路及实现：
 * 1. ⾸先设两个指针，low和height，表示最低索引和最⾼索引；
 * 2. 然后取中间位置索引middle，判断middle处的值是否与所要查找的数相同，相同则结束查找，middle处的值⽐所要
 *    查找的值⼩就把low设为middle+1，如果middle处的值⽐所要查找的值⼤就把height设为middle-1；
 * 3. 然后再新区间继续查找，直到找到或者low>height找不到所要查找的值结束查找。
 */
function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (target < arr[mid]) {
      max = mid - 1;
    } else if (target > arr[mid]) {
      min = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

let test = [1, 2, 3, 5, 8, 19, 40, 44, 99, 1000];

console.log(binarySearch(test, 40)); // 6
```

# Excel 编号转换

### 1. 数字转字母：

```js
numToString() {
  let numm = this.numTo;
  if(!numm) {
    return;
  }
  let stringArray = [];
  let numToStringAction = function(nnum) {
    let num = nnum - 1;
    let a = parseInt(num / 26);
    let b = num % 26;
    stringArray.push(String.fromCharCode(64 + parseInt(b + 1)));
    if (a > 0) {
      numToStringAction(a);
    }
  };
  numToStringAction(numm);
  return stringArray.reverse().join("");
}
```

### 2. 字母转数字：

```js
stringToNum() {
  let a = this.value;
  if(!a) {
    return;
  }
  let str = a.toLowerCase().split("");
  let al = str.length;
  let getCharNumber = function(charx) {
    return charx.charCodeAt() - 96;
  };
  let numout = 0;
  let charnum = 0;
  for (let i = 0; i < al; i++) {
    charnum = getCharNumber(str[i]);
    numout += charnum * Math.pow(26, al - i - 1);
  }
  return numout;
}
```
