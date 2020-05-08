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


function throttle(fn, delay = 100) {
  let timer = null;

  return function() {
    if(timer) {
      return;
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}

box.addEventListener('drag', throttle(function(e) {
  console.log(e.offsetX, e.offsetY);  
}), 300);