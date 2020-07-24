import 'package:flutter/material.dart';
import 'package:gourment/ui/pages/favor/favor_content.dart';

class WXFavorScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("我的收藏"),
      ),
      body: Center(
        child: WXFavorContent(),
      ),
    );
  }
}

