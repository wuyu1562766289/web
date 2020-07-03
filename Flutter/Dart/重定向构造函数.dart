main(List<String> args) {
  var p = Person("wang");
  print(p.age);
}

class Person {
  String name;
  int age;

  // Person(this.name) : age = 18;
  // 构造函数的重定向
  Person(String name) : this._internal(name, 18);
  Person._internal(this.name, this.age);
}
