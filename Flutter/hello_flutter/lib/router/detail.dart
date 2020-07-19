import 'package:flutter/material.dart';

class WXDetailPage extends StatelessWidget {
  final String _msg;
  WXDetailPage(this._msg);

  static const String routeName = "/detail";

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      // 方式二，包裹一层WillPopScope，监听
      onWillPop: () {
        // 当返回为true时，可以自动返回（flutter帮助执行返回操作）
        // 返回false是，自行写返回代码
//        return Future.value(true);

        _backToHome(context);
        return Future.value(false);
      },

      child: Scaffold(
        appBar: AppBar(
          title: Text("首页"),
/*        // 顶部按钮返回数据：方式一
          leading: IconButton(
            icon: Icon(Icons.backspace),
            onPressed: () => _backToHome(context),
          ),*/
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(_msg, style: TextStyle(fontSize: 30)),
              RaisedButton(
                child: Text("回到首页"),
                onPressed: () => _backToHome(context),
              )
            ],
          ),
        ),
      ),
    );
  }

  void _backToHome(BuildContext context) {
    // 回到首页
    Navigator.of(context).pop("detail msg");
  }
}
