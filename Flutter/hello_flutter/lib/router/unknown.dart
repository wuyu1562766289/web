import 'package:flutter/material.dart';

class WXUnKnownPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("错误页面"),
      ),
      body: Center(
        child: Text("错误页面", style: TextStyle(fontSize: 30)),
      ),
    );
  }
}
