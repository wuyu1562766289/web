main(List<String> args) {
  test(bar);

  // 匿名函数
  test(() {
    print("这是一个匿名函数！");
  });

  // 箭头函数：条件，函数体只有一行代码
  test(() => print("箭头函数被调用了！"));

  /** 
 * 带参数函数传递优化
 */
  fun((num1, num2) => num1 + num2);

  var tmp = fun1();
  print(tmp(20, 30));
}

// 函数可以作为另一个函数的参数
void test(Function foo) {
  foo();
}

void bar() {
  print("bar函数被调用了!");
}

/** 
 * 带参数函数传递优化
 */
// void fun(int sum(int num1, int num2)) {
//   int tmp = sum(20, 30);
//   print(tmp);
// }

// 使用typedef优化(函数签名)
typedef Fun = int Function(int num1, int num2);
void fun(Fun fun) {
  print(fun(30, 40));
}

// 返回一个匿名函数
Fun fun1() {
  return (num1, num2) {
    return num1 * num2;
  };
}
