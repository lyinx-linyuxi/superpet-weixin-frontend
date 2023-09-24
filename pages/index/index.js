const app = getApp()
 
//默认头像
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
 
 
Page({
    data: {
        avatarUrl: defaultAvatarUrl, //用户头像
        theme: wx.getSystemInfoSync().theme,
        nickName: "" //用户昵称
    },
 
    //onLoad方法
    onLoad(options) {
        //接收到登录页面传过来的头像和昵称
        if (options.userAvatarUrl != "null") { //进行判空处理
            this.setData({
                //这里的地址是华为云服务器的地址，需要进行nginx配置
                avatarUrl: "http://117.78.3.175/" + options.userAvatarUrl
            })
        }
        if (options.userName != "null") {
            this.setData({
                nickName: options.userName
            })
        }
        //监听主题改变事件(与本demo功能无关)
        wx.onThemeChange((result) => {
            this.setData({
                theme: result.theme
            })
        })
    },
 
    //用户选择头像
    onChooseAvatar(e) {
        var that = this;
        console.log(e.detail)
        const {
            avatarUrl
        } = e.detail
 
        this.setData({
            avatarUrl
        })
 
        //对临时图片链接进行base64编码
        var avatarUrl_base64 = 'data:image/jpeg;base64,' + wx.getFileSystemManager().readFileSync(this.data.avatarUrl, 'base64')
 
        //将编码后的图片发送到服务器进行存储
        wx.request({
            url: 'http://localhost:3000/upLoadImage',
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            data: {
                avatarUrl: avatarUrl_base64, //请求体中封装编码后的图片
            },
            success(res) {
                console.log(res)
            }
        })
    },
 
    //获取用户昵称
    getNickName(e) {
        var that = this;
        var username = e.detail.value
        //将编码后的图片发送到服务器进行存储
        wx.request({
            url: 'http://localhost:3000/setUserName',
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            data: {
                username: username, //请求体中封装编码后的图片
            },
            success(res) {
                console.log(res)
                that.setData({
                    nickName: e.detail.value
                })
            }
        })
       
    }
})