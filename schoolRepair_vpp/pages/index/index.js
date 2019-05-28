Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断当前版本是否支持组件、回调、参数、API等
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  onLoad:function() {
    var that = this;
     //查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //用户已经成功授权
              console.log("用户已经授权")
              wx.redirectTo({
                url: '../welcome/welcome'
              })
              wx.login({
                success: res => {
                  console.log("用户code:" + res.code)
                  if(res.code) {
                    wx.request({
                      url: 'http://www.pluto.wiki',
                      data:res.code,
                      method:'POST',
                      header: {
                        'content-type': 'application/json'
                      },
                      success:function(res) {
                        if(res.statusCode == 200) {
                          console.log("获取到的openid:" + res.data)
                          wx.setStorageSync('openid', res.data)
                        } else {
                          console.log("获取用户登录失败" + res.errMsg)
                        }
                      }
                    })
                  }
                }
              })
            },
            fail:function(res) {
              console.log('获取Openid失败')
            }
          })
        } 
      }       
    })
  },
  bindGetUserInfo:function(e){
    console.log("用户信息如下：")
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      /*wx.request({
        url: '',
        data: e.detail.userInfo,
        method: 'POST',
        success:function(res) {
          wx.redirectTo({
            url: '../welcome/welcome'
          })
        },
        fail:function(res){
          wx.showModal({
        title: '警告',
        content: '请允许授权,否则将无法使用小程序',
      })
        }
      })
    }else{
      wx.showModal({
        title: '警告',
        content: '未使用此小程序，请允许授权',
      })*/
    } 
  }
})
