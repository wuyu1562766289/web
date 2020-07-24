import 'package:flutter/material.dart';
import 'package:gourment/core/model/meal_model.dart';
import 'package:gourment/core/viewmodel/base_view_model.dart';

import 'filter_view_model.dart';

class WXFavorViewModel extends WXBaseViewModel {
/*class WXFavorViewModel extends ChangeNotifier {
  List<WXMealModel> _favorMeals = [];

  WXFilterViewModel _filterVM;

  void updateFilters(WXFilterViewModel filterVM) {
    _filterVM = filterVM;
  }

  // 提供接口给其他地方使用
  List<WXMealModel> get favorMeals {
    return _favorMeals.where((meal) {
      if(_filterVM.isGlutenFree && !meal.isGlutenFree) return false;
      if(_filterVM.isLactoseFree && !meal.isLactoseFree) return false;
      if(_filterVM.isVegetarian && !meal.isVegetarian) return false;
      if(_filterVM.isVegan && !meal.isVegan) return false;

      return true;
    }).toList();
  }

  void addMeal(WXMealModel meal) {
    _favorMeals.add(meal);
    notifyListeners();
  }

  void removeMeal(WXMealModel meal) {
    _favorMeals.remove(meal);
    notifyListeners();
  }

  bool isFavor(WXMealModel meal) {
    return _favorMeals.contains(meal);
  }*/

  void addMeal(WXMealModel meal) {
    strMeals.add(meal);
    notifyListeners();
  }

  void removeMeal(WXMealModel meal) {
    strMeals.remove(meal);
    notifyListeners();
  }

  bool isFavor(WXMealModel meal) {
    return strMeals.contains(meal);
  }

  void setFavorState(WXMealModel meal) {
    if(isFavor(meal)) {
      removeMeal(meal);
    } else {
      addMeal(meal);
    }
  }
}