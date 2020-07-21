import 'dart:math';

import 'package:flutter/material.dart';
import 'package:hello_flutter/animation/pages/model_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "animation",
      theme: ThemeData(primaryColor: Colors.greenAccent, splashColor: Colors.yellow),
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
      ),
      body: Center(
        child: Text("Hello World!"),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.info),
        onPressed: () {
          /*Navigator.of(context).push(MaterialPageRoute(
            builder: (ctx) {
              return WXModelPage();
            },
            // 设置该属性修改页面打开的效果为从下往上弹出
            fullscreenDialog: true
          ));*/

          Navigator.of(context).push(PageRouteBuilder(
            // 转场时间
            transitionDuration: Duration(seconds: 3),
            pageBuilder: (ctx, animation1, animation2) {
              return FadeTransition(
                opacity: animation1,
                child: WXModelPage(),
              );
            }
          ));
        },
      ),
    );
  }
}
