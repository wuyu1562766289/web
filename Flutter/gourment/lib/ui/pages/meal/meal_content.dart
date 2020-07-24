import 'package:flutter/material.dart';
import 'package:gourment/core/model/category_model.dart';
import 'package:gourment/core/model/meal_model.dart';
import 'package:gourment/core/viewmodel/meal_view_model.dart';
import 'package:gourment/ui/widgets/meal_item.dart';
import 'package:provider/provider.dart';
import 'package:collection/collection.dart';

class WXMealScreenContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final category = ModalRoute.of(context).settings.arguments as WXCategoryModel;

    return Selector<WXMealViewModel, List<WXMealModel>>(
      selector: (ctx, mealVM) {
        return mealVM.meals.where((meal) {
          return meal.categories.contains(category.id);
        }).toList();
      },
      // ListEquality()：比较两个List是否相等
      shouldRebuild: (prev, next) => !ListEquality().equals(prev, next),
      builder: (ctx, meals, child) {
        return ListView.builder(
          itemCount: meals.length,
          itemBuilder: (ctx, index) {
            return WXMealItem(meals[index]);
          }
        );
      },
    );
  }
}


/*
class WXMealScreenContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final category = ModalRoute.of(context).settings.arguments as WXCategoryModel;

    return Consumer<WXMealViewModel>(
      builder: (ctx, mealVM, child) {
        // 根据Id过滤出需要的数据
        final meals = mealVM.meals.where((meal) => meal.categories.contains(category.id)).toList();

        return ListView.builder(
          itemCount: meals.length,
          itemBuilder: (ctx, index) {
            return ListTile(title: Text(meals[index].title));
          },
        );
      },
    );
  }
}*/
