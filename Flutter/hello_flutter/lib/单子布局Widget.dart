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
      // 浮动按钮
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => print("FloatingActionButton"),
      ),
      // 设置浮动按钮的位置
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}

class WXHomeContent extends StatefulWidget {
  @override
  _WXHomeContentState createState() => _WXHomeContentState();
}

class _WXHomeContentState extends State<WXHomeContent> {
  final userTextEditingController = TextEditingController();
  final passwordTextEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Icon(Icons.pets, size: 50, color: Colors.white),
      width: 200,
      height: 200,
      // 显示位置
      alignment: Alignment(1, 1),
      // 外边距
      padding: EdgeInsets.all(20),
      margin: EdgeInsets.all(10),
      // 形变
      transform: Matrix4.rotationZ(50),
      decoration: BoxDecoration(
        color: Colors.redAccent,
        border: Border.all(
          width: 5,
          color: Colors.pink
        ),
        // 圆
        borderRadius: BorderRadius.circular(100),
        // 阴影
        boxShadow: [
          BoxShadow(color: Colors.amber, offset: Offset(10, 10), spreadRadius: 5, blurRadius: 5),
          BoxShadow(color: Colors.lightBlueAccent, offset: Offset(-10, -10), spreadRadius: 5, blurRadius: 5)
        ]
      ),
    );
  }
}

