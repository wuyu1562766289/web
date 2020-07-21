import 'package:flutter/material.dart';
import 'package:gourment/ui/pages/home/home_content.dart';

class WXHomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("美食广场"),
      ),
      body: WXHomeScreenContent(),
    );
  }
}

