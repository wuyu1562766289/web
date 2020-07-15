import 'package:flutter/material.dart';

import 'bottom_bar_item.dart';
import '../home/home.dart';
import '../subject/subject.dart';
import '../group/group.dart';
import '../mall/mall.dart';
import '../profile/profile.dart';

List<WXBottomBarItem> itemsBar = [
  WXBottomBarItem("home", "首页"),
  WXBottomBarItem("subject", "书影音"),
  WXBottomBarItem("group", "小组"),
  WXBottomBarItem("mall", "市集"),
  WXBottomBarItem("profile", "我的")
];

List<Widget> pages = [
  WXHomePage(),
  WXSubjectPage(),
  WXGroupPage(),
  WXMallPage(),
  WXProfilePage()
];