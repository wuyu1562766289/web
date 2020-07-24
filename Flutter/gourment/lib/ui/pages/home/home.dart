import 'package:flutter/material.dart';
import 'package:gourment/ui/pages/home/home_app_bar.dart';
import 'package:gourment/ui/pages/home/home_content.dart';
import 'package:gourment/core/extension/int_extension.dart';
import 'package:gourment/ui/pages/home/home_drawer.dart';

class WXHomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: WXHomeAppBar(context),
      body: WXHomeScreenContent(),
//      drawer: WXHomeDrawer()
    );
  }
}

