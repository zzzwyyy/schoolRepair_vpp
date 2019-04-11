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
    url: "",
    data:{},
    method:'POST',
    header:   {
      'content-type':'application/x-www-form-urlencoded'
      },
    success:function(res) {
     /*wx.redirectTo({
        url:'../welcome/welcome'  
     })*/
    },
    fail:function(res) {
      wx.redirectTo({
        url: '../messages/message' 
      })
    }
  })
 },
})