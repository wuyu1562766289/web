import 'dart:math';

import 'package:flutter/material.dart';
import 'package:hello_flutter/animation/pages/image_detail.dart';
import 'package:hello_flutter/animation/pages/model_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "animation",
      theme: ThemeData(primaryColor: Colors.greenAccent, splashColor: Colors.yellow),
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
      ),
      body: Center(
        child: GridView(
          // 固定个数
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 8,
            mainAxisSpacing: 8,
            // 宽高比
            childAspectRatio: 16/9
          ), 
          children: List.generate(20, (index) {
            final _imageURL = "https://picsum.photos/800/500?random=$index";

            return GestureDetector(
              onTap: () {
                /// 默认是push效果
                /*Navigator.of(context).push(MaterialPageRoute(
                  builder: (ctx) {
                    return WXImageDetail(_imageURL);
                  }
                ));*/
                /// 渐变效果
                Navigator.of(context).push(PageRouteBuilder(
                  pageBuilder: (ctx, animation1, animation2) {
                    return FadeTransition(
                      opacity: animation1,
                      child: WXImageDetail(_imageURL)
                    );
                  }
                ));
              },
              child: Hero(
                tag: _imageURL,
                child: Image.network(
                  _imageURL,
                  // 覆盖
                  fit: BoxFit.cover
                ),
              ),
            );
          }),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.info),
        onPressed: () {
          /*Navigator.of(context).push(MaterialPageRoute(
            builder: (ctx) {
              return WXModelPage();
            },
            // 设置该属性修改页面打开的效果为从下往上弹出
            fullscreenDialog: true
          ));*/

          Navigator.of(context).push(PageRouteBuilder(
            // 转场时间
            transitionDuration: Duration(seconds: 3),
            pageBuilder: (ctx, animation1, animation2) {
              return FadeTransition(
                opacity: animation1,
                child: WXModelPage(),
              );
            }
          ));
        },
      ),
    );
  }
}
