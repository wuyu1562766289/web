// miniprogram/pages/book/books.js
// 实现数据库的操作，需要初始化数据库设置
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:""
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res.tempImagePath)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  scancode() {
    wx.scanCode({
      success: res => {
        wx.showLoading()
        console.log(res)
        // 调用云函数
        wx.cloud.callFunction({
          name: "book",   // 调用云端的接口
          data: {
            a: 10,
            b: 30,
            isbn: res.result
          },
          success: res => {
            // console.log(res)
            // 添加一个时间戳字段
            res.result.create_time = new Date().getTime();

            // 入库操作
            db.collection("books").add({ 
              data: res.result
            })
            wx.hideLoading()
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})