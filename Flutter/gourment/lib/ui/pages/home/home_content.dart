import 'package:flutter/material.dart';
import 'package:gourment/core/model/category_model.dart';
import 'package:gourment/core/services/json_parse.dart';
import 'package:gourment/core/extension/int_extension.dart';

import 'home_category_item.dart';

class WXHomeScreenContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 适用于不需要经常刷新加载数据
    return FutureBuilder<List<WXCategoryModel>> (
      // 异步请求数据
      future: WXJsonParse.getCategoryDate(),
      builder: (ctx, snapshot) {
        // 还没有数据则转圈显示
        if(!snapshot.hasData) return Center(child: CircularProgressIndicator());
        if(snapshot.hasError) return Center(child: Text("请求数据失败！"));

        final _categories = snapshot.data;

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
            return WXHomeCategoryItem(_categories[index]);
          }
        );
      },
    );
  }
}

/*

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
    WXJsonParse.getCategoryDate().then((value) {
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
        return WXHomeCategoryItem(_categories[index]);
      }
    );
  }
}
*/


