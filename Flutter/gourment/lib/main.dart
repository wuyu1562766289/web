import 'package:flutter/material.dart';
import 'package:gourment/core/router/router.dart';
import 'package:gourment/ui/pages/main/main.dart';
import 'ui/shared/app_theme.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "美食",
      // 主题
      theme: WXAppTheme.norTheme,
      darkTheme: WXAppTheme.darkTheme,
      // 路由
      initialRoute: WXRouter.initRoute,
      onGenerateRoute: WXRouter.generateRoute,
      onUnknownRoute: WXRouter.unKnownRoute,
      home: WXMainScreen(),
    );
  }
}
