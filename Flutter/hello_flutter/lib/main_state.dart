import 'package:flutter/material.dart';

main() => runApp(MyApp());

// 快捷键：stl
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
        title: Text("商品列表"),
      ),
      body: WXHomeContent("传一个值过去吧！")
    );
  }
}

/// Flutter在设计的时候StatefulWidget的buid方法放在State中：

///  1. build出来的Widget是需要依赖State中的变量（状态/数据）；

///  2. 在Flutter的运行过程中：

///      Widget是不断的创建和销毁的；

///      当我们自己的状态发生改变时，并不希望重新装载一个新的State

// Widget不加_：暴露给别人使用
class WXHomeContent extends StatefulWidget {
  final String msg;
  WXHomeContent(this.msg);

  @override
  _WXHomeContentState createState() => _WXHomeContentState();
}
// State加_：状态这个类只是给Widget使用
class _WXHomeContentState extends State<WXHomeContent> {
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          _getButtons(),
          Text("当前计数：$_counter", style: TextStyle(fontSize: 25, color: Colors.red)),
          SizedBox(height: 8),
          Text("传递过来的值：${widget.msg}")
        ],
      ),
    );
  }

  Widget _getButtons() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        RaisedButton(
          child: Text("+", style: TextStyle(fontSize: 25, color: Colors.white)),
          color: Colors.cyanAccent,
          onPressed: () {
            setState(() {
              _counter++;
            });
          },
        ),
        RaisedButton(
          child: Text("-", style: TextStyle(fontSize: 25, color: Colors.white)),
          color: Colors.cyan,
          onPressed: (){
            setState(() {
              _counter--;
            });
          },
        )
      ],
    );
  }
}

