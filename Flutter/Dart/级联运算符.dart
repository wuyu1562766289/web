main(List<String> args) {
  // var p = Person();
  // p.name = "wang";
  // p.run();
  // p.eat();

  // 级联运算符
  var p = Person()
    ..name = "wang"
    ..run()
    ..eat();
}

class Person {
  String name;

  void run() {
    print("${this.name} runing");
  }

  void eat() {
    print("${this.name} eating");
  }
}
