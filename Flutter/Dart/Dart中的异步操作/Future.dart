import 'dart:io';

main(List<String> args) {
  print("main start");

  // var result = getNetWorkData();
  // print(result);

/**
 * 2. 拿到结果（dynamic）
 *  then后面的回调函数需要在Future有结果的时候才会执行下面的回调函数
 */
  var result = getNetWorkData();
  result.then((String value) {
    print(value);
  }).catchError((err) {
    print(err);
  }).whenComplete(() {
    print("代码执行完了！");
  });

  print("main end");
}

// 模拟一个网络请求
// String getNetWorkData() {
//   /** 会阻塞后面代码的执行 */
//   sleep(Duration(seconds: 2));
//   return "Hello World!";
// }

/** 
 * 异步操作：
 *  1. 将耗时的操作包裹到Future的回调函数中；
 *    只要有返回结果，那么就执行Future对应的then的回调；
 *    如果没有返回结果（有错误信息），需要在Future回调中抛出一个异常。   
 */
Future<String> getNetWorkData() {
  return Future<String>(() {
    sleep(Duration(seconds: 2));
    // return "Hello World!";

    throw Exception("我是错误信息！");
  });
}
