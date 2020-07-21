import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    /*
    * 1. 一旦设置了主题，那么应用程序中的某些Widget就会直接使用主题的样式；
    * 2. 可以通过Theme.of(context).textTheme.display2
    * */
    return MaterialApp(
      title: "Theme Test",
      theme: ThemeData(
        // 1. 亮度(dark:暗黑模式)
        brightness: Brightness.light,
        // 2. 传入的不是Color，而是MaterialColor(包含了primaryColor和accentColor)
        primarySwatch: Colors.red,
        // 3. 设置导航和TabBar的颜色，会覆盖primarySwatch设置的值
        primaryColor: Colors.orange,
        // 4. 单独设置FloatingActionButton/Switch颜色
        accentColor: Colors.greenAccent,
        // 5. button主题
        buttonTheme: ButtonThemeData(
          height: 24,
          minWidth: 10,
          buttonColor: Colors.yellow
        ),
        // 6. Card主题
        cardTheme: CardTheme(
          color: Colors.blue,
          elevation: 40
        ),
        // 7. text主题
        textTheme: TextTheme(
          // 默认字体大小为14
          body1: TextStyle(fontSize: 16, color: Colors.red),
          display1: TextStyle(fontSize: 20),
          display2: TextStyle(fontSize: 22)
        )
      ),
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Theme"),
      ),
      body: Center(
          child: Column(
            children: <Widget>[
              Text("Hello World!"),
              Text("body2啊", style: Theme.of(context).textTheme.body2),
              Switch(value: true, onChanged: (val) {}, activeColor: Colors.red),
              RaisedButton(child: Text("Raise"), onPressed: () {}),
              Card(child: Text("您好啊！", style: TextStyle(fontSize: 25),),)
            ],
          )
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            title: Text("首页"),
            icon: Icon(Icons.home)
          ),
          BottomNavigationBarItem(
            title: Text("收藏"),
            icon: Icon(Icons.scatter_plot)
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.favorite),
        onPressed: () {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (ctx) {
              return WXDetail();
            }
          ));
        },
      ),
    );
  }
}

class WXDetail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // theme设置会自动继承过来，单独设置可以用Theme包裹设置
    
    return Theme(
      // 拷贝主题设置，想单独设置的可以在里面进行修改
      data: Theme.of(context).copyWith(
        primaryColor: Colors.purple
      ),
      child: Scaffold(
        appBar: AppBar(
          title: Text("详情页"),
        ),
        body: Center(child: Text("详情页内容")),
        // floatingActionButton不能被上面的方法修改，可以使用如下方法
        floatingActionButton: Theme(
          data: Theme.of(context).copyWith(
            colorScheme: Theme.of(context).colorScheme.copyWith(
              secondary: Colors.yellow
            )
          ),
          child: FloatingActionButton(
            child: Icon(Icons.pets),
            onPressed: () {},
          ),
        ),
      ),
    );
  }
}
