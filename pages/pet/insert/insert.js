const app = getApp()
Page({
  data: {
    petName:'',     // 宠物姓名
    gender: null,    // 宠物性别
    weight: '',    // 宠物体重
    description: '',  // 宠物描述
    sterilized: null,   // 是否绝育
    birthDate: '点击设置日期',    // 出生日期
    homeDate: '点击设置日期',     // 到家日期
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
    wx.navigateBack()
  },
  inputPetName(e) {
    // 输入宠物名时更新数据和打印到控制台
    this.setData({
      petName: e.detail.value
    });
    console.log('输入的宠物名:', e.detail.value);
  },

  inputPetWeight(e) {
    this.setData({
      weight: e.detail.value
    });
  },

  inputDescription(e) {
    this.setData({
      description: e.detail.value
    });
  },

  setGender(e) {
    const gender = e.currentTarget.dataset.gender;
    this.setData({
      gender: gender
    });
  },

  setSterilized(e) {
    const sterilized = e.currentTarget.dataset.sterilized == '已绝育'?1 : 0;
    this.setData({
      sterilized: sterilized
    });
  },

  bindDateChange(e) {
    // 更新日期选择器的值
    const id = e.currentTarget.id;  // 获取当前picker的id
    const value = e.detail.value;
    this.setData({
      [id]: value
    });
    console.log(`更新的日期(${id}):`, value);  // 打印更新的日期信息到控制台
  },

  handleClick() {
    // 提交表单信息
    const { petName, gender, weight, description, sterilized, birthDate, homeDate } = this.data;
    console.log('提交的信息:', this.data);  // 打印所有提交的信息到控制台
    wx.request({
      url: 'http://localhost:8080/admin/petcard',
      method: 'POST',
      data: {
        petName,
        gender,
        weight,
        description,
        sterilized,
        birthDate,
        homeDate
      },
      success(res) {
        if (res.statusCode === 200) {
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 2000
          });
          wx.reLaunch({
            url: '/pages/index/pet'
          });
          wx.navigateBack();
          wx.navigateBack();
        }
      }
    });
  },

})