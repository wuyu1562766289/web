import 'profile_content.dart';
import 'package:flutter/material.dart';

class WXProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("个人中心")
      ),
      body: WXProfileContent(),
    );
  }
}
