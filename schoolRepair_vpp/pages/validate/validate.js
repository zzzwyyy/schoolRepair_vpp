Page({

  data: {
   
  },
  /**
   *  input框的双向绑定
   */
  inputNumber:function(event) {
    this.setData({
      inputNum : event.detail.value
    })
  } ,
  handleButton:function() {
   wx.request({
     url: "http://www.pluto.wiki",
    data:{},
    method:'POST',
    header:   {
      'content-type':'application/x-www-form-urlencoded'
      },
    success:function(res) {
      console.log("验证码向后发送成功")
     wx.redirectTo({
        url:'../messages/message'  
     })
    },
    fail:function(res) {
      console.log("验证码向后发送失败")
      wx.showModal({
        title: '提示',
        content: '请重新输入',
      })
    }
  })
 },
})