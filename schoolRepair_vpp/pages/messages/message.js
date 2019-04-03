App = getApp();
Page({
  data: {
    items:[
      { name: "图书馆", value: "图书馆" },
      { name: "宿舍", value: "宿舍" },
      { name: "教室", value: "教室" },
      { name: "体育馆", value: "体育馆" },
      { name: "游泳馆", value: "游泳馆" },
      { name: "其他", value: "其他"}
    ],
    show:false,
    managerInfo:{}
  },
 
  checkboxChange:function(e){
      console.log(e.detail.value)
  },
 //注册按钮绑定事件
  formSubmit:function(e) {
    let { managerName, managerSex, managerId, managerPhone, managerRange} = e.detail.value;
    //判断输入框是否为空
    if (!managerName || !managerSex || !managerId || !managerPhone || !managerRange){
      this.setData({
        show:true
      })
    }
    else{
      this.setData({
        managerInfo:{}
      })
    }
  }
})