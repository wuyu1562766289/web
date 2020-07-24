import 'package:flutter/material.dart';
import 'package:gourment/core/extension/int_extension.dart';
import 'package:gourment/ui/pages/filter/filter.dart';

class WXHomeDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: 230.px,
        // 抽屉效果
        child: Drawer(
          child: Column(
            children: <Widget>[
              buildHeaderView(context),
              buildListTile(context, Icon(Icons.restaurant), "进餐", () {
                Navigator.of(context).pop();
              }),
              buildListTile(context, Icon(Icons.filter), "过滤", () {
                Navigator.of(context).pushNamed(WXFilterScreen.routeName);
              })
            ],
          ),
        )
    );
  }

  Widget buildHeaderView(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 100.px,
      color: Colors.orange,
      alignment: Alignment(0, 0.5),
      margin: EdgeInsets.only(bottom: 12.px),
      child: Text("设置", style: Theme.of(context).textTheme.display3.copyWith(fontWeight: FontWeight.bold))
    );
  }

  Widget buildListTile(BuildContext context, Widget icon, String title, Function cb) {
    return ListTile(
      leading: icon,
      title: Text(title, style: Theme.of(context).textTheme.display2),
      onTap: cb,
    );
  }
}
