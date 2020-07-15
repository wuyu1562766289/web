import 'group_content.dart';
import 'package:flutter/material.dart';
class WXGroupPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("小组"),
      ),
      body: WXGroupContent(),
    );
  }
}
