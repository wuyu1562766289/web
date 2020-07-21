import 'package:flutter/material.dart';
import 'package:gourment/ui/pages/main/main.dart';

class WXRouter {
  static final Map<String, WidgetBuilder> routes = {
    WXMainScreen.routeName: (ctx) => WXMainScreen()
  };

  static final String initRoute = WXMainScreen.routeName;

  static final RouteFactory generateRoute = (settings) {
//    if(settings.name == WXDetailPage.routeName) {
//      return MaterialPageRoute(
//          builder: (ctx) {
//            return WXDetailPage(settings.arguments);
//          }
//      );
//    }
    return null;
  };

  static final RouteFactory unKnownRoute = (settings) {
//    return MaterialPageRoute(
//        builder: (ctx) {
//          return WXUnKnownPage();
//        }
//    );
    return null;
  };
}