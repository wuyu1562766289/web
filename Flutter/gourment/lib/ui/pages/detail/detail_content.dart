import 'package:flutter/material.dart';
import 'package:gourment/core/model/meal_model.dart';
import 'package:gourment/core/extension/int_extension.dart';

class WXDetailContent extends StatelessWidget {
  final WXMealModel _meal;
  WXDetailContent(this._meal);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: <Widget>[
          buildBannerImage(),
          buildMakeTitle(context, "制作材料"),
          buildMakeMaterial(context),
          buildMakeTitle(context, "制作步骤"),
          buildMakeSteps(context),
          SizedBox(height: 10.px)
        ],
      ),
    );
  }

  // 图片
  Widget buildBannerImage() {
      return Container(child: Image.network(_meal.imageUrl), width: double.infinity);
  }
  // 材料
  Widget buildMakeMaterial(BuildContext context) {
    return buildMakeContent(
      context: context,
      child: ListView.builder(
        // 清除内边距
        padding: EdgeInsets.zero,
        // 根据内容大小占用高度而不是默认占用最大高度
        shrinkWrap: true,
        // 不滚动
        physics: NeverScrollableScrollPhysics(),
        itemCount: _meal.ingredients.length,
        itemBuilder: (ctx, index) {
          return Card(
            color: Colors.amberAccent,
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 10.px, vertical: 6.px),
              child: Text(_meal.ingredients[index]),
            )
          );
        }
      ),
    );
  }
  // 步骤
  Widget buildMakeSteps(BuildContext context) {
    return buildMakeContent(
      context: context,
      child: ListView.builder(
        shrinkWrap: true,
        physics: NeverScrollableScrollPhysics(),
        padding: EdgeInsets.zero,
        itemCount: _meal.steps.length,
        itemBuilder: (ctx, index) {
          return ListTile(
            leading: CircleAvatar(
              backgroundColor: Colors.amberAccent,
              child: Text("#${index+1}", style: TextStyle(color: Colors.white))
            ),
            title: Text(_meal.steps[index]),
          );
        }
      )
    );
  }

  // 公共方法
  Widget buildMakeTitle(BuildContext context, String title) {
    return Container(
      padding: EdgeInsets.symmetric(vertical: 10.px),
      child: Text(title, style: Theme.of(context).textTheme.display3.copyWith(fontWeight: FontWeight.bold)),
    );
  }

  Widget buildMakeContent({BuildContext context, Widget child}) {
    return Container(
      padding: EdgeInsets.all(8.px),
      decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: Colors.grey),
          borderRadius: BorderRadius.circular(8.px)
      ),
      width: MediaQuery.of(context).size.width - 30.px,
      child: child,
    );
  }
}
