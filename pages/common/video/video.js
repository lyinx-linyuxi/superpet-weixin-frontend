const app = getApp()

Page({
  data: {
    video:{
      src:""
    },
    spinShow: true
  },
  onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      "video.src": options.src ? options.src:""
    })

  },
  onReady () {
    // 页面渲染完成
    setTimeout(() => {
      this.setData({
        spinShow: false
      });
    }, 1000)
  },
  onShow () {
    // 页面显示
  },
  onHide () {
    // 页面隐藏
  },
  onUnload () {
    // 页面关闭
  },
  actionBackEvt() {
    wx.navigateBack()
  },
  
})