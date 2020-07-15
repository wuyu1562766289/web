import 'package:douban_app/model/home_model.dart';
import 'package:douban_app/widgets/dashed_line.dart';
import 'package:douban_app/widgets/star_rating.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class WXHomeMovieItem extends StatelessWidget {
  final MovieItem movie;

  WXHomeMovieItem(this.movie);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(8),
      decoration: BoxDecoration(
        border: Border(bottom: BorderSide(width: 8, color: Color(0xffcccccc)))
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          buildHeader(),
          SizedBox(height: 8),
          buildContent(),
          SizedBox(height: 8),
          buildFooter()
        ],
      ),
    );
  }

  // 1.实现头部的布局
  Widget buildHeader() {
    return Container(
      padding: EdgeInsets.fromLTRB(10, 5, 10, 5),
      decoration: BoxDecoration(
        color: Color.fromARGB(255, 238, 205, 144),
        // 设置圆角
        borderRadius: BorderRadius.circular(3)
      ),
      child: Text(
        "No.${movie.rank}",
        style: TextStyle(fontSize: 20, color: Color.fromARGB(255, 131, 95, 36)),
      ),
    );
  }

  // 2. 实现内容部分布局
  Widget buildContent() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        buildContentImage(),
        SizedBox(width: 8),
        buildContentInfo(),
        SizedBox(width: 8),
        buildContentLine(),
        SizedBox(width: 8),
        buildContentWish()
      ],
    );
  }
  // 2.1 图片处理
  Widget buildContentImage() {
    // 图片圆角处理
    return ClipRRect(
      borderRadius: BorderRadius.circular(8),
      child: Image.network(
          movie.imageURL,
          height: 150
      ),
    );
  }
  // 2.2 显示信息处理
  Widget buildContentInfo() {
    // 占用剩余空间
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          buildContentInfoTitle(),
          SizedBox(height: 8),
          buildContentInfoRating(),
          SizedBox(height: 8),
          buildContentInfoDesc()
        ],
      ),
    );
  }
  // 2.2.1 显示信息标题处理
  Widget buildContentInfoTitle() {
    // 使用富文本避免内容过长不能换行显示的问题
    return Text.rich(
      TextSpan(
        children: [
          WidgetSpan(
            child: Icon(
              Icons.play_circle_outline,
              color: Colors.deepOrange,
              size: 28
            ),
            baseline: TextBaseline.ideographic,
            alignment: PlaceholderAlignment.middle
          ),
          WidgetSpan(
            child: Text(movie.title, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            baseline: TextBaseline.ideographic,
            alignment: PlaceholderAlignment.middle
          ),
          WidgetSpan(
            child: Text(" (${movie.playDate})", style: TextStyle(fontSize: 18, color: Colors.black38)),
            baseline: TextBaseline.ideographic,
            alignment: PlaceholderAlignment.middle
          )
        ]
      )
    );
  }
  // 2.2.2 评分处理
  Widget buildContentInfoRating() {
    return Row(
      children: <Widget>[
        WXStarRating(
          rating: movie.rating,
          size: 20
        ),
        SizedBox(width: 8),
        Text("${movie.rating}", style: TextStyle(fontSize: 16))
      ],
    );
  }
  // 2.2.3 影片类型及导演主演介绍处理
  Widget buildContentInfoDesc() {
    final genresString = movie.genres.join(" ");
    final directorString = movie.director.name;
    final actorString = movie.casts.map((e) => e.name).join(" ");
    String destString = "$genresString / $directorString / $actorString";

    return Text(
      destString,
      maxLines: 2,
      overflow: TextOverflow.ellipsis,
      style: TextStyle(fontSize: 16)
    );
  }

  // 2.3 分割线
  Widget buildContentLine() {
    return Container(
      height: 100,
      child: WXDashedLine(
        axis: Axis.vertical,
        dashedHeight: 5,
        dashedWidth: .5,
        count: 10,
        color: Colors.amber
      ),
    );
  }

  // 2.4 想看
  Widget buildContentWish() {
    return Container(
      height: 100,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Image.asset("assets/images/home/wish.png"),
          Text("想看", style: TextStyle(fontSize: 18, color: Color.fromARGB(255, 235, 170, 60)))
        ],
      ),
    );
  }

  // 2.5 底部的布局
  Widget buildFooter() {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Color.fromARGB(10, 0, 0, 0),
        borderRadius: BorderRadius.circular(8)
      ),
      child: Text(movie.originalTitle, style: TextStyle(fontSize: 18, color: Colors.black38))
    );
  }
}

