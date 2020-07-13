import 'package:flutter/cupertino.dart';
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

  bool isLike = false;

  @override
  Widget build(BuildContext context) {

    // Row/Column: 继承自Flex
    // Flex: CSS Flex布局，直接使用的较少
    // Axis.vertical: Column布局
    // Axis.horizontal: Row布局

    /*
    * Row特点：
    *   - 水平方向尽可能占据比较大的空间，垂直方向包裹内容
    *     * 水平方向包裹内容可以设置mainAxisSize = min
    *
    * MainAxisAlignment:
    *   - start: 主轴的开始位置挨个摆放元素
    *   - end： 主轴的结束位置挨个摆放元素
    *   - center: 主轴中心点对齐摆放元素
    *   - spaceBetween： 左右两边的间距为0，其它元素之间平分间距
    *   - spaceAround： 左右两边的间距是其它元素之间间距的一半
    *   - spaceEvenly： 所有的间距平分
    * CrossAxisAlignment:
    *   - start: 交叉轴的起始位置对齐
    *   - end： 交叉轴的结束位置对齐
    *   - center： 中心点对齐（默认值）
    *   - baseline： 基线对齐（必须有文本的时候才起效果）
    *       设置基线对齐时必须设置textBaseline
    *   - stretch: Row先尽可能的占据交叉轴的最大空间，然后将所有的子Widget交叉轴的高度拉伸到最大
    *       如果要设置占据高度可以在外层包一层Container并设置height属性
    * */
/* // Row的基本使用
   return Container(
      height: 300,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        // 改变主轴方向为从右往左
//      textDirection: TextDirection.rtl,
        // 交叉轴对齐方式
        crossAxisAlignment: CrossAxisAlignment.stretch,
        // 设置基线对齐方式
//        textBaseline: TextBaseline.ideographic,
        children: <Widget>[
          Container(width: 80, height: 100, color: Colors.lightBlueAccent, child: Text("Hello", style: TextStyle(fontSize: 25))),
          Container(width: 80, height: 80, color: Colors.redAccent, child: Text("Hello", style: TextStyle(fontSize: 15))),
          Container(width: 80, height: 120, color: Colors.green, child: Text("Hello", style: TextStyle(fontSize: 45))),
          Container(width: 80, height: 60, color: Colors.purpleAccent, child: Text("Hello", style: TextStyle(fontSize: 30))),
        ],
      ),
    );
*/

/*
   // Row拉伸收缩使用
   return Container(
      height: 300,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        // 改变主轴方向为从右往左
//      textDirection: TextDirection.rtl,
        // 交叉轴对齐方式
        crossAxisAlignment: CrossAxisAlignment.center,
        // 设置基线对齐方式
//        textBaseline: TextBaseline.ideographic,
        children: <Widget>[
          */
/**
           * 拉伸： 空间分配占用
           * 收缩：元素占用超出屏幕可按比例进行缩放显示
           * Flexible中的属性：
           *    -flex
           * Expanded -> Flexible(fit: FlexFit.tight)
           * 空间分配只和flex有关
           * *//*

          Expanded(
              flex: 1,
              child: Container(width: 80, height: 100, color: Colors.lightBlueAccent)
          ),
          Expanded(
              flex: 1,
              child: Container(width: 80, height: 80, color: Colors.redAccent)
          ),
          Container(width: 80, height: 120, color: Colors.green),
          Container(width: 80, height: 60, color: Colors.purpleAccent),
        ],
      ),
    );
*/

/*  // Column的基本使用
    return Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        // 改变主轴方向
        verticalDirection: VerticalDirection.up,
        // 交叉轴对齐方式
        crossAxisAlignment: CrossAxisAlignment.stretch,
//        textBaseline: TextBaseline.alphabetic,
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Container(width: 80, height: 100, color: Colors.lightBlueAccent, child: Text("Hello", style: TextStyle(fontSize: 25))),
          Container(width: 80, height: 80, color: Colors.redAccent, child: Text("Hello", style: TextStyle(fontSize: 15))),
          Container(width: 80, height: 120, color: Colors.green, child: Text("Hello", style: TextStyle(fontSize: 45))),
          Container(width: 80, height: 60, color: Colors.purpleAccent, child: Text("Hello", style: TextStyle(fontSize: 30))),
        ],
      );
*/

/*      return RaisedButton(
        color: Colors.purpleAccent,
        child: Row(
          // 设置水平方向包裹内容而不是占据较大空间
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Icon(Icons.bug_report),
            Text("bug")
          ],
        ),
        onPressed: () {},
    );
*/

/**
 * Stack默认的大小是包裹内容的
 *  - alignment： 从什么位置开始排布所有的子Widget
 *  - fit： expand 将子元素拉伸到尽可能大
 *  - overflow： 超出部分如何处理
 * */
//  return StackWidget();

  return Stack(
    children: <Widget>[
      Image.asset("assets/images/yz.jpg"),
      Positioned(
        // 设置为尽可能占据空间
        left: 0,
        right: 0,
        bottom: 0,
        child: Container(
//          padding: EdgeInsets.all(8),
          padding: EdgeInsets.symmetric(horizontal: 8),
          color: Color.fromARGB(150, 0, 0, 0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Text("长得好看的小姐姐！", style: TextStyle(fontSize: 20, color: Colors.white)),
//              GestureDetector(child: Icon(Icons.favorite, color: Colors.white))
              IconButton(
                icon: Icon(Icons.favorite, color: isLike ? Colors.red : Colors.white),
                onPressed: () {
                  setState(() {
                    isLike = !isLike;
                  });
                },
              )
            ],
          ),
        ),
      )
    ],
  );
  }
}

class StackWidget extends StatelessWidget {
  const StackWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      // 叠加摆放位置
      alignment: AlignmentDirectional.bottomStart,
      // 显示溢出内容
      overflow: Overflow.visible,
      children: <Widget>[
        Image.asset("assets/images/yz.jpg"),
        // 设置显示的位置
        Positioned(
            left: 20,
            bottom: -30,
            child: Container(width: 150, height: 150, color: Colors.amber)
        ),
        Text("世界您好！", style: TextStyle(fontSize: 20, color: Colors.red))
      ],
    );
  }
}

