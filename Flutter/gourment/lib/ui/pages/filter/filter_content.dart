import 'package:flutter/material.dart';
import 'package:gourment/core/extension/int_extension.dart';
import 'package:gourment/core/viewmodel/filter_view_model.dart';
import 'package:provider/provider.dart';

class WXFilterContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        buildSelectedTitle(context),
        buildSelectedContent()
      ],
    );
  }

  Widget buildSelectedTitle(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(20.px),
      alignment: Alignment.center,
      child: Text("已选过滤规则", style: Theme.of(context).textTheme.display2.copyWith(fontWeight: FontWeight.bold))
    );
  }

  Widget buildSelectedContent() {
    return Expanded(
      child: Consumer<WXFilterViewModel>(
        builder: (ctx, filterVM, child) {
          return ListView(
//        shrinkWrap: true,
            children: <Widget>[
              buildList("无谷蛋白", "无谷蛋白", filterVM.isGlutenFree, (value) {
                filterVM.isGlutenFree = value;
              }),
              buildList("不含乳糖", "不含乳糖", filterVM.isLactoseFree, (value) {
                filterVM.isLactoseFree = value;
              }),
              buildList("素食主义", "素食主义", filterVM.isVegetarian, (value) {
                filterVM.isVegetarian = value;
              }),
              buildList("严格素食主义", "严格素食主义", filterVM.isVegan, (value) {
                filterVM.isVegan = value;
              })
            ],
          );
        },
      ),
    );
  }

  Widget buildList(String title, String subtitle, bool state, Function onChange) {
    return ListTile(
      title: Text(title),
      subtitle: Text(subtitle),
      trailing: Switch(value: state, onChanged: onChange),
    );
  }
}

