# 进制转换

- parseInt(str,radix)：将字符串 str 按照 radix 进制编码方式转换为 10 进制返回。若没有 radix，默认为 10 进制； 此方法把任意进制字符串转为 10 进制返回。
  `console.log(parseInt('23',8)); // 19`
- toString(radix)：返回表示该数字的指定进制形式的字符串。（把 10 进制的数据转为指定进制，并以字符串形式输出）；radix 支持 [2, 36] 之间的整数（默认为 10）。

```js
var x = 66;
x.toString(16); // “42”

var m = 2;
var n = m.toString();
console.log(typeof n); // 'string'
```

- m 进制转换为 n 进制

```js
main(num, m, n);
function main(num, m, n) {
  var s = num + "";
  var result = parseInt(s, m).toString(n);
  return result;
}
```
