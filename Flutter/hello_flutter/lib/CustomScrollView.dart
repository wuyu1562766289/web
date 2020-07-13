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

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
//      appBar: AppBar(
//        title: Text("列表")
//      ),
      body: WXHomeContent(),
//      // 浮动按钮
//      floatingActionButton: FloatingActionButton(
//        child: Icon(Icons.add),
//        onPressed: () => print("FloatingActionButton"),
//      ),
//      // 设置浮动按钮的位置
//      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}

class WXHomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
//    return CustomScrollView1();

    return CustomScrollView(
      slivers: <Widget>[
        // 设置导航栏
        SliverAppBar(
          // 导航栏高度
          expandedHeight: 300,
          // 滚动的时候标题一直显示
          pinned: true,
          flexibleSpace: FlexibleSpaceBar(
            title: Text("Hello World!"),
            background: Image.asset("assets/images/yz.jpg", fit: BoxFit.cover),
          ),
        ),
        SliverGrid(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              crossAxisSpacing: 8,
              mainAxisSpacing: 8,
              childAspectRatio: 1.5
          ),
          delegate: SliverChildBuilderDelegate(
                  (BuildContext ctx, int index) {
                return Container(color: Color.fromARGB(255, Random().nextInt(256), Random().nextInt(256), Random().nextInt(256)));
              },
              childCount: 10
          ),
        ),
        SliverList(
          delegate: SliverChildBuilderDelegate(
              (BuildContext ctx, int index) {
                return ListTile(
                  leading: Icon(Icons.people),
                  trailing: Icon(Icons.delete),
                  title: Text("联系人$index"),
                  subtitle: Text("联系人电话号码：15510596358"),
                );
              },
            childCount: 10
          ),
        )
      ],
    );
  }
}

class CustomScrollView1 extends StatelessWidget {
  const CustomScrollView1({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: <Widget>[
        // 设置安全区，避免导航栏溢出
        SliverSafeArea(
          // 使用SliverPadding可以避免Padding中滚动时候顶部的内边距一直显示的问题
          sliver: SliverPadding(
            padding: const EdgeInsets.all(8.0),
            sliver: SliverGrid(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 8,
                mainAxisSpacing: 8,
                childAspectRatio: 1.5
              ),
              delegate: SliverChildBuilderDelegate(
                  (BuildContext ctx, int index) {
                  return Container(color: Color.fromARGB(255, Random().nextInt(256), Random().nextInt(256), Random().nextInt(256)));
                },
                childCount: 100
              ),
            ),
          ),
        )
      ],
    );
  }
}

