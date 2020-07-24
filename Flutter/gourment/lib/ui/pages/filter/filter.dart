import 'package:flutter/material.dart';
import 'package:gourment/ui/pages/filter/filter_content.dart';

class WXFilterScreen extends StatelessWidget {
  static const String routeName = "/filter";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("美食过滤"),
      ),
      body: WXFilterContent(),
    );
  }
}
