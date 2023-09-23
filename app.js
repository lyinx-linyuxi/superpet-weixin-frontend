const urlMapping = require('./assets/js/urlMapping.js');
//app.js
App({
  globalData: {
    userInfo: null,
  },
  onLaunch () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.UserLogin()
    
  },
  UserLogin(){
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          wx.request({
            method:"POST",
            data:{
              code: res.code
            },
            url: urlMapping.POST_USER_LOGIN,
            success: res => {
              console.log(res.data);
              
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
  
})