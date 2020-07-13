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
      appBar: AppBar(
        title: Text("列表")
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

class WXHomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 适用于少量的确定数量的列表
//    return ListViewWidget();

    // 要显示到屏幕的时候才去创建（懒加载），性能更高
//    return ListViewBuilderWidget();

    /*return ListView.separated(
        itemBuilder: (BuildContext ctx, int index) {
          return Text("Hello World: $index", style: TextStyle(fontSize: 20));
        },
        // 分割线
        separatorBuilder: (BuildContext ctx, int index) {
          return Divider(
            color: Colors.red,
            height: 20,
            indent: 30,
            endIndent: 30,
            thickness: 10,
          );
        },
        itemCount: 100
    );*/

      // 明确给出一行放几个元素
//    return GridViewWidget();

    // 给出宽度的最大值
//    return GridViewWidget1();

    // 显示到屏幕的时候再去渲染加载item，性能更好
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 8,
            crossAxisSpacing: 8
          ),
          itemBuilder: (BuildContext ctx, int index) {
            return Container(
              color: Color.fromARGB(255, Random().nextInt(256), Random().nextInt(256), Random().nextInt(256)),
            );
          }
      ),
    );
  }
}

class GridViewWidget1 extends StatelessWidget {
  const GridViewWidget1({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: GridView(
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
          // 宽度最大值，并不是确定值
          maxCrossAxisExtent: 100,
          mainAxisSpacing: 8,
          crossAxisSpacing: 8,
          childAspectRatio: 1
        ),
        children: List.generate(100, (index) {
          return Container(
            color: Color.fromARGB(255, Random().nextInt(256), Random().nextInt(256), Random().nextInt(256)),
          );
        }),
      ),
    );
  }
}

class GridViewWidget extends StatelessWidget {
  const GridViewWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      // 给gridView设置内间距
      padding: const EdgeInsets.all(8.0),
      child: GridView(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          // 交叉轴上显示几个
          crossAxisCount: 3,
          childAspectRatio: .8,
          // 交叉轴间距
          crossAxisSpacing: 8,
          // 主轴间距
          mainAxisSpacing: 8
        ),
        children: List.generate(100, (index) {
          return Container(
            color: Color.fromARGB(255, Random().nextInt(256), Random().nextInt(256), Random().nextInt(256)),
          );
        }),
      ),
    );
  }
}

class ListViewBuilderWidget extends StatelessWidget {
  const ListViewBuilderWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 100,
      itemBuilder: (BuildContext ctx, int index) {
        return Text("Hello Flutter: $index", style: TextStyle(fontSize: 25));
      },
    );
  }
}

class ListViewWidget extends StatelessWidget {
  const ListViewWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
      // 横向滚动
//      scrollDirection: Axis.horizontal,
//      itemExtent: 100,
      // 从下往上滚动
//      reverse: true,
      children: List.generate(100, (index) {
        return ListTile(
          leading: Icon(Icons.people),
          trailing: Icon(Icons.delete),
          title: Text("联系人$index"),
          subtitle: Text("联系人电话号码：15510596358"),
        );
      }),
    );
  }
}
