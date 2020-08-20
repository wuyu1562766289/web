function f1(arg) {
  console.log("f1", arg);
  return arg;
}
function f2(arg) {
  console.log("f2", arg);
  return arg;
}
function f3(arg) {
  console.log("f3", arg);
  return arg;
}

const reducerFun = (...arg) => {
  return arg.reduce((a, b) => (...arg) => a(b(...arg)));
}

console.log(reducerFun(f1,f2,f3)("hello"));