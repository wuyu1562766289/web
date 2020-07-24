import 'package:flutter/material.dart';
import 'package:gourment/core/viewmodel/favor_view_model.dart';
import 'package:gourment/ui/widgets/meal_item.dart';
import 'package:provider/provider.dart';

class WXFavorContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<WXFavorViewModel>(
      builder: (ctx, favorVM, child) {
        if(favorVM.meals.length == 0) {
          return Center(child: Text("您还未收藏美食呢！", style: TextStyle(fontSize: 24)));
        }

        return ListView.builder(
          itemCount: favorVM.meals.length,
          itemBuilder: (item, index) {
            return WXMealItem(favorVM.meals[index]);
          }
        );
      },
    );
  }
}
