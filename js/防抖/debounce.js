const input1 = document.querySelector('input');

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

// function debounce(fn, delay = 500) {
//   let timer = null;

//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//       timer = null;
//     }, delay);
//   }
// }

const debounce = (fn, delay = 500) => {
  let timmer = null;

  return (...arg) => {
    // if(timmer) {
    //   clearTimeout(timmer);
    // }
    timmer && clearTimeout(timmer);
    timmer = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  }
}

input1.addEventListener('keyup', debounce(function (e) {
  // console.log(e);
  console.log(e.target.value);
}, 600))
