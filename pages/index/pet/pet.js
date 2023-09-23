const app = getApp()
Page({
  data: {
    showLeft: false,
    spinShow: true,
    scrollTop:65
  },
  onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.showNavigationBarLoading()
  },
  onReady() {
    // 页面渲染完成
    setTimeout(() => {
      this.setData({
        spinShow: false
      });
    }, 1000)
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面关闭
  },
  toggleMore() {
    this.setData({
      showLeft: !this.data.showLeft
    });
  },
  cardEvt(){
    wx.navigateTo({
      url: '/pages/pet/card/card'      
    })
  },
  upper: function (e) {
    wx.showLoading({
      mask: true,
      title: '首次加载中'
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  lower: function (e) {
    wx.showLoading({
      mask: true,
      title: '上拉加载中'
    })

    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },

});
