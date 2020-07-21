import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:hello_flutter/screenfit/size_fit.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
/*
    // 1. 手机的物理分辨率
    final physicalWidth = window.physicalSize.width;
    final physicalHeight = window.physicalSize.height;
    print("手机物理分辨率：$physicalWidth * $physicalHeight");

    // 2. 获取dpr（像素比）
    final dpr = window.devicePixelRatio;

    // 3. 手机屏幕的大小（逻辑分辨率）
//    final width = MediaQuery.of(context).size.width;
//    final height = MediaQuery.of(context).size.height;
    final width = physicalWidth / dpr;
    final height = physicalHeight / dpr;
    print("屏幕尺寸：$width * $height");

    // 4. 状态栏高度
    final statusHeight = window.padding.top / dpr;
    print("状态栏的高度：$statusHeight");
*/

    WXSizeFit.init();

    return MaterialApp(
      title: "ScreenFit",
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

/*    // MediaQuery需要初始化后才能拿到值
    // 2. 手机屏幕的大小（逻辑分辨率）
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    print("屏幕尺寸：$width * $height");*/

    return Scaffold(
      appBar: AppBar(
        title: Text("ScreenFit"),
      ),
      body: Center(
          child: Container(
            width: WXSizeFit.setPx(200),
            height: WXSizeFit.setRpx(400),
            color: Colors.red,
            alignment: Alignment.center,
            child: Text("我是内容", style: TextStyle(fontSize: 40 * WXSizeFit.rpx))
          )
      )
    );
  }
}

