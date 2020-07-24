import 'package:flutter/material.dart';
import 'package:gourment/core/model/category_model.dart';
import 'package:gourment/ui/pages/meal/meal.dart';

class WXHomeCategoryItem extends StatelessWidget {
  final WXCategoryModel _category;
  WXHomeCategoryItem(this._category);

  @override
  Widget build(BuildContext context) {
    final bgColor = _category.destColor;

    return GestureDetector(
      child: Container(
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(12),
          // 颜色渐变
          gradient: LinearGradient(colors: [bgColor.withOpacity(.5), bgColor])
        ),
        // 会与decoration冲突，写到decoration里面
//        color: Colors.greenAccent,
        alignment: Alignment.center,
        child: Text(
          _category.title,
          style: Theme.of(context).textTheme.display2.copyWith(
            // 粗体
            fontWeight: FontWeight.bold
          )
        )
      ),
      onTap: () {
        Navigator.of(context).pushNamed(WXMealScreen.routeName, arguments: _category);
        //print(_category.title);
      },
    );
  }
}
