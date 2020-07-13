import 'dart:io';

main(List<String> args) {
  print("main start");

  getData();

  print("main end");
}

// void getData() {
//   getNetWorkData("arg1").then((value) {
//     print(value);
//     return getNetWorkData(value);
//   }).then((value) {
//     print(value);
//     return getNetWorkData(value);
//   }).then((value) {
//     print(value);
//   });
// }

Future getData() async {
  var res1 = await getNetWorkData("arg1");
  print(res1);
  var res2 = await getNetWorkData(res1);
  print(res2);
  var res3 = await getNetWorkData(res2);
  print(res3);
}

Future getNetWorkData(String arg) {
  return Future(() {
    sleep(Duration(seconds: 2));
    return " Hello $arg ";
  });
}
