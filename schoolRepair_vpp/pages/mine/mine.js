Page({

  /**
   * 页面的初始数据
   */
  data: {
    upData: "none",
    items:[
      "宿舍",
      "图书馆",
      "体育馆",
      "教室",
      "游泳馆",
      "其他"
    ],
    upDataInfo:{
    }
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
  /*更改信息按钮控制隐藏页面*/
  dataChange:function(e) {
    this.setData({
      upData:'',
      oldData:'none'
    }) 
  },
  /*隐藏页面的取消按钮*/
  cancel:function(e) {
    this.setData({
      upData: 'none',
      oldData: ''
    }) 
  },
  /*更改信息的保存按钮*/
  conserve:function(e) {
    this.setData({
      upData: 'none',
      oldData: ''
    }) 
  },
  formSubmit:function(e) {
    console.log(e)
    let { userName, userSex, userId, userNumber, checkInfo } = e.detail.value;
    this.setData({
      upDataInfo:{
        userName,
          userSex,
        userId,
          userNumber,
        checkInfo
      }
    })
    console.log(this.data.upDataInfo)
  }
})