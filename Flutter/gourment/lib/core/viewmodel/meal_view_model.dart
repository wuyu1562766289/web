import 'package:flutter/material.dart';
import 'package:gourment/core/model/meal_model.dart';
import 'package:gourment/core/services/meal_request.dart';
import 'package:gourment/core/viewmodel/base_view_model.dart';
import 'package:gourment/core/viewmodel/filter_view_model.dart';

class WXMealViewModel extends WXBaseViewModel{
//class WXMealViewModel extends ChangeNotifier{
/*  List<WXMealModel> _meals = [];

*//*  List<WXMealModel> get meals {
    return _meals;
  }*//*

  WXFilterViewModel _filterVM;

  void updateFilters(WXFilterViewModel filterVM) {
    _filterVM = filterVM;
  }

  List<WXMealModel> get meals {
    return _meals.where((meal) {
      if(_filterVM.isGlutenFree && !meal.isGlutenFree) return false;
      if(_filterVM.isLactoseFree && !meal.isLactoseFree) return false;
      if(_filterVM.isVegetarian && !meal.isVegetarian) return false;
      if(_filterVM.isVegan && !meal.isVegan) return false;

      return true;
    }).toList();
  }*/

  WXMealViewModel() {
    // 获取数据
    WXMealRequest.getMealDate().then((value) {
      meals = value;
      // 通知更新
      notifyListeners();
    });
  }
}