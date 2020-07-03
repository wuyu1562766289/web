main(List<String> args) {
  // 列表List：[]
  var name = ["abc", "def", "ghi", "abc"];
  name.add("jkl");

  // 集合Set: {}
  var movies = {"盗梦空间", "大话西游"};
  print(movies);
  // 数组去重
  name = Set<String>.from(name).toList();
  print(name);

  // 映射
  var info = {"name": "wang", "age": 18};
  print(info);
}
