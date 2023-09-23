const app = getApp()
Page({
  data: {
    search: {
      searchValue: '',
      showClearBtn: false
    },
    searchResult: [],
    spinShow: true
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
      url: '/pages/index/home/home'
    })
  },
  //输入内容时
  searchActiveChangeinput (e) {
    const val = e.detail.value;
    this.setData({
      'search.showClearBtn': val != '' ? true : false,
      'search.searchValue': val
    })
  },
  //点击清除搜索内容
  searchActiveChangeclear (e) {
    this.setData({
      'search.showClearBtn': false,
      'search.searchValue': ''
    })
  },
  //点击聚集时
  focusSearch () {
    if (this.data.search.searchValue) {
      this.setData({
        'search.showClearBtn': true
      })
    }
  },
  //搜索提交
  searchSubmit () {
    const val = this.data.search.searchValue;
    if (val) {
      const that = this,
        app = getApp();
      wx.showToast({
        title: '搜索中',
        icon: 'loading'
      });
      wx.request({
        url: app.globalData.API_URL + 'searchTeam',
        data: {
          keywords: val,
          user_id: app.globalData.myInfo.user_id
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success (res) {
          // success
          let searchResult = res.data.data;
          const len = searchResult.length;
          for (let i = 0; i < len; i++) {
            searchResult[i]['team_avator'] = app.globalData.STATIC_SOURCE + searchResult[i]['team_avator'];
          }
          that.setData({
            searchResult: searchResult,
            'search.showClearBtn': false,
          })
        },
        fail () {
          // fail
        },
        complete () {
          // complete
          wx.hideToast();
        }
      })
    }
  }
})