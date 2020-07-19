import 'package:event_bus/event_bus.dart';
import 'package:flutter/material.dart';

// 1. 创建一个全局的eventBus对象
final eventBus = EventBus();

class UserInfo {
  String name;
  int age;

  UserInfo(this.name, this.age);
}

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Event",
      theme: ThemeData(primaryColor: Colors.greenAccent, splashColor: Colors.red),
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Event"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            WXButton(),
            WXText()
          ],
        )
      ),
    );
  }
}

class WXButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text("按钮"),
      onPressed: () {
        // 2. 发出事件
        final info = UserInfo("wang", 18);
        eventBus.fire(info);
      },
    );
  }
}

class WXText extends StatefulWidget {
  @override
  _WXTextState createState() => _WXTextState();
}

class _WXTextState extends State<WXText> {
  String _msg = "hello";

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    // 3.监听事件的类型
    eventBus.on<UserInfo>().listen((data) {
      print(data.name);
      print(data.age);
      setState(() {
        _msg = "${data.name}: ${data.age}";
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Text(_msg, style: TextStyle(fontSize: 30));
  }
}


