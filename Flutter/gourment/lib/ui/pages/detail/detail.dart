import 'package:flutter/material.dart';
import 'package:gourment/core/model/meal_model.dart';
import 'package:gourment/core/viewmodel/favor_view_model.dart';
import 'package:gourment/ui/pages/detail/detail_content.dart';
import 'package:provider/provider.dart';

class WXDetailScreen extends StatelessWidget {
  static const String routeName = "/detail";

  @override
  Widget build(BuildContext context) {
    final meal = ModalRoute.of(context).settings.arguments as WXMealModel;

    return Scaffold(
      appBar: AppBar(
        title: Text(meal.title),
      ),
      body: WXDetailContent(meal),
      floatingActionButton: Consumer<WXFavorViewModel>(
        builder: (ctx, favorVM, child) {
          // 判断收藏状态
          final iconData = favorVM.isFavor(meal) ? Icons.favorite : Icons.favorite_border;
          final iconColor = favorVM.isFavor(meal) ? Colors.red : Colors.white;

          return FloatingActionButton(
            child: Icon(iconData, color: iconColor),
            backgroundColor: Colors.orange,
            onPressed: () {
              favorVM.setFavorState(meal);
              /*if(favorVM.isFavor(meal)) {
                favorVM.removeMeal(meal);
              } else {
                favorVM.addMeal(meal);
              }*/
            },
          );
        },
      )
    );
  }
}
