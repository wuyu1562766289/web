import 'package:douban_app/model/home_model.dart';
import 'home_movie_item.dart';
import 'package:flutter/material.dart';
import 'package:douban_app/service/home_request.dart';

class WXHomeContent extends StatefulWidget {
  @override
  _WXHomeContentState createState() => _WXHomeContentState();
}

class _WXHomeContentState extends State<WXHomeContent> {
  final List<MovieItem> movies = [];

  // 请求网络数据
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    HomeRequest.requestMovieList(0).then((res) {
      setState(() {
        movies.addAll(res);
        print(movies);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: movies.length,
      itemBuilder: (ctx, index) {
        return WXHomeMovieItem(movies[index]);
    });
  }
}



