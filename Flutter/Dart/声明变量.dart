main(List<String> args) {
  // 1.明确声明
  String name = "wang";

  // 2.类型推导(var/final/const)
  // var声明变量
  var age = 20;
  // age = "abc";   age为int类型，不能赋值字符串
  age = 30;

  // final声明常量
  final height = 1.8;
  // height = 2.0;  height已经赋值，不能被修改

  // const声明常量
  const address = "北京市";
  // address = "海淀区";  不能修改

  // final和const的区别
  /**
   * const必须赋值 常量值（编译期间需要有一个确定的值）
   * final可以通过计算/函数获取一个值（运行期间来确定一个值）
   */
  // final用的更多一些
  // const date = DateTime.now();   不能这样使用
  final date = DateTime.now();
}
