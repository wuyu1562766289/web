import 'package:flutter/material.dart';

class WXFavorScreen extends StatefulWidget {
  @override
  _WXFavorScreenState createState() => _WXFavorScreenState();
}

class _WXFavorScreenState extends State<WXFavorScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("收藏"),
      ),
      body: Center(child: Text("收藏")),
    );
  }
}
