import 'package:flutter/material.dart';

main() => runApp(MyApp());

// 快捷键：stl
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
        title: Text("商品列表"),
      ),
      body: WXHomeContent(),
    );
  }
}

class WXHomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 使用Column会导致子组件溢出，所以需要设置父组件为可滚动
    return ListView(
      children: <Widget>[
        WXHomeProductItem("Apple1", "Macbook1", "https://tva1.sinaimg.cn/large/006y8mN6gy1g72j6nk1d4j30u00k0n0j.jpg"),
        SizedBox(height: 8),
        WXHomeProductItem("Apple2", "Macbook2", "https://tva1.sinaimg.cn/large/006y8mN6gy1g72imm9u5zj30u00k0adf.jpg"),
        SizedBox(height: 8),
        WXHomeProductItem("Apple3", "Macbook3", "https://tva1.sinaimg.cn/large/006y8mN6gy1g72imqlouhj30u00k00v0.jpg")
      ],
    );
  }
}

class WXHomeProductItem extends StatelessWidget {
  final String title;
  final String desc;
  final String imgUrl;

  final titleStyle = TextStyle(fontSize: 25, color: Colors.amber);
  final descStyle = TextStyle(fontSize: 30, color: Colors.cyanAccent);

  WXHomeProductItem(this.title, this.desc, this.imgUrl);

  @override
  Widget build(BuildContext context) {
    // 给一个组件包裹一层快捷键：Alt+Enter
    return Container(
      // 设置内边距
      padding: EdgeInsets.all(10),
      // 设置外边框
      decoration: BoxDecoration(
        border: Border.all(
          width: 5, // 边框宽度
          color: Colors.black12 // 边框颜色，数字为透明度
        )
      ),
      child: Column(
        // 主轴对齐方式
        // mainAxisAlignment: MainAxisAlignment.center,
        // 交叉轴对齐方式
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
          SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Text(title, style: titleStyle),
            ],
          ),
          // 间距
          SizedBox(height: 8),
          Text(desc, style: descStyle),
          SizedBox(height: 8),
          Image.network(imgUrl)
        ],
      ),
    );
  }
}


