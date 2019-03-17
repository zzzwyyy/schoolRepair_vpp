Page({
  data: {
    sex:'',
    xingbie:[
       "男","女"
    ],
    index:0,          //0为男生，1为女生
  },
  /**
   * 监听性别picker选择器的改变
   */
  changeSex: function(e) {
    this.setData({
       index:e.detail.value,
    });
  }

})