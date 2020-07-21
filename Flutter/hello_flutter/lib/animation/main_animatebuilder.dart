import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "animation",
      theme: ThemeData(primaryColor: Colors.greenAccent, splashColor: Colors.yellow),
      home: WXHomePage(),
    );
  }
}

class WXHomePage extends StatefulWidget {
  @override
  _WXHomePageState createState() => _WXHomePageState();
}

class _WXHomePageState extends State<WXHomePage> with SingleTickerProviderStateMixin {
  Animation sizeAnimation;

  // 创建AnimationController
  AnimationController _controller;
  @override
  void initState() {
    super.initState();

    // 1. 创建AnimationController
    _controller = AnimationController(
        vsync: this,
        duration: Duration(seconds: 1),
        lowerBound: 0.0,
        upperBound: 1.0
    );

    // 2. 设置Curve的值(这里值范围0~1)
    Animation animation = CurvedAnimation(parent: _controller, curve: Curves.elasticInOut);

    // 3. Tween
    sizeAnimation = Tween(begin: 50.0, end: 150.0).animate(animation);

/*    // 监听动画值的改变
    _controller.addListener(() {
      setState(() {
      });
    });*/

    // 监听动画状态的改变
    _controller.addStatusListener((status) {
      if(status == AnimationStatus.completed) {
        _controller.reverse();
      } else if(status == AnimationStatus.dismissed) {
        _controller.forward();
      }
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
      ),
      body: Center(
        child: AnimatedBuilder(
          animation: _controller,
          builder: (ctx, child) {
            return Icon(Icons.favorite, color: Colors.red, size: sizeAnimation.value);
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.play_arrow),
        onPressed: () {
          // 向前执行动画
//          _controller.forward();

          // 动画是否在执行
          if(_controller.isAnimating) {
            // 停止
            _controller.stop();
          } else if(_controller.status == AnimationStatus.forward) {
            // 如果暂停时动画是向前状态，则继续恢复向前执行
            _controller.forward();
          } else if(_controller.status == AnimationStatus.reverse) {
            // 向后执行
            _controller.reverse();
          } else {
            _controller.forward();
          }
        },
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}

/*class WXAnimatedIcon extends AnimatedWidget {
//  final Animation sizeAnimation;
//  WXAnimatedIcon(this.sizeAnimation): super(listenable: sizeAnimation);

  WXAnimatedIcon(Animation sizeAnimation): super(listenable: sizeAnimation);

  @override
  Widget build(BuildContext context) {
//    return Icon(Icons.favorite, color: Colors.red, size: sizeAnimation.value);
    Animation sizeAnimation = listenable;
    return Icon(Icons.favorite, color: Colors.red, size: sizeAnimation.value);
  }
}*/

/*
    * 1. Animation：抽象类
    *     * 监听动画值的改变
    *     * 监听动画状态的改变
    *     * value
    *     * status
    * 2. AnimationController继承自Animation
    *     * vsync：同步信号（this -> with SingleTickerProviderStateMixin)
    *     * forward():向前执行动画
    *     * reverse（）：反转执行动画
    * 3. CurvedAnimation：
    *     * 作用： 设置动画执行的速率（速度曲线）
    * 4. Tween: 设置动画执行的value范围
    *     * begin: 开始值
    *     * end： 结束值
    * */
//final controller = AnimationController(vsync: this);
//final animation = CurvedAnimation(parent: controller, curve: Curves.elasticInOut);
//final valueAnimation = Tween(begin: 100, end: 200).animate(animation);

