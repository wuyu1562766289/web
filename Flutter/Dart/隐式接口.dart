main(List<String> args) {}

/**
 * Dart中没有关键字来定义接口；
 * 没有interface/protocol；
 * 默认情况下所有的类都是隐式接口；
 * Dart支持单继承；
 * 当一个类当做接口使用时，实现这个接口的类必须实现这个接口中所有的方法
 */

class Runner {
  void running() {}
}

class Flyer {
  void flying() {}
}

class Animal {
  void eating() {
    print("吃东西");
  }

  void running() {
    print("running");
  }
}

class SuperMan extends Animal implements Runner, Flyer {
  @override
  void eating() {
    super.eating();
  }

  @override
  void flying() {}
}
