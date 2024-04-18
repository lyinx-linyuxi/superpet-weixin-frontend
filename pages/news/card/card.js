const app = getApp()
Page({
  data: {
    spinShow: true,
    pets: [
      {
        name: "冯曜",
        age: "3岁",
        weight: "5kg",
        description: "活泼爱跳",
        imageUrl: "https://i.loli.net/2017/08/21/599a521472424.jpg"
      },
      {
        name: "杜博东",
        age: "18岁",
        weight: "6kg",
        description: "yeg",
        imageUrl: "./img/bg.jpg"
      },
      // 你可以添加更多宠物的信息
    ]
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
      url: '/pages/index/news/news'
    })
  }
  
    
})