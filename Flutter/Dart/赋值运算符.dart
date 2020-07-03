main(List<String> args) {
  /**
   * ??=:
   *  当原来的变量有值时，那么？？=不执行；
   *  原来变量为null时，将值赋值给这个变量。
   */
  var name = null;
  name ??= "wang";
  print(name);
  var age = 18;
  age ??= 20;
  print(age);

  /**
   * ??:
   *  ??前面的数据有值，那么就使用？？前面的数据；
   *  ??前面的数据为null，那么就使用后面的值。
   */
  var sex = null;
  var temp = sex ?? "男";
  print(temp);
}
