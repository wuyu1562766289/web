import 'package:flutter/material.dart';

class WXBottomBarItem extends BottomNavigationBarItem {
  // 传给父类使用
  WXBottomBarItem(String iconName, String title) :super(
    title: Text(title),
    // gaplessPlayback: 避免闪烁
    icon: Image.asset("assets/images/tabbar/$iconName.png", width: 30, gaplessPlayback: true),
    activeIcon: Image.asset("assets/images/tabbar/${iconName}_active.png", width: 30, gaplessPlayback: true)
  );
}