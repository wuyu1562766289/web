/**
 * !as关键字给库起别名
 * !默认情况下在导入一个库时会导入这个库的所有内容：
 *    * show: 执行要导入的内容；
 *    * hide：隐藏某个要导入的内容，导入其他内容
 * !公共dart文件抽取：export
 */

// 单个文件导入
// import 'utils/math_utils.dart';
import 'utils/date_utils.dart';

// 别名
// import 'utils/math_utils.dart' as minU;

// 要导入的内容
// import 'utils/math_utils.dart' show sum;

// 隐藏min导入其他
// import 'utils/math_utils.dart' hide min;

// 导入多个自定义库：使用export
import 'utils/utils.dart';

main(List<String> args) {
  // print(sum(20, 10));
  // print(dateFormat());
  // print(minU.min(20, 10));

  // print(sum(20, 10));
  // print(min(20, 10));

  print(sum(20, 10));
  print(dateFormat());
}
