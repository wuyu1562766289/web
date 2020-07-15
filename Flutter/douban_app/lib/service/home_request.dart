import 'config.dart';
import 'http_request.dart';
import 'package:douban_app/model/home_model.dart';
//电影列表API：http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10
//电影详情API：http://api.douban.com/v2/movie/subject/${event.movieid}?apikey=0df993c66c0c636e29ecbb5344252a4a
//http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10
class HomeRequest {
  static Future<List<MovieItem>> requestMovieList(int start) async {
    // 1. 构建URL
    final movieURL = "/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=$start&count=${HomeConfig.movieCount}";

    // 2. 发送网络请求获取结果
    final result = await HttpRequest.request(movieURL);
//    print(result);
    final subjects = result["subjects"];

    // 3. 将Map转成Model
    List<MovieItem> movies = [];
    for(var value in subjects) {
      movies.add(MovieItem.fromMap(value));
    }

    return movies;
  }
}