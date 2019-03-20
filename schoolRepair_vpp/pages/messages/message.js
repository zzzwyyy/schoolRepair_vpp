App = getApp();
Page({
  data: {
    items:[
      { name: "图书馆", value: "图书馆" },
      { name: "宿舍", value: "宿舍" },
      { name: "教室", value: "教室" },
      { name: "体育馆", value: "体育馆" },
      { name: "图书馆", value: "图书馆" },
      { name: "游泳馆", value: "游泳馆" }
    ],
    show:false
  },
 
  checkboxChange:function(e){
      console.log(e.detail.value)
  },

  formSubmit:function(e) {
    let { managerName, sex, managerId, managerPhone } = e.detail.value;
    if (!managerName || !managerId || !managerPhone){
      this.setData({
         show:true
      })
    }
    else{
      this.setData({
         managerName,
         sex,
         managerId,
         managerPhone 
      })

    }
  
  }
})