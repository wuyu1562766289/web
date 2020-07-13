import 'dart:io';

main(List<String> args) {
  print("main start");

  Future(() {
    sleep(Duration(seconds: 2));
    return "第一次执行结果";
  }).then((value) {
    print(value);

    sleep(Duration(seconds: 2));
    return "第二次执行结果";
  }).then((value) {
    print(value);

    sleep(Duration(seconds: 2));
    return "第三次执行结果";
  }).then((value) {
    print(value);
  }).catchError((err) {
    print(err);
  });
}
