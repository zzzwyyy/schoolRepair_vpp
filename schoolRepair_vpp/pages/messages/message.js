App = getApp();
Page({
  data: {
    items:[
      "tuushu"
    ],
    managerInfo:{}
  },
 //注册按钮绑定事件
  formSubmit:function(e) {
    var that = this;
    let { managerName, managerSex, managerId, managerPhone, managerRange} = e.detail.value;
    //判断输入框是否为空
    if (!managerName || !managerSex || !managerId || !managerPhone || managerRange.length==0){
      wx.showModal({
        title: '警告',
        content: '请完善所有信息',
        showCancel:false,
      })
    }
    else{
      this.setData({
        managerInfo:{
          managerName,
          managerSex,
          managerId,
          managerPhone,
          managerRange
        }
      })
      wx.request({
        url:'',
        data: JSON.stringify(that.data.managerInfo) ,
        method:'POST',
        success:function(res) {
          /*wx.navigateTo({
            url: '../shouye/shouye',
          })*/
        },
        fail:function(res){
          wx.navigateTo({
            url: '../shouye/shouye',
          })
        }
      })
    }
  },
  onload: function () {
   /* wx.request({
      url:'',
      method: 'GET',
      success:function(res) {
       console.log('获取成功')
      }
    })*/
  }
})