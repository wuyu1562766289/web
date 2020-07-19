import 'package:flutter/material.dart';

class WXAboutPage extends StatelessWidget {
  static const String routeName = "/about";

  @override
  Widget build(BuildContext context) {
    // 获取路由中传递过来的参数,默认传递过来的为object类型，可以用as转换
    final String msg = ModalRoute.of(context).settings.arguments as String;

    return Scaffold(
      appBar: AppBar(
        title: Text("关于"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(msg),
            RaisedButton(
              child: Text("返回首页"),
              onPressed: () {
                // 返回值可以在路由页面接收（Future类型）
                Navigator.of(context).pop("about返回值");
              },
            )
          ],
        ),
      ),
    );
  }
}
