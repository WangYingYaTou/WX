// pages/learnTab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    roomList: {} //驼峰命名格式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(); //执行自定义方法
    this.getRooms();
  },
  getData: function(){
    var that = this; //闭包的作用
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/xinfang',
      method: 'get',
      dataType: 'json',
      success: function(res){
        res.data.data.typs_conditions.forEach(function(item,index){
          if(index == 0){
            item.d = true;
          }else {
            item.d = false;
          }
        })
        that.setData({
          info: res.data
        })
        console.log(that.data.info.data.typs_conditions);
      }
    })
  },
  changeRooms:function(event){
    var index = event.currentTarget.dataset.index;
    var that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      method: 'get',
      dataType: 'json',
      data: {
        type_id: index
      },
      success: function(res){
        var infoTemp = that.data.info
        infoTemp.data.typs_conditions.forEach(function(item){
          item.d = false
        })
        infoTemp.data.typs_conditions[index-1].d = true;
        that.setData({
          roomList: res.data,
          info: infoTemp
        })
      }
    })
  },
  getRooms: function () {
    var that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      method: 'get',
      dataType: 'json',
      success: function (res) {
        that.setData({
          roomList: res.data
        })
      }
    })
  }
})