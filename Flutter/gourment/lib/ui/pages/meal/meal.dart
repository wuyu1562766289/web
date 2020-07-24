import 'package:flutter/material.dart';
import 'package:gourment/core/model/category_model.dart';
import 'package:gourment/ui/pages/meal/meal_content.dart';

class WXMealScreen extends StatelessWidget {
  static const String routeName = "/meal";

  @override
  Widget build(BuildContext context) {
    // 获取参数
    final category = ModalRoute.of(context).settings.arguments as WXCategoryModel;
    //print(category.title);

    return Scaffold(
      appBar: AppBar(
        title: Text(category.title),
      ),
      body: WXMealScreenContent(),
    );
  }
}
