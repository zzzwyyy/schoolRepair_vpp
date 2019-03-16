Page({

  data: {
   
  },
  inputNumber:function(event) {
    this.setData({
      inputNum : event.detail.value
    })
   
  } ,
  handleButton:function() {
    console.log(this.inputNum)
  }
})