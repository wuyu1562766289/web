import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("基础Widget")
      ),
      body: WXHomeContent(),
      // 浮动按钮
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => print("FloatingActionButton"),
      ),
      // 设置浮动按钮的位置
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}

class WXHomeContent extends StatefulWidget {
  @override
  _WXHomeContentState createState() => _WXHomeContentState();
}

class _WXHomeContentState extends State<WXHomeContent> {
  final imageURL = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594311264573&di=bce49e68afa4f4193571aba7fe06c248&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F12%2F20170212161218_mZtEx.thumb.700_0.jpeg";

  @override
  Widget build(BuildContext context) {
    // 占位图
    // Flutter会对网络图片进行缓存处理：1000张 100M
    return FadeInImage(
      // 设置过渡效果
      fadeOutDuration: Duration(milliseconds: 500),
      fadeInDuration: Duration(milliseconds: 500),
      placeholder: AssetImage("assets/images/yz.jpg"),
      image: NetworkImage(imageURL),
    );
  }
}

