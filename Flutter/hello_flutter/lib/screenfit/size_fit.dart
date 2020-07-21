import 'dart:ui';

class WXSizeFit {
  static double physicalWidth;
  static double physicalHeight;
  static double screenWidth;
  static double screenHeight;
  static double dpr;
  static double statusHeight;

  static double rpx;
  static double px;

  // {基准尺寸}
  static void init({double standarSize = 750}) {
    // 1. 手机的物理分辨率
    physicalWidth = window.physicalSize.width;
    physicalHeight = window.physicalSize.height;

    // 2. 获取dpr（像素比）
    dpr = window.devicePixelRatio;

    // 3. 手机屏幕的大小（逻辑分辨率）
    screenWidth = physicalWidth / dpr;
    screenHeight = physicalHeight / dpr;

    // 4. 状态栏高度
    statusHeight = window.padding.top / dpr;

    // 5. 计算rpx的大小
    rpx = screenWidth / standarSize;
    px = rpx * 2;
  }

  static double setRpx(double size) {
    return rpx * size;
  }
  static double setPx(double size) {
    return px *size;
  }
}