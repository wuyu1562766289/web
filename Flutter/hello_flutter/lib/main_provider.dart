import 'package:flutter/material.dart';
import './provider/viewmodel.dart';
import 'package:provider/provider.dart';

/*
* 1. 创建需要共享的数据
* 2. 在应用程序的顶层包裹ChangeNotifierProvider
* 3. 在其他位置使用共享的数据
*     Provider.of: 当Provider中的数据发生改变时，Provider.of所在的Widget整个build都会重新构建；
*     Consumer(相对推荐): 当Provider中的数据发生改变时，重新执行Consumer的builder；
*     Selector：1. selector方法（作用，对原有的数据进行转换）；
*               2. shouldRebuild（作用：要不要重新构建）
* */

main() {
  runApp(
    // 2. 在应用程序顶层包裹
    ChangeNotifierProvider(
      create: (context) {
        WXCounterViewModel();
      },
      child: MyApp()
    )
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Provider",
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Provider")),
      body: Center(
//          mainAxisAlignment: MainAxisAlignment.center,
          child: Column(
            children: <Widget>[
              WXShowData1(),
              WXShowData2()
            ],
          )
      ),
      floatingActionButton: Selector<WXCounterViewModel, WXCounterViewModel>(
        selector: (ctx, counterVM) => counterVM,
        // 是否重新构建
        shouldRebuild: (prev, next) => false,
        builder: (ctx, counterVM, child) {
          return FloatingActionButton(
            child: child,
            onPressed: () {
              counterVM.counter += 1;
            },
          );
        },
        // 放到外面避免重新构建
        child: Icon(Icons.add)
      )
    );
  }
}

class WXShowData1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 3. 在其他位置使用共享数据
    int counter = Provider.of<WXCounterViewModel>(context).counter;

    return Container(
      color: Colors.greenAccent,
      child: Column(
        children: <Widget>[
          Text("当前计数: $counter", style: TextStyle(fontSize: 30)),
        ],
      )
    );
  }
}

class WXShowData2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 3. 在其他位置使用共享数据
    int counter = Provider.of<WXCounterViewModel>(context).counter;

    return Container(
      color: Colors.yellowAccent,
      child: Consumer<WXCounterViewModel>(
        builder: (ctx, counterVM, child) {
          return Text("当前计数: $counter", style: TextStyle(fontSize: 30));
        }
      )
    );
  }
}




