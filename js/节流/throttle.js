const box = document.querySelector('#box');

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


// function throttle(fn, delay = 100) {
//   let timer = null;

//   return function() {
//     if(timer) {
//       return;
//     }

//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//       timer = null;
//     }, delay);
//   }
// }

const throttle = (fn, delay = 1000) => {
  let flag = true;

  return (...arg) => {
    if(!flag) return;
    flag = false;

    setTimeout(() => {
      fn.apply(this, arg);
      flag = true;
    }, delay);
  }
}

box.addEventListener('drag', throttle(function(e) {
  console.log(e.offsetX, e.offsetY);  
}), 300);
