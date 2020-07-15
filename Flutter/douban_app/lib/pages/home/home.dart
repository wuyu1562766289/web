import 'home_content.dart';
import 'package:flutter/material.dart';

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("TOP榜"),
        backgroundColor: Color.fromARGB(250, 238, 205, 144),
      ),
      body: WXHomeContent(),
    );
  }
}


