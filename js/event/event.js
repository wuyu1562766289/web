// 普通绑定
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(ev) {
  // 触发的元素
  console.log(ev.target);
  
  alert('我被点击了！');
});

let p1 = document.getElementById('p1');
p1.addEventListener('click', function(ev) {
  // ev.stopPropagation(); // 阻止冒泡
  console.log('激活');  
})

// 代理绑定
let div2 = document.getElementById('div2');
div2.addEventListener('click', function(ev) {
  // 阻止默认行为
  ev.preventDefault();
  console.log(ev.target.innerHTML);  
})