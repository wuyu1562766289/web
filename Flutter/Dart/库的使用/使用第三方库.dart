import 'package:http/http.dart' as http;

// !第三方库地址：https://pub.dev
main(List<String> args) async {
  var url =
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593931131305&di=afcc9a6c3248eb991ec1085eed39f47b&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F17%2F1533115538-zAkiuPaonx.jpg';
  var response = await http.get(url);
  print('Response status: ${response.statusCode}');
  print('Response body: ${response.body}');
}
