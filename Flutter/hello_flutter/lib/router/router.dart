import 'package:flutter/material.dart';
import '../main.dart';
import 'about.dart';
import 'detail.dart';
import 'unknown.dart';

class WXRouter {
  static final Map<String, WidgetBuilder> routes = {
    WXHomePage.routeName: (ctx) => WXHomePage(),
    WXAboutPage.routeName: (ctx) => WXAboutPage()
  };

  static final String initRoute = WXHomePage.routeName;

  static final RouteFactory generateRoute = (settings) {
    if(settings.name == WXDetailPage.routeName) {
      return MaterialPageRoute(
          builder: (ctx) {
            return WXDetailPage(settings.arguments);
          }
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
  };
}