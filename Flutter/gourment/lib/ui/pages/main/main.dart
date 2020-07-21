import 'package:flutter/material.dart';
import 'package:gourment/ui/pages/main/init_item.dart';
import 'package:gourment/ui/size_fit.dart';

class WXMainScreen extends StatefulWidget {
  static const String routeName = "/";

  @override
  _WXMainScreenState createState() => _WXMainScreenState();
}

class _WXMainScreenState extends State<WXMainScreen> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    WXSizeFit.init();

    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: pages,
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        // 避免点击的时候字体大小发生变化
        selectedFontSize: 14,
        unselectedFontSize: 14,
        items: items,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
