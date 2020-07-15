import 'package:douban_app/pages/main/main.dart';
import 'package:douban_app/widgets/dashed_line.dart';
import 'package:douban_app/widgets/star_rating.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '豆瓣App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),

      // App主页
      home: WXMainPage(),

      // 控件封装使用
//      home: MyHomePage(title: 'Hello Star'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
          // 评分控件
//        child: WXStarRating(count: 5, rating: 8.8),

          // 虚线控件
          /*child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                width: 200,
                child: WXDashedLine(dashedWidth: 10, count: 15),
              ),
              Container(
                height: 200,
                child: WXDashedLine(axis: Axis.vertical, dashedHeight: 10, count: 15),
              )
            ],
          ),*/


      )
    );
  }
}
