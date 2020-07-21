import 'package:flutter/material.dart';
import 'package:gourment/core/model/category_model.dart';
import 'package:gourment/core/services/json_parse.dart';
import 'package:gourment/core/extension/int_extension.dart';

class WXHomeScreenContent extends StatefulWidget {
  @override
  _WXHomeScreenContentState createState() => _WXHomeScreenContentState();
}

class _WXHomeScreenContentState extends State<WXHomeScreenContent> {
  List<WXCategoryModel> _categories = [];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    // 加载数据
    JsonParse.getCategoryDate().then((value) {
      setState(() {
        _categories = value;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      itemCount: _categories.length,
      padding: EdgeInsets.all(20.px),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 20.px,
        mainAxisSpacing: 20.px,
        // 宽高比
        childAspectRatio: 1.5
      ),
      itemBuilder: (ctx, index) {
        final bgColor = _categories[index].destColor;

        return Container(
          decoration: BoxDecoration(
            color: bgColor,
            borderRadius: BorderRadius.circular(12),
            // 颜色渐变
            gradient: LinearGradient(
              colors: [bgColor.withOpacity(.5), bgColor]
            )
          ),
          // 会与decoration冲突，写到decoration里面
//        color: Colors.greenAccent,
          alignment: Alignment.center,
          child: Text(
            _categories[index].title,
            style: Theme.of(context).textTheme.display2.copyWith(
              // 粗体
              fontWeight: FontWeight.bold
            )
          )
        );
      }
    );
  }
}
