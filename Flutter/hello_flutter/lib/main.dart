import 'package:flutter/material.dart';

//main() {
//  // 1.runApp函数
//  runApp(
//      MaterialApp(
//        // 隐藏右上角debug文字
//        debugShowCheckedModeBanner: false,
//        home: Scaffold(
//          appBar: AppBar(
//            title: Text("标题", textAlign: TextAlign.center),
//          ),
//          body: Center(
//              child: Text(
//                "Hello World!",
//                textDirection: TextDirection.ltr,
//                style: TextStyle(
//                    fontSize: 30,
//                    color: Colors.red
//                ),
//              )
//          ),
//        )
//      )
//  );
//}

// 提取代码
main() => runApp(MyApp());

/*
* Widget:
*   有状态的Widget: StatefulWidget 在运行过程中有一些状态（data）需要改变；
*   无状态的Widget：StatelessWidget 内容是确定的没有状态的改变。
* */
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        // 隐藏右上角debug文字
        debugShowCheckedModeBanner: false,
        home: WXHomePage());
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("标题", textAlign: TextAlign.center),
        ),
        body: WXContentBody());
  }
}

//class WXContentBody extends StatelessWidget {
//  @override
//  Widget build(BuildContext context) {
//    return Center(
//      child: Text(
//      "Hello World!",
//      textDirection: TextDirection.ltr,
//      style: TextStyle(fontSize: 30, color: Colors.red),
//    ));
//  }
//}

// 状态不能被改变，不能这样实现
//class WXContentBody extends StatelessWidget {
//  @override
//  Widget build(BuildContext context) {
//    return Center(
//      child: Row(
//        mainAxisAlignment: MainAxisAlignment.center,
//        children: <Widget>[
//          Checkbox(
//            value: false,
//            onChanged: (value) {
//              print(value);
//            }
//          ),
//          Text(
//            "同意协议",
//            style: TextStyle(fontSize: 25),
//          )
//        ],
//      )
//    );
//  }
//}

// StatefulWidget: 继承自StatefulWidget的类（可以接收父Widget传过来的数据）/State类（状态）
//Stateful不能定义状态 -> 创建一个单独的类，这个类负责维护状态
class WXContentBody extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return WXContentBodyState();
  }
}

class WXContentBodyState extends State<WXContentBody> {
  var flag = false;

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Checkbox(
            value: flag,
            onChanged: (value) {
              print(value);
              setState(() {
                flag = value;
              });
            }
          ),
          Text(
            "同意协议",
            style: TextStyle(fontSize: 25),
          )
        ],
      )
    );
  }
}