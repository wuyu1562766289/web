import 'package:flutter/material.dart';

// 混入
// Dart不支持多继承，如果该类已经继承了其他父类可以使用混入
//class WXCounterViewModel with ChangeNotifier {
class WXCounterViewModel extends ChangeNotifier {
  int _counter = 100;

  int get counter => _counter;

  set counter(int value) {
    _counter = value;
    // 数据更改后通知使用者
    notifyListeners();
  }
}