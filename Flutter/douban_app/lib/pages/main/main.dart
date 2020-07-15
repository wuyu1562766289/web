import 'package:flutter/material.dart';

import 'init_item.dart';

class WXMainPage extends StatefulWidget {
  @override
  _WXMainPageState createState() => _WXMainPageState();
}

class _WXMainPageState extends State<WXMainPage> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: pages
      ),
      bottomNavigationBar: BottomNavigationBar(
        // 点击后字体大小不一致（框架默认）
        selectedFontSize: 14,
        unselectedFontSize: 14,
        currentIndex: _currentIndex,
        // 框架默认超过4个隐藏文字，需要显示可以配置如下内容
        type: BottomNavigationBarType.fixed,
        items: itemsBar,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },

        /*// 封装为一个类方便调用
        items: [
          BottomNavigationBarItem(
            title: Text("首页"),
            icon: Image.asset("assets/images/tabbar/home.png", width: 30),
            // 点击后的图片
            activeIcon: Image.asset("assets/images/tabbar/home_active.png", width: 30,)
          ),
          BottomNavigationBarItem(
              title: Text("书影音"),
              icon: Image.asset("assets/images/tabbar/subject.png", width: 30),
              activeIcon: Image.asset("assets/images/tabbar/subject_active.png", width: 30)
          )
        ],*/
      ),
    );
  }
}
