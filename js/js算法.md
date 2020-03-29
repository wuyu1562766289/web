- Excel 编号转换

1. 数字转字母：

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

2. 字母转数字：

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
