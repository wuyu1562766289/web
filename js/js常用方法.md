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

# 事件

```js
// 普通绑定
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function (ev) {
  // 触发的元素
  console.log(ev.target);

  alert("我被点击了！");
});

let p1 = document.getElementById("p1");
p1.addEventListener("click", function (ev) {
  ev.stopPropagation(); // 阻止冒泡
  console.log("激活");
});

// 代理绑定
let div2 = document.getElementById("div2");
div2.addEventListener("click", function (ev) {
  // 阻止默认行为
  ev.preventDefault();
  console.log(ev.target.innerHTML);
});
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

# Ajax

```js
let xhr = new XMLHttpRequest();
// 第三个参数为true则为异步处理，否则为同步
xhr.open("GET", "data/test.json", true);
// 必须有send才会进行数据交互处理，get方式传null即可
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    } else if (xhr.status === 404) {
      console.log("404 not found");
    }
  }
};

/**
 * readyState的状态值：
 *    0：（未初始化）对象已建立，但是尚未初始化（未调用open方法）；
 *    1：（初始化）对象已建立，尚未调用send方法；
 *    2：（发送数据）send方法已调用，但是当前的状态及http头未知；
 *    3：（数据传送中）已接收部分数据，因为响应及http头不全，此时
 *        通过responseBody、responseText获取部分数据会出错；
 *    4：（完成）数据接收完毕，此时可用通过responseBody和responseText
 *        获取完整的回应数据；
 */

/**
 * status状态值：
 * 1xx - 信息提示，服务器收到请求，需要请求者继续执行操作
 *   100：初始请求已接受，客户应继续发送请求的其余部分；
 *   101：服务器将遵从客户的请求转换到另外一种协议；
 * 2xx - 成功，操作被成功接收并处理
 *   200：请求成功，获得响应内容进行处理；
 *   201：请求完成，创建了新的资源；
 *   202：请求被接受，但处理尚未完成，阻塞等待；
 *   203：请求成功，但非授权信息（没有权限）；
 *   204：服务器处理成功，但未返回内容；
 *   205：重置内容；
 *   206：部分内容，服务器成功处理了部分GET请求；
 * 3xx - 重定向，需要进一步的操作以完成请求
 *   301：永久移动，返回信息会包括新的url，浏览器自动定向到新url；
 *   302：临时移动；
 *   303：查看其它地址，类似301；
 *   304：未修改，所请求的资源未修改，服务器不会返回任何资源，客户端从缓存访问；
 *   305：使用代理，请求的资源必须通过代理访问；  *
 * 4xx - 客户端错误，请求包含语法错误或无法完成请求
 *   400：客户端请求的语法错误；
 *   401：请求要求用户身份认证；
 *   402：保留，将来使用；
 *   403：服务器拒绝执行此请求；
 *   404：服务器无法根据客户端请求找到资源；
 *   405：客户端请求中的方法被禁止；  *
 * 5xx - 服务器错误，服务器在处理请求的过程中发生了错误
 *   500：服务器内部错误；
 *   501：服务器不支持请求的功能；
 *   502：作为网关或者代理工作的服务器尝试执行请求时从远程服务器收到了一个无效响应；
 *   503：超载或系统维护，服务器暂时无法处理客户端的请求；
 *   504：充当网关或代理的服务器，未及时从远端服务器获取请求；
 *   505： 服务器不支持请求的HTTP协议版本
 */

/**
 *
 * @param {请求地址} url
 * @param {请求方式} type
 * @param {要发送的数据} data
 */
function ajax(url, type = "GET", data = null) {
  type = type.toLocaleUpperCase();
  let pro = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error("error"));
        }
      }
    };
  });

  return pro;
}

ajax("/data/test.json", "get")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

# 防抖实现

```js
const input1 = document.querySelector("input");

// let timer = null;
// input1.addEventListener('keyup', function() {
//   if(timer) {
//     clearTimeout(timer);
//   }

//   timer = setTimeout(function() {
//     console.log(input1.value);
//     timer = null;
//   }, 500);
// })

function debounce(fn, delay = 500) {
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

input1.addEventListener(
  "keyup",
  debounce(function (e) {
    // console.log(e);
    console.log(e.target.value);
  }, 600)
);
```

# 节流实现

```js
const box = document.querySelector("#box");

// let timer = null;
// box.addEventListener('drag', function(e) {
//   // console.log(e.offsetX, e.offsetY);
//   if(timer) {
//     return;
//   }
//   timer = setTimeout(() => {
//     console.log(e.offsetX, e.offsetY);
//     timer = null;
//   }, 100);
// });

function throttle(fn, delay = 100) {
  let timer = null;

  return function () {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

box.addEventListener(
  "drag",
  throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
  }),
  300
);
```

# Array

```js
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
  const isDeep = arr.some((item) => item instanceof Array);
  if (!isDeep) {
    return arr;
  }

  const res = Array.prototype.concat.apply([], arr);
  //递归
  return flat(res);
}

const test = flat([1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10]);
console.log(test);
```

# 深度比较

```js
// 全相等（深度）
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型（注：参与equal的一般不会是函数）
    return obj1 === obj2;
  }

  // 两个都是对象或数组，而且不相等
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // 递归比较
  for (let key in obj1) {
    let res = isEqual(obj1[key], obj2[key]);
    if (!res) {
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
    y: 200,
  },
};

let obj2 = {
  a: 100,
  b: 200,
  c: {
    x: 100,
    y: 200,
    z: 300
  },
};

console.log(isEqual(obj1, obj2));
```
