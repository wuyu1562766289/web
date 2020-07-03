main(List<String> args) {
  var p = Person("wang", 18);
  print(p.age);
}

class Animal {
  int age;

  Animal(this.age);
}

class Person extends Animal {
  String name;

  Person(this.name, int age) : super(age);
}
