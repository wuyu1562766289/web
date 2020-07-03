main(List<String> args) {
  // 字符串声明方式
  var str1 = 'abc';
  var str2 = "abc";
  // 按格式输出
  var str3 = """
  我可以
  换行
  显示
  """;
  // print(str1);
  // print(str2);
  // print(str3);

  // 字符串和表达式拼接
  var name = "wang";
  var age = 18;
  var height = 1.55;

  // ${变量},那么{}可以省略
  // my name is wang, age is 18, height is 1.55
  var msg = "my name is ${name}, age is $age, height is $height";
  // my name is wang, type is String
  var msg1 = "my name is $name, type is ${name.runtimeType}";

  print(msg);
  print(msg1);
}
