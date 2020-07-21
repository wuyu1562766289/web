import 'package:flutter/material.dart';
import 'share/app_theme.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    /*
    * 1. 一旦设置了主题，那么应用程序中的某些Widget就会直接使用主题的样式；
    * 2. 可以通过Theme.of(context).textTheme.display2
    * */
    return MaterialApp(
      title: "Theme Test",
      theme: WXAppTheme.norTheme,
      // 深色主题：写俩套会自动根据系统当前状态适配
      darkTheme: WXAppTheme.darkTheme,
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Theme"),
      ),
      body: Center(
          child: Column(
            children: <Widget>[
              Text("Hello World!"),
              Text("body2啊", style: Theme.of(context).textTheme.body2),
              Switch(value: true, onChanged: (val) {}, activeColor: Colors.red),
              RaisedButton(child: Text("Raise"), onPressed: () {}),
              Card(child: Text("您好啊！", style: TextStyle(fontSize: 25),),)
            ],
          )
      )
    );
  }
}
