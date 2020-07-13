import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '豆瓣App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Hello Douban'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: WXStarRating(count: 5, rating: 7),
      )
    );
  }
}

class WXStarRating extends StatefulWidget {
  final double rating;
  final double maxRating;
  final int count;
  final double size;
  final Color unselectedColor;
  final Color selectedColor;
  // 图片
  final Widget unselectedImage;
  final Widget selectedImage;

  WXStarRating({
    // 必须传一个分数
    @required this.rating,
    this.maxRating = 10,
    this.count = 5,
    this.size = 30,
    this.unselectedColor = const Color(0xffbbbbbb),
    this.selectedColor = const Color(0xffff0000),
    Widget unselectedImage,
    Widget selectedImage
    // 初始化图片：如果传了图片过来则使用传过来的，否则使用默认值
}): unselectedImage = unselectedImage ?? Icon(Icons.star_border, color: unselectedColor, size: size),
    selectedImage = selectedImage ?? Icon(Icons.star, color: selectedColor, size: size);

  @override
  _WXStarRatingState createState() => _WXStarRatingState();
}

class _WXStarRatingState extends State<WXStarRating> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Row(mainAxisSize: MainAxisSize.min, children: buildUnselectedStar()),
        Row(mainAxisSize: MainAxisSize.min, children: buidSelectedStar())
        /*Row(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Icon(Icons.star_border, color: widget.unselectedColor, size: widget.size),
            Icon(Icons.star_border, color: widget.unselectedColor, size: widget.size)
          ]
        ),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Icon(Icons.star, color: widget.selectedColor, size: widget.size),
            Icon(Icons.star, color: widget.selectedColor, size: widget.size)
          ]
        )*/
      ],
    );
  }

  // 生成未选中状态的控件
  List<Widget> buildUnselectedStar() {
    return List.generate(widget.count, (index) {
//      return Icon(Icons.star_border, color: widget.unselectedColor, size: widget.size);
        return widget.unselectedImage;
    });
  }

  // 生成选中状态的控件
  List<Widget> buidSelectedStar() {
    // 1. 创建stars
    List<Widget> stars = [];
    final star = widget.selectedImage;

    // 2. 构建完全填充满的star
    double oneValue = widget.maxRating / widget.count;
    // 向下取整，得到完全填充的star数
    int entireCount = (widget.rating / oneValue).floor();
    for(var i = 0; i < entireCount; i++) {
      stars.add(star);
    }

    // 3. 构建部分填充的star
    // 完整的star之外还剩下需要填充部分
    double leftWidth = ((widget.rating / oneValue) - entireCount) * widget.size;
    // 裁剪得到剩余部分
    final halfStar = ClipRect(
      clipper: WXStarClipper(leftWidth),
      child: star
    );

    stars.add(halfStar);

    if(stars.length > widget.count) {
      return stars.sublist(0, widget.count);
    }

    return stars;
  }
}

// 需要自己实现裁剪
class WXStarClipper extends CustomClipper<Rect> {
  double width;

  WXStarClipper(this.width);

  // 裁剪
  @override
  Rect getClip(Size size) {
    return Rect.fromLTRB(0, 0, width, size.height);
  }

  // 是否需要重新裁剪
  @override
  bool shouldReclip(WXStarClipper oldClipper) {
    return oldClipper.width != this.width;
  }
}