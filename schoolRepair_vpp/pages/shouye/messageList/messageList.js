var app = getApp();
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    items:[
      { "name": "长思一号", "id": "one" },
      { "name": "长思二号", "id": "tow" },
      { "name": "长思三号", "id": "three" },
      { "name": "长思四号", "id": "four" },
      { "name": "长思五号", "id": "five" },
    ],
    currentTabIndex:0,
    floor:[
      "全部",
      "灯",
      "桌子",
      "椅子",
      "水管",
      "其他"
    ],
    index:0,
    hide:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*wx.request({
      url: 'http://www.pluto.wiki/api/server/get/allMainTenance',
      data:data,
      mothed:"GET",
      success:function(res) {
        console.log("获取维修信息成功")
      },
      fail:function(res) {
        console.log("获取维修信息失败")
      }
    })*/
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  currrenttap:function(e) {
    if(this.data.currentTabIndex == e.currentTarget.dataset.idx)
      {
        return;
      }
    this.setData({
      currentTabIndex: e.currentTarget.dataset.idx
    })
  },
  floorChange:function(e) {
    this.setData({
      index:e.detail.value,
    })
    console.log(e.detail.value)
  },
  showModel:function() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否确定修理完成？',
      showCancel: true,
      success: function(res) {
        if(res.confirm){
          console.log("确认删除")
          that.setData({
            hide: 'none',
          })
        }else if(res.cancel) {
          console.log("取消删除")
        }
      },
    })
  }
})