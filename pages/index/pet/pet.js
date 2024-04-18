// 获取小程序实例
const app = getApp();

Page({
  data: {
    showLeft: false,
    spinShow: true,
    scrollTop: 65,
    // 初始数据为空，将从后端获取，或显示默认数据
    name: '',
    age: '',
    weight: '',
    description: '',
    birthDate: '',
  },
  onLoad(options) {
    wx.showNavigationBarLoading();
    this.fetchPetData();
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        spinShow: false
      });
    }, 2000);
  },
  onShow() {},
  onHide() {},
  onUnload() {},
  toggleMore() {
    this.setData({
      showLeft: !this.data.showLeft
    });
  },
  cardEvt() {
    wx.navigateTo({
      url: '/pages/pet/card/card'
    });
  },
  upper(e) {
    wx.showLoading({
      mask: true,
      title: '首次加载中'
    });
    setTimeout(function() {
      wx.hideLoading();
    }, 2000);
  },
  lower(e) {
    wx.showLoading({
      mask: true,
      title: '上拉加载中'
    });
    setTimeout(function() {
      wx.hideLoading();
    }, 2000);
  },
  // 获取宠物数据
  fetchPetData() {
    const that = this;
    let requestTimeout = setTimeout(() => {
      wx.hideNavigationBarLoading();
      wx.showToast({
        title: '请求超时，显示默认数据',
        icon: 'none'
      });
      that.setDefaultData();  // 设置默认数据
      that.setData({spinShow: false});
    }, 1000);  // 设置超时时间为10秒

    wx.request({
      url: 'https://yourbackend.endpoint/petinfo',
      method: 'GET',
      success(res) {
        clearTimeout(requestTimeout);  // 清除超时定时器
        if (res.statusCode === 200 && res.data) {
          let age = that.calculateAge(res.data.birthDate);
          that.setData({
            name: res.data.petName,
            age: age,
            weight: res.data.weight,
            description: res.data.description,
            spinShow: false
          });
        } else {
          that.setDefaultData();
          that.setData({spinShow: false});
        }
      },
      fail() {
        clearTimeout(requestTimeout);  // 清除超时定时器
        that.setDefaultData();
        that.setData({spinShow: false});
      },
      complete() {
        wx.hideNavigationBarLoading();
      }
    });
  },

  calculateAge(birthDate){
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age + '岁';
  },
  // 设置默认数据
  setDefaultData() {
    this.setData({
      name: '旺财（默认）',
      age: '4岁4个月（默认）',
      weight: '1.5kg（默认）',
      description: '想吃什么就吃什么（默认）'
    });
  }
});
