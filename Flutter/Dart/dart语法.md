## 类型推导(Type Inference)

- var/dynamic/const/final 变量名称 = 赋值;

  > final 和 const 都是用于定义常量的, 也就是定义之后值都不可以修改

  > const 在赋值时, 赋值的内容必须是在编译期间就确定下来的

  > final 在赋值时, 可以动态获取, 比如赋值一个函数

## 数据类型

- Dart 中不能判断非 0 即真, 或者非空即真
- 可以使用三个单引号或者双引号表示多行字符串

```dart
  // 表示多行字符串的方式
  var message1 = '''
  哈哈
  呵呵
  嘿嘿''';
```

> 字符串和其他变量或表达式拼接: 使用\${expression}, 如果表达式是一个标识符, 那么{}可以省略

## 运算符

- ??=赋值操作

  > 当变量为 null 时，使用后面的内容进行赋值。当变量有值时，使用自己原来的值。

- 条件运算符: expr1 ?? expr2

  > 如果 expr1 是 null，则返回 expr2 的结果;如果 expr1 不是 null，直接使用 expr1 的结果。

- 级联语法：.. > 某些时候，我们希望对一个对象进行连续的操作，这个时候可以使用级联语法

  ```dart
  class Person {
    String name;

    void run() {
      print("\${name} is running");
    }

    void eat() {
      print("\${name} is eating");
    }

    void swim() {
      print("\${name} is swimming");
    }
  }

  main(List<String> args) {
    final p1 = Person();
    p1.name = 'why';
    p1.run();
    p1.eat();
    p1.swim();

    final p2 = Person()
                ..name = "why"
                ..run()
                ..eat()
                ..swim();
  }

```
