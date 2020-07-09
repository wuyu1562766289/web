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
  @override
  Widget build(BuildContext context) {
    return ButtonWidget();
  }
}

// 按钮间距：默认情况下button上下有一定的间距
// 移除间距： materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
class ButtonWidget extends StatelessWidget {
  const ButtonWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        RaisedButton(
          child: Text("RaisedButton"),
          textColor: Colors.red,
          color: Colors.cyanAccent,
          onPressed: () => print("RaisedButton"),
          // 移除按钮上下间距
          materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        ),
        // 自定义按钮大小
        ButtonTheme(
          minWidth: 30,
          height: 30,
          child: FlatButton(
            // 移除button内边距
            padding: EdgeInsets.all(0),
            child: Text("FlatButton"),
            onPressed: () => print("FlatButton"),
          ),
        ),
        OutlineButton(
          child: Text("OutlineButton"),
          onPressed: () => print("OutlineButton"),
        ),
        // floatingActionButton
        // 自定义button： 图标、文字、背景、圆角
        FlatButton(
          child: Row(
            mainAxisSize: MainAxisSize.min,
//            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Icon(Icons.favorite, color: Colors.red,),
              Text("赞"),
            ],
          ),
          // 设置圆角
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8)
          ),
          color: Colors.lightBlueAccent,
          onPressed: () => print("自定义按钮"),
        )
      ],
    );
  }
}
