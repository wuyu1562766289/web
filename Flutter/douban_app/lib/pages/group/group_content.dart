import 'package:flutter/material.dart';

class WXGroupContent extends StatefulWidget {
  @override
  _WXGroupContentState createState() => _WXGroupContentState();
}

class _WXGroupContentState extends State<WXGroupContent> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("小组内容", style: TextStyle(fontSize: 30, color: Colors.purpleAccent)),
    );
  }
}
