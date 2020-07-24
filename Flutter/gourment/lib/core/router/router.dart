import 'package:flutter/material.dart';
import 'package:gourment/core/router/unknown_route.dart';
import 'package:gourment/ui/pages/detail/detail.dart';
import 'package:gourment/ui/pages/filter/filter.dart';
import 'package:gourment/ui/pages/imgpage/img.dart';
import 'package:gourment/ui/pages/main/main.dart';
import 'package:gourment/ui/pages/meal/meal.dart';

class WXRouter {
  static final String initRoute = WXMainScreen.routeName;

  // 默认弹出
  static final Map<String, WidgetBuilder> routes = {
    WXMainScreen.routeName: (ctx) => WXMainScreen(),
    WXMealScreen.routeName: (ctx) => WXMealScreen(),
    WXDetailScreen.routeName: (ctx) => WXDetailScreen()
  };

  // 自定义弹出
  static final RouteFactory generateRoute = (settings) {
    if(settings.name == WXFilterScreen.routeName) {
      return MaterialPageRoute(
        builder: (ctx) {
          return WXFilterScreen();
        },
        fullscreenDialog: true
      );
    }
    return null;
  };

  static final RouteFactory unKnownRoute = (settings) {
    return MaterialPageRoute(
      builder: (ctx) {
        return WXUnKnownPage();
      }
    );
    return null;
  };
}