main(List<String> args) {
  final sup = SuperMan();
  sup.running();
  sup.eating();
}

mixin Runner {
  void running() {
    print("runner running");
  }
}

mixin Flyer {
  void flying() {
    print("flying");
  }
}

class Animal {
  void eating() {
    print("吃东西");
  }

  void running() {
    print("running");
  }
}

class SuperMan extends Animal with Runner, Flyer {
  @override
  void eating() {
    super.eating();
  }

  @override
  void flying() {
    print("superMan running");
  }
}
