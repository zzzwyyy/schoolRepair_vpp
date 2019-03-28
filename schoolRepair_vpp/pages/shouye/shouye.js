var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      '宿舍',
      '教学楼',
      '图书馆',
      '体育馆'
    ],
    currentTabIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  /*点击管理地点的选项卡事件*/
  currentTap:function(e) {
    console.log(e)
     if(this.data.currentTabIndex == e.currentTarget.dataset.idx) {
       return;
     }
     this.setData({
       currentTabIndex:e.currentTarget.dataset.idx
     })
  }
})