import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Event",
      theme: ThemeData(primaryColor: Colors.greenAccent, splashColor: Colors.red),
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Event"),
      ),
      body: Center(
        // 原生事件监听
//        child: ListenerEvent(),
        // Flutter框架封装提供
//          child: WXGestureDetector(),
        // 冒泡
        child: WXStack(),
      ),
    );
  }
}

class WXGestureDetector extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: GestureDetector(
        onTapDown: (details) {
          print("手指按下了");
          // 整个屏幕
          print(details.globalPosition);
          // 组件位置
          print(details.localPosition);
        },
        onTap: () {
          print("点击");
        },
        onTapUp: (details) {
          print("抬起");
        },
        onDoubleTap: () {
          print("双击");
        },
        onLongPress: () {
          print("长按");
        },
        onTapCancel: () {
          print("取消");
        },
        child: Container(
          width: 200,
          height: 200,
          color: Colors.red,
        ),
      ),
    );
  }
}


class ListenerEvent extends StatelessWidget {
  const ListenerEvent({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerDown: (event) {
        print("指针按下：$event");
        // 整个屏幕位置
        print(event.position);
        // 当前布局中的位置
        print(event.localPosition);
      },
      onPointerMove: (event) {
        print("指针移动：$event");
      },
      onPointerUp: (event) {
        print("指针抬起：$event");
      },
      child: Container(
        width: 200,
        height: 200,
        color: Colors.greenAccent,
      ),
    );
  }
}

class WXStack extends StatelessWidget {
  const WXStack({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.center,
      children: <Widget>[
        GestureDetector(
          onTapDown: (details) {
            print("外部点击");
          },
          child: Container(
            width: 200,
            height: 200,
            color: Colors.red,
            alignment: Alignment.center,
          ),
        ),
        // 忽略
        IgnorePointer(
          child: GestureDetector(
            onTapDown: (details) {
              print("内部点击");
            },
            child: Container(
              width: 100,
              height: 100,
              color: Colors.yellow,
              alignment: Alignment.center,
            ),
          ),
        )
      ],
    );
  }
}

