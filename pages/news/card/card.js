const app = getApp()
Page({
  data: {
    spinShow: true,
    pets: []
  },
  onLoad (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'http://localhost:8080', // 替换成后端提供的API地址
      method: 'GET', // 根据后端要求选择使用GET或POST
      success(res) {
        if (res.data.code === 1) {
          that.setData({
            pets: res.data.data
          });
        } else {
          wx.showToast({
            title: '数据加载失败',
            icon: 'none'
          });
        }
      },
      fail() {
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        });
      }
    });
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
      url: '/pages/index/news/news'
    })
  }
  
    
})