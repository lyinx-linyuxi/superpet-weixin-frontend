const app = getApp()
Page({
  data: {
    spinShow:true
  },
  onLoad (options) {
    // 页面初始化 options为页面跳转所带来的参数
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
    wx.switchTab({
      url: '/pages/index/userinfo/userinfo'
    })
  }
  
    
})