main(List<String> args) {
  const p1 = Person("wang", "18");
  const p2 = Person("wang", "20");
  print(identical(p1, p2));
}

class Person {
  final String name;
  final String age;

  const Person(this.name, this.age);
}
