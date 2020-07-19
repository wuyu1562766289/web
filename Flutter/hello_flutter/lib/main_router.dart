import 'package:flutter/material.dart';
import 'router/unknown.dart';
import 'router/about.dart';
import 'router/detail.dart';
import 'router/router.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Event",
      theme: ThemeData(primaryColor: Colors.greenAccent, splashColor: Colors.red),
//      home: WXHomePage(),

      // 路由映射
/*      routes: {
//        "/": (ctx) => WXHomePage(),
//        "/about": (ctx) => WXAboutPage()
        WXHomePage.routeName: (ctx) => WXHomePage(),
        WXAboutPage.routeName: (ctx) => WXAboutPage()
      },*/
      routes: WXRouter.routes,

      // 默认启动页面
      initialRoute: WXRouter.initRoute,

      // 命名路由方式跳转处理
      /*onGenerateRoute: (settings) {
        if(settings.name == WXDetailPage.routeName) {
          return MaterialPageRoute(
              builder: (ctx) {
                return WXDetailPage(settings.arguments);
              }
          );
        }

        return null;
      },*/

      onGenerateRoute: WXRouter.generateRoute,

      // 错误处理
      /*onUnknownRoute: (settings) {
        return MaterialPageRoute(
          builder: (ctx) {
            return WXUnKnownPage();
          }
        );
      },*/
      onUnknownRoute: WXRouter.unKnownRoute,

    );
  }
}

class WXHomePage extends StatefulWidget {
  static const String routeName = "/";

  @override
  _WXHomePageState createState() => _WXHomePageState();
}

class _WXHomePageState extends State<WXHomePage> {
  String _msg = "default";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Event"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(_msg, style: TextStyle(fontSize: 30, color: Colors.red)),
            RaisedButton(
              child: Text("跳转到详情页面"),
              onPressed: () => _jumpToDetail(context),
            ),
            RaisedButton(
              child: Text("跳转到about页面"),
              onPressed: () => _jumpToAbout(context),
            ),
            RaisedButton(
              child: Text("跳转到详情页面"),
              onPressed: () => _jumpToDetail2(context),
            ),
            RaisedButton(
              child: Text("跳转到设置页面"),
              onPressed: () => _jumpToSetting(context),
            ),
          ],
        ),
      ),
    );
  }

  void _jumpToDetail(BuildContext context) {
    // 普通跳转方式
    Future result = Navigator.of(context).push(MaterialPageRoute(
      builder: (ctx) {
        return WXDetailPage("home msg");
      }
    ));

    result.then((value) {
//      print(value);
        setState(() {
          _msg = value;
        });
    });
  }

  void _jumpToAbout(BuildContext context) {
    // 在对应页面中定义routeName常量
    // argument给对应页面传参数
//    Navigator.of(context).pushNamed(WXAboutPage.routeName, arguments: "about page!");
//    Navigator.of(context).pushNamed("/about");

    // 返回值
    Future data = Navigator.of(context).pushNamed(WXAboutPage.routeName, arguments: "about page!");
    data.then((value) {
      print("我是about页面返回的值：$value");
    });
  }

  void _jumpToDetail2(BuildContext context) {
    // 普通跳转方式
    Future result = Navigator.of(context).pushNamed(WXDetailPage.routeName, arguments: "home Detail2 msg");

    result.then((value) {
//      print(value);
      setState(() {
        _msg = value;
      });
    });
  }

  void _jumpToSetting(BuildContext context) {
     Navigator.of(context).pushNamed("/setting");
  }
}

