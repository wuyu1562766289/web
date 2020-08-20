// Function.prototype._call = function(ctx) {
//   ctx.fn = this;
//   let args = [];
//   for(let i = 1; i < arguments.length; i++) {
//     args.push(arguments[i]);
//   }
//   // ctx.fn(...args);
//   let result = ctx.fn(...args);
//   delete ctx.fn;
//   return result;
// }

// 如果传入的context为null，原来的call方式是指向window的，并且还要考虑fn函数有返回值的情况
Function.prototype._call = function(context = window, ...args) {
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;

  return result;
}

function test(obj) {
  console.log(this, obj);
}
test._call({name: "wang"}, "---test");