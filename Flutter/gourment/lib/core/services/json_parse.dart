import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:gourment/core/model/category_model.dart';

class JsonParse {
  static Future<List<WXCategoryModel>> getCategoryDate() async {
    // 1. 加载json文件
    final jsonString = await rootBundle.loadString("assets/json/category.json");

    // 2. 将jsonString转换成Map/List
    final result = json.decode(jsonString);

    // 3. 将Map中的内容转成对象
    final resultList = result["category"];
    List<WXCategoryModel> categories = [];
    for(var json in resultList) {
      categories.add(WXCategoryModel.fromJson(json));
    }

    return categories;
  }
}