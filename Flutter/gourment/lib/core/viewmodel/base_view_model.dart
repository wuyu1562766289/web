import 'package:flutter/material.dart';
import 'package:gourment/core/model/meal_model.dart';

import 'filter_view_model.dart';

class WXBaseViewModel extends ChangeNotifier {
  List<WXMealModel> _meals = [];

  WXFilterViewModel _filterVM;

  void updateFilters(WXFilterViewModel filterVM) {
    _filterVM = filterVM;
  }

  // 返回过滤后的数据
  List<WXMealModel> get meals {
    return _meals.where((meal) {
      if(_filterVM.isGlutenFree && !meal.isGlutenFree) return false;
      if(_filterVM.isLactoseFree && !meal.isLactoseFree) return false;
      if(_filterVM.isVegetarian && !meal.isVegetarian) return false;
      if(_filterVM.isVegan && !meal.isVegan) return false;

      return true;
    }).toList();
  }

  // 获取过滤前的数据
  List<WXMealModel> get strMeals {
    return _meals;
  }

  set meals(List<WXMealModel> value) {
    _meals = value;
    notifyListeners();
  }
}