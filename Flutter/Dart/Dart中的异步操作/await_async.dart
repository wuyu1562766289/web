import 'dart:io';

main(List<String> args) {
  print("main start");

  var res = getNetworkData().then((value) {
    print(value);
  });
  print(res);

  print("main end");
}

// String getNetworkData() {
//   sleep(Duration(seconds: 3));

//   return "Hello world!";
// }

Future getNetworkData() async {
  await sleep(Duration(seconds: 3));

  return "Hello world!";
}
