App = getApp();
Page({
  data: {
    items:[
      "图书馆",
      "教学楼A楼",
      "教学楼B楼",
      "实验室",
      "宿舍"
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
      }),
      console.log(that.data.managerInfo)
      wx.switchTab({
        url: '../shouye/shouye',
      })
     /* wx.request({
        url:'http://www.pluto.wiki',
        data: JSON.stringify(that.data.managerInfo) ,
        method:'POST',
        success:function(res) {
          wx.navigateTo({
            url: '../shouye/shouye',
          })
        },
        fail:function(res){
           wx.navigateTo({
            url: '../shouye/shouye',
          })
        }
      })*/
    }
  },
  onload: function () {
    /* wx.request({
      url:'http://www.pluto.wiki',
      method: 'GET',
      success:function(res) {
       console.log('获取管理范围成功')
      },
      fail:function(res){
        console.log("获取管理范围失败")
      }
    })*/
  }
})