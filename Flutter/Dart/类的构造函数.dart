main(List<String> args) {
  // 创建Person对象
  var p = Person.nameAgeHeight("name", 18, 1.88);
  // 重写toString方法
  print(p.toString());

/**
 * Object和dynamic的区别：
 *  父类应用指向子类对象
 *  Object和dynamic：
 *    object调用方法时，编译会报错
 *    dynamic调用方法时，编译时不报错，但是运行时会存在安全隐患
 */
  // Object obj = "hello";
  // print(obj.substring(1));
  // // 明确声明
  // dynamic obj = 123;
  // print(obj.substring(1));

  var p1 = Person.fromMap({"name": "wang", "age": 18, "height": 1.88});
  print(p1);
}

class Person {
  String name;
  int age;
  double height;

  Person(this.name, this.age);

  // Person(this.name, this.age, this.height);
  // 命名构造函数
  Person.nameAgeHeight(this.name, this.age, this.height);
  Person.fromMap(Map<String, dynamic> map) {
    this.name = map["name"];
    this.age = map["age"];
    this.height = map["height"];
  }

  @override
  String toString() {
    return "$name $age $height";
  }
}
