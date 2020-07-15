import 'mall_content.dart';
import 'package:flutter/material.dart';
class WXMallPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("市集"),
      ),
      body: WXMallContent(),
    );
  }
}
