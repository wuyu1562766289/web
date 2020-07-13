import 'dart:io';

main(List<String> args) {
  // Future(() {
  //   return "hello";
  // }).then((value) {
  //   print(value);
  // });

  Future.value("world").then((value) {
    print(value);
  });

  Future.error("错误信息").catchError((err) {
    print(err);
  });

  Future.delayed(Duration(seconds: 3), () {
    return "Hello World!";
  }).then((value) {
    print(value);
  });
}
