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

class WXHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("基础Widget")
      ),
      body: WXHomeContent(),
      // 浮动按钮
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => print("FloatingActionButton"),
      ),
      // 设置浮动按钮的位置
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}

class WXHomeContent extends StatefulWidget {
  @override
  _WXHomeContentState createState() => _WXHomeContentState();
}

class _WXHomeContentState extends State<WXHomeContent> {
  final userTextEditingController = TextEditingController();
  final passwordTextEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Theme(
      // 设置输入框边框样式
      data: ThemeData(
        primaryColor: Colors.red
      ),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            TextField(
              controller: userTextEditingController,
              decoration: InputDecoration(
                labelText: "userName",
                icon: Icon(Icons.people),
                hintText: "请输入用户名",
                filled: true,
                border: OutlineInputBorder(),
                fillColor: Colors.red[100]
              ),
              onChanged: (value) {
                print(value);
              },
              onSubmitted: (value) {
                print(value);
              },
            ),
            SizedBox(height: 10),
            TextField(
              // 隐藏输入内容
              obscureText: true,
              controller: passwordTextEditingController,
              decoration: InputDecoration(
                labelText: "password",
                // 输入框样式
                border: OutlineInputBorder(),
                icon: Icon(Icons.lock)
              ),
            ),
            SizedBox(height: 10),
            Container(
              width: double.infinity, // 最大限度扩展
              height: 50,
              child: FlatButton(
                child: Text("登录", style: TextStyle(fontSize: 20, color: Colors.white)),
                color: Colors.lightBlueAccent,
                onPressed: () {
                  final user = userTextEditingController.text;
                  final password = passwordTextEditingController.text;
                  print("用户名：$user 密码：$password");

                  // 清除输入框
                  userTextEditingController.text = "";
                  passwordTextEditingController.text = "";
                },
              ),
            )
          ],
        ),
      ),
    );
  }
}

