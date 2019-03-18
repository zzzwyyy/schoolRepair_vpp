Page({
  data: {
    sex: '',
    managerName: '',
    managerId: '',
    managerPhone: '',
  },
 

  formSubmit:function(e) {
    let { managerName,sex, managerId, managerPhone } = e.detail.value;
    console.log(e.detail.value);
  
  }
})