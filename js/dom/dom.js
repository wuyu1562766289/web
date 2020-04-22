// dom常用方法
let div1 = document.getElementById('div1');
console.log(div1);
let p1 = document.getElementsByClassName('p1');
console.log(p1);
let p = document.getElementsByTagName('p');   // 集合
console.log(p);
let pTag = document.querySelectorAll('p');
console.log(pTag);

// property形式
p1[0].style.width = '100px';
console.log(p1[0].style.width);

// attribute形式
div1.setAttribute('style', 'background: red');
div1.setAttribute('ww', '我是一个属性');
console.log(div1.getAttribute('ww'));

// 节点操作
// 新建节点
let p4 = document.createElement('p');
p4.innerHTML = '我是新插入的节点';
div1.appendChild(p4);
// 移动节点
let p2 = document.querySelector('#p2');
let div2 = document.querySelector('#div2');
div2.appendChild(p2);
// 删除节点
let child = div1.childNodes;  // 获取子元素列表
console.log(child);
let tmp = Array.from(child).filter(child => child.nodeType === 1);
console.log(tmp);
div1.removeChild(tmp[2]);

// 获取父元素
console.log(p2.parentNode);


// 创建多个dom节点优化
let list = document.getElementById('list');
// 创建一个文档对象，此时还没有插入到DOM结构中
let frag = document.createDocumentFragment();
for(let i = 0; i < 20; i++) {
  let li = document.createElement('li');
  li.innerHTML = i;
  // 先插入文档片段中
  frag.appendChild(li);
}
// 都完成后统一插到DOM结构中
list.appendChild(frag);