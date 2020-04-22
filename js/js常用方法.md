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

# apply，call，bind 三者的区别

```js
// 三者都可以改变函数的this对象指向。
// 三者第一个参数都是this要指向的对象，如果没有这个参数或参数为undefined或null，则默认指向全局window。
// 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
// bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。

// bind实现
Function.prototype._bind = function () {
  args = Array.prototype.slice.call(arguments);

  let that = this;

  return function () {
    that.apply(args.shift(), args);
  };
};
function fun(a, b, c) {
  console.log(a, b, c);
  console.log(this);
}
let test = fun._bind({ name: "bind" }, 1, 2, 3);
test();
```

# 深度拷贝

```js
function deepClone(data = {}) {
  if (typeof data !== "object" || data == null) {
    return data;
  }

  let temp = data instanceof Array ? [] : {};
  for (let i in data) {
    if (data.hasOwnProperty(i))
      temp[i] = typeof data[i] === "object" ? deepClone(data[i]) : data[i];
  }

  return temp;
}
let test = {
  name: "obj",
  age: 25,
  like: {
    food: "banana",
  },
};
let a = test;
let b = deepClone(test);
// JSON方法
let c = JSON.parse(JSON.stringify(test));
a.like.food = "orange";
console.log(a, b, c, test);

let arr = [1, 2, [3, 4], { name: "array", data: { length: 10 } }];
let d = deepClone(arr);
let e = JSON.parse(JSON.stringify(arr));
arr[2][1] = 40;
arr[3].data.length = 100;
console.log(arr, d, e);
```

# 闭包

所有的自有变量的查找，是在函数定义的地方，向上级作用域查找
不是在执行的地方！！！

```js
// 函数作为返回值
function create() {
  const a = 100;
  return function () {
    console.log(a);
  };
}

const fn = create();
const a = 200;
fn(); // 100

// 函数作为参数被传递
function print(fn) {
  const a = 200;
  fn();
}
const a = 100;
function fn() {
  console.log(a);
}
print(fn); // 100

// 闭包实际应用场景
// 隐藏数据，对外提供api
function test() {
  let data = {};

  return {
    set: function (key, value) {
      data[key] = value;
    },
    get: function (key) {
      return data[key];
    },
  };
}

let fun = test();
fun.set("name", "test");
console.log(fun.get("name"));
console.log(fun);
```

# DOM 操作

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        border: 1px salmon solid;
      }
    </style>
  </head>
  <body>
    <div id="div1">
      <p class="p1">这是第一段文字</p>
      <p id="p2">这是第二段文字</p>
      <p id="p3">这是第三段文字</p>
    </div>
    <div id="div2">
      <button>这是一个按钮</button>
    </div>

    <script src="dom.js"></script>
  </body>
</html>
```

```js
// dom常用方法
let div1 = document.getElementById("div1");
console.log(div1);
let p1 = document.getElementsByClassName("p1");
console.log(p1);
let p = document.getElementsByTagName("p"); // 集合
console.log(p);
let pTag = document.querySelectorAll("p");
console.log(pTag);

// property形式
p1[0].style.width = "100px";
console.log(p1[0].style.width);

// attribute形式
div1.setAttribute("style", "background: red");
div1.setAttribute("ww", "我是一个属性");
console.log(div1.getAttribute("ww"));

// 节点操作
// 新建节点
let p4 = document.createElement("p");
p4.innerHTML = "我是新插入的节点";
div1.appendChild(p4);
// 移动节点
let p2 = document.querySelector("#p2");
let div2 = document.querySelector("#div2");
div2.appendChild(p2);
// 删除节点
let child = div1.childNodes; // 获取子元素列表
console.log(child);
let tmp = Array.from(child).filter((child) => child.nodeType === 1);
console.log(tmp);
div1.removeChild(tmp[2]);

// 获取父元素
console.log(p2.parentNode);
```

- 创建多个 dom 节点优化

```js
// 创建多个dom节点优化
let list = document.getElementById("list");
// 创建一个文档对象，此时还没有插入到DOM结构中
let frag = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
  let li = document.createElement("li");
  li.innerHTML = i;
  // 先插入文档片段中
  frag.appendChild(li);
}
// 都完成后统一插到DOM结构中
list.appendChild(frag);
```

# BOM 操作

```js
// navigator
const ua = navigator.userAgent; // 获取浏览器信息
const isChrome = ua.indexOf("Chrome");
console.log(isChrome);

// screen
console.log(screen.width);
console.log(screen.height);

// location
console.log(location.href); // http://localhost:8080/
// 协议
console.log(location.protocol); // http:
// 域名
console.log(location.host);
// 路径信息
console.log(location.pathname); // /
// 查询参数
console.log(location.search);
// 哈希（#）
console.log(location.hash);

// history
history.back(); // 返回
history.forward(); // 前进
```
