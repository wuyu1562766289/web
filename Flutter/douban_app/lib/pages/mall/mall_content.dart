import 'package:flutter/material.dart';

class WXMallContent extends StatefulWidget {
  @override
  _WXMallContentState createState() => _WXMallContentState();
}

class _WXMallContentState extends State<WXMallContent> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("市集内容", style: TextStyle(fontSize: 30, color: Colors.lightBlueAccent))
    );
  }
}
