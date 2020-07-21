import '../size_fit.dart';

/// 扩充方法
extension DoubleFit on double {
//  double px() {
//    return WXSizeFit.setPx(this);
//  }
//
//  double rpx() {
//    return WXSizeFit.setRpx(this);
//  }

  double get px {
    return WXSizeFit.setPx(this);
  }
  double get rpx {
    return WXSizeFit.setRpx(this);
  }
}
