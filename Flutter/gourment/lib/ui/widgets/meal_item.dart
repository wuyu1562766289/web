import 'package:flutter/material.dart';
import 'package:gourment/core/model/meal_model.dart';
import 'package:gourment/core/extension/int_extension.dart';
import 'package:gourment/core/viewmodel/favor_view_model.dart';
import 'package:gourment/ui/pages/detail/detail.dart';
import 'package:gourment/ui/widgets/operation_item.dart';
import 'package:provider/provider.dart';

class WXMealItem extends StatelessWidget {
  final WXMealModel _meal;
  WXMealItem(this._meal);

  final radiusSize = 12.px;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Card(
        margin: EdgeInsets.all(10.px),
        elevation: 5,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusSize)),
        child: Column(
          children: <Widget>[
            buildBasicInfo(context),
            buildOperationInfo()
          ],
        ),
      ),
      onTap: () {
        Navigator.of(context).pushNamed(WXDetailScreen.routeName, arguments: _meal);
      },
    );
  }

  Widget buildBasicInfo(BuildContext context) {
    return Stack(
      children: <Widget>[
        ClipRRect(
          // 裁剪顶部圆角
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(radiusSize),
            topRight: Radius.circular(radiusSize)
          ),
          child: Image.network(
            _meal.imageUrl,
            width: double.infinity,
            height: 250.px,
            fit: BoxFit.cover
          ),
        ),
        Positioned(
          right: 10.px,
          bottom: 10.px,
          child: Container(
            width: 300.px,
            padding: EdgeInsets.symmetric(horizontal: 10.px, vertical: 5.px),
            decoration: BoxDecoration(
              color: Colors.black45,
              borderRadius: BorderRadius.circular(6.px)
            ),
            child: Text(
              _meal.title,
              style: Theme.of(context).textTheme.display3.copyWith(color: Colors.white)
            ),
          ),
        )
      ],
    );
  }

  Widget buildOperationInfo() {
    return Padding(
      padding: EdgeInsets.all(16.px),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          WXOperationItem(Icon(Icons.schedule), "${_meal.duration}分钟"),
          WXOperationItem(Icon(Icons.restaurant), "${_meal.complexStr}"),
          buildFavorItem()
        ],
      ),
    );
  }

  Widget buildFavorItem() {
    return Consumer<WXFavorViewModel>(
      builder: (ctx, favorVM, child) {
      // 判断是否收藏
      final iconData = favorVM.isFavor(_meal) ? Icons.favorite : Icons.favorite_border;
      final destColor = favorVM.isFavor(_meal) ? Colors.red : Colors.black;
      final title = favorVM.isFavor(_meal) ? "已收藏" : "未收藏";

      return GestureDetector(
        child: WXOperationItem(
          Icon(iconData, color: destColor),
          title,
          destColor: destColor
        ),
        onTap: () {
          favorVM.setFavorState(_meal);
        },
      );
    });
  }
}
