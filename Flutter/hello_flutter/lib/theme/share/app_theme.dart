import 'package:flutter/material.dart';

class WXAppTheme {
  static const double smallFontSize = 16;
  static const double normalFontSize = 20;
  static const double largeFontSize = 24;

  static final Color norTextColors = Colors.red;
  static final Color darkTextColors = Colors.green;

  static final ThemeData norTheme = ThemeData(
    // 1. 亮度(dark:暗黑模式)
    brightness: Brightness.light,
    // 2. 传入的不是Color，而是MaterialColor(包含了primaryColor和accentColor)
    primarySwatch: Colors.red,
    // 3. 设置导航和TabBar的颜色，会覆盖primarySwatch设置的值
    primaryColor: Colors.orange,
    // 4. 单独设置FloatingActionButton/Switch颜色
    accentColor: Colors.greenAccent,
    // 5. button主题
    buttonTheme:
        ButtonThemeData(height: 24, minWidth: 10, buttonColor: Colors.yellow),
    // 6. Card主题
    cardTheme: CardTheme(color: Colors.blue, elevation: 40),
    // 7. text主题
    textTheme: TextTheme(
      // 默认字体大小为14
      body1: TextStyle(fontSize: 20, color: Colors.red),
    )
  );

  static final ThemeData darkTheme = ThemeData(
    primarySwatch: Colors.grey,
    textTheme: TextTheme(
      body1: TextStyle(fontSize: 20, color: Colors.green)
    )
  );
}
