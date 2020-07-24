
import 'package:gourment/core/model/meal_model.dart';
import 'package:gourment/core/services/http_request.dart';

class WXMealRequest {
  static Future<List<WXMealModel>> getMealDate() async {
    // 1. 发送网络请求
    final url = "/meal";
    final res = await HttpRequest.request(url);

    // 2. json数据转换为model
    final mealArray = res["meal"];
    List<WXMealModel> meals = [];
    for(var json in mealArray) {
      meals.add(WXMealModel.fromJson(json));
    }

    return meals;
  }
}