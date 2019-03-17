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
    url: "http://www.tiankongzhicheng.club/web/users.json",
    data:{
      inputNum:''
      },
    method:'POST',
    header:   {
      'content-type':'application/x-www-form-urlencoded'
      },
    success:function(res) {
      console.log(res.data.code);
    },
    fail:function(res) {
      console.log('submite fail');
    },
    complete:function(res) {
      console.log('submite complete');
    }
  })
 },
})