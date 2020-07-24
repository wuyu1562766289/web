import 'package:flutter/material.dart';

/*class WXHomeAppBar extends AppBar {
  WXHomeAppBar(BuildContext context):super(
    title: Text("美食广场"),
    leading: Builder(
      builder: (ctx) {
        return IconButton(
          icon: Icon(Icons.settings),
          onPressed: () {
            Scaffold.of(ctx).openDrawer();
          },
        );
      },
    )
  );
}*/
// main里已经初始化过了，这里不需要再次build了
class WXHomeAppBar extends AppBar {
  WXHomeAppBar(BuildContext context):super(
    title: Text("美食广场"),
    leading: IconButton(
      icon: Icon(Icons.settings),
      onPressed: () {
        Scaffold.of(context).openDrawer();
      }
    )
  );
}
