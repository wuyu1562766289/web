import 'dart:math';

import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hello_flutter/service/http_request.dart';

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

class WXHomePage extends StatefulWidget {
  @override
  _WXHomePageState createState() => _WXHomePageState();
}


class _WXHomePageState extends State<WXHomePage> {
  // 初始会滚动到300的地方
  ScrollController controller = ScrollController(initialScrollOffset: 300);
  bool _isShow = false;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    controller.addListener(() {
//      print("监听到滚动了...: ${controller.offset}");
      setState(() {
        // 滚动到1000以上时显示回到顶部按钮
        _isShow = controller.offset >= 1000;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("列表")
      ),
      body: WXHomeContent()
    );
  }
}

class WXHomeContent extends StatefulWidget {
  @override
  _WXHomeContentState createState() => _WXHomeContentState();
}

class _WXHomeContentState extends State<WXHomeContent> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    /*
    // 发送网络请求
    // 1. 创建Dio对象
    final dio = Dio();
    // 2. 发送网络请求
    dio.get("https://httpbin.org/get").then((value) {
      print(value);
    });
    dio.post("https://httpbin.org/post").then((value) {
      print(value);
    });
    */

    HttpRequest.request("/get", params: {"name": "hello"}).then((value) {
      print(value);
    }).catchError((err) {
      print(err);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}


