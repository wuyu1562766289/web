import 'dart:isolate';

main(List<String> args) {
  print("main start");

  // 重开一个线程执行该操作
  Isolate.spawn(sum, 100);

  print("main end");
}

void sum(int count) {
  var total = 0;

  for (var i = 0; i < count; i++) {
    total += i;
  }
  print(total);
}
