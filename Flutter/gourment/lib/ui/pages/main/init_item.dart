import 'package:flutter/material.dart';
import 'package:gourment/ui/pages/favor/favor.dart';
import 'package:gourment/ui/pages/home/home.dart';
import 'package:gourment/ui/pages/imgpage/img.dart';

final List<Widget> pages = [
  WXHomeScreen(),
  WXFavorScreen(),
  WXImgScreen()
];

final List<BottomNavigationBarItem> items = [
  BottomNavigationBarItem(
    title: Text("首页"),
    icon: Icon(Icons.home)
  ),
  BottomNavigationBarItem(
    title: Text("收藏"),
    icon: Icon(Icons.star)
  ),
  BottomNavigationBarItem(
    title: Text("美图"),
    icon: Icon(Icons.image)
  )
];
