import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("基础Widget")
      ),
      body: WXHomeContent(),
    );
  }
}

class WXHomeContent extends StatefulWidget {
  @override
  _WXHomeContentState createState() => _WXHomeContentState();
}

class _WXHomeContentState extends State<WXHomeContent> {
  @override
  Widget build(BuildContext context) {
    // 普通文本使用
//    return TextDemo();
    // 富文本
    return Text.rich(
      TextSpan(
//        text: "Hello World!",
//        style: TextStyle(color: Colors.red, fontSize: 20)
        children: [
          TextSpan(text: "Hello World!", style: TextStyle(color: Colors.red)),
          TextSpan(text: "Hello Flutter!", style: TextStyle(color: Colors.cyan)),
          // 使用图标等
          WidgetSpan(child: Icon(Icons.favorite, color: Colors.red,)),
          TextSpan(text: "Hello Dart!", style: TextStyle(color: Colors.amber)),
        ]
      )
    );
  }
}

/// 组件提取快捷键：Ctrl+Alt+W
class TextDemo extends StatelessWidget {
  const TextDemo({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      "Hello World! 春风十里扬州路，卷上珠帘总不如。",
      textAlign: TextAlign.center,
      // 最多显示几行
      maxLines: 1,
      // 显示不全的用...表示
      overflow: TextOverflow.ellipsis,
      // 文本缩放显示
      textScaleFactor: 1.5,
      style: TextStyle(
        fontSize: 30,
        color: Colors.red,
        fontWeight: FontWeight.bold
      ),
    );
  }
}

