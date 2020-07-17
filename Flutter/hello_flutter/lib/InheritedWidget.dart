import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: WXHomePage(),
    );
  }
}

class WXConterWidget extends InheritedWidget{
  // 1. 共享的数据
  final int counter;

  // 2. 定义构造方法
  WXConterWidget({this.counter, Widget child}): super(child: child);

  // 3. 获取组件最近的 InheritedWidget
  static WXConterWidget of(BuildContext context) {
    // 沿着Element树去找到最近的WXCounterElement, 从Element中取出Widget对象
    return context.dependOnInheritedWidgetOfExactType();
  }

  // 4. 不要回调state中的didChangDependencies
  // 如果返回true：执行依赖当前的InheritedWidget的state中的didChangDependencies
  @override
  bool updateShouldNotify(WXConterWidget oldWidget) {
    return oldWidget.counter != counter;
  }
}

class WXHomePage extends StatefulWidget {
  @override
  _WXHomePageState createState() => _WXHomePageState();
}

class _WXHomePageState extends State<WXHomePage> {
  int _counter = 100;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("InheritedWidget")),
      body: WXConterWidget(
        counter: _counter,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              WXShowData1(),
              WXShowData2()
            ],
          ),
        )
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          setState(() {
            _counter++;
          });
        },
      )
    );
  }
}

class WXShowData1 extends StatefulWidget {
  @override
  _WXShowData1State createState() => _WXShowData1State();
}

class _WXShowData1State extends State<WXShowData1> {
  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    print("_WXShowData1State中的didChangeDependencies执行了！！！");
  }

  @override
  Widget build(BuildContext context) {
    int counter = WXConterWidget.of(context).counter;

    return Card(
      color: Colors.greenAccent,
      child: Text("当前计数: $counter", style: TextStyle(fontSize: 30))
    );
  }
}

class WXShowData2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    int counter = WXConterWidget.of(context).counter;

    return Container(
      color: Colors.yellowAccent,
      child: Text("当前计数: $counter", style: TextStyle(fontSize: 30))
    );
  }
}




