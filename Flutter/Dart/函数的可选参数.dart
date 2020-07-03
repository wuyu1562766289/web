main(List<String> args) {
  sayHello("wang");
  sayHello1("hello", 18);
  sayHello2("world", height: 1.5);
}

// 必选参数：必须传
void sayHello(String name) {
  print(name);
}

// dart中没有函数重载
/**
 * 可选参数：!// 只有可选参数才能有默认值
 *    位置可选参数：[int age, double height] 实参和形参在进行匹配时是根据位置来匹配的
 *    命名可选参数：
 */
void sayHello1(String name, [int age = 18, double height]) {
  print("$name $age");
}

void sayHello2(String name, {int age, double height = 1.8}) {
  print("$name $height");
}
