import 'package:flutter/material.dart';
import 'package:gourment/core/router/router.dart';
import 'package:gourment/core/viewmodel/favor_view_model.dart';
import 'package:gourment/core/viewmodel/filter_view_model.dart';
import 'package:gourment/core/viewmodel/meal_view_model.dart';
import 'package:provider/provider.dart';
import 'ui/shared/app_theme.dart';

void main() {
//  WXMealRequest.getMealDate().then((value) {
//    print(value);
//  });
  runApp(
    MultiProvider(
      providers: [
/*        ChangeNotifierProvider(create: (ctx) => WXMealViewModel()),
        ChangeNotifierProvider(create: (ctx) => WXFavorViewModel()),
        ChangeNotifierProvider(create: (ctx) => WXFilterViewModel())*/

        ChangeNotifierProvider(create: (ctx) => WXFilterViewModel()),
        // 关联
        ChangeNotifierProxyProvider<WXFilterViewModel, WXMealViewModel>(
          create: (ctx) => WXMealViewModel(),
          update: (ctx, filterVM, mealVM) {
            mealVM.updateFilters(filterVM);
            return mealVM;
          },
        ),
        ChangeNotifierProxyProvider<WXFilterViewModel, WXFavorViewModel>(
          create: (ctx) => WXFavorViewModel(),
          update: (ctx, filterVM, favorVM) {
            favorVM.updateFilters(filterVM);
            return favorVM;
          },
        )
      ],
      child: MyApp()
    )
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "美食",
      // 主题
      theme: WXAppTheme.norTheme,
      darkTheme: WXAppTheme.darkTheme,
      // 路由
      initialRoute: WXRouter.initRoute,
      routes: WXRouter.routes,
      onGenerateRoute: WXRouter.generateRoute,
      onUnknownRoute: WXRouter.unKnownRoute
    );
  }
}
