import 'dart:ui';

class WXCategoryModel {
  String id;
  String title;
  String color;
  Color destColor;

  WXCategoryModel({this.id, this.title, this.color});

  WXCategoryModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    title = json['title'];
    color = json['color'];

    // 1. 将color转换成十六进制的数字
    final colorInt = int.parse(color, radix: 16);
    // 2. 添加透明度
    destColor = Color(colorInt | 0xFF000000);
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['title'] = this.title;
    data['color'] = this.color;
    return data;
  }
}
