import 'dart:math';

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

  /**
   * 两种方式监听：
   *  controller：
   *    1. 可以设置默认值offset；
   *    2. 监听滚动，也可以监听滚动的位置；
   *  NotificationListener：
   *    1. 开始滚动和结束滚动；
   * */
  @override
  Widget build(BuildContext context) {
    return Scaffold(
//      appBar: AppBar(
//        title: Text("列表")
//      ),
      body: NotificationListener(
        onNotification: (ScrollNotification notification) {
//          print("监听滚动...");
          if(notification is ScrollStartNotification) {
            print("开始滚动了！");
          } else if(notification is ScrollUpdateNotification) {
            print("正在滚动..., 总的滚动距离：${notification.metrics.maxScrollExtent} 当前滚动的位置： ${notification.metrics.pixels}");
          } else if(notification is ScrollEndNotification) {
            print("结束滚动了！");
          }

          return true;
        },
        child: ListView.builder(
          controller: controller,
          itemCount: 100,
          itemBuilder: (BuildContext ctx, int index) {
            return ListTile(
              leading: Icon(Icons.people),
              trailing: Icon(Icons.delete),
              title: Text("联系人$index"),
              subtitle: Text("联系人电话号码：15510596358"),
            );
          },
        ),
      ),
      // 浮动按钮
      floatingActionButton: _isShow ? FloatingActionButton(
        child: Icon(Icons.arrow_upward),

        onPressed: () {
          controller.animateTo(0,  duration: Duration(seconds: 1), curve: Curves.easeIn);
        },
      ) : null,
      // 设置浮动按钮的位置
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    // 销毁state组件的时候销毁一下变量
    controller.dispose();
  }
}



