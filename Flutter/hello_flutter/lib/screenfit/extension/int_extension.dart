import '../size_fit.dart';

/// 扩充方法
extension IntFit on int {
//  double px() {
//    return WXSizeFit.setPx(this);
//  }
//
//  double rpx() {
//    return WXSizeFit.setRpx(this);
//  }

  double get px {
    return WXSizeFit.setPx(this.toDouble());
  }
  double get rpx {
    return WXSizeFit.setRpx(this.toDouble());
  }
}
