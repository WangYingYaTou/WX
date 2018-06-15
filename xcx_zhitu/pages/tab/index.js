// pages/tab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allInfo:{},
    timeList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  
  getData: function(){
    var res = {
        "code": 100,
        "msg": "处理成功",
        "extend": {
            "dayTimeAllow": [
                {
                    "day": "2018-05-18",
                    "times": [
                        {
                            "time": "11:00",
                            "allow": 1
                        },
                        {
                            "time": "12:00",
                            "allow": 0
                        },
                        {
                            "time": "13:00",
                            "allow": 1
                        },
                        {
                            "time": "14:00",
                            "allow": 0
                        },
                        {
                            "time": "15:00",
                            "allow": 0
                        },
                        {
                            "time": "16:00",
                            "allow": 0
                        }
                    ]
                },
                {
                    "day": "2018-05-25",
                    "times": [
                        {
                            "time": "11:00",
                            "allow": 1
                        },
                        {
                            "time": "11:00",
                            "allow": 1
                        },
                        {
                            "time": "11:00",
                            "allow": 1
                        },
                        {
                            "time": "11:00",
                            "allow": 1
                        },
                        {
                            "time": "11:00",
                            "allow": 1
                        },
                        {
                            "time": "11:00",
                            "allow": 1
                        }
                    ]
                },
                {
                  "day": "2018-05-25",
                  "times": [
                      {
                          "time": "11:00",
                          "allow": 1
                      },
                      {
                          "time": "11:00",
                          "allow": 1
                      },
                      {
                          "time": "11:00",
                          "allow": 1
                      },
                      {
                          "time": "11:00",
                          "allow": 1
                      },
                      {
                          "time": "11:00",
                          "allow": 1
                      },
                      {
                          "time": "11:00",
                          "allow": 1
                      }
                  ]
              }
            ]
        }
    }
    res.extend.dayTimeAllow.forEach(function(t,i){
      if(i == 0){
        t.selected = true;
      }else {
        t.selected = false;
      }
    });

    this.setData({
      allInfo: res,
      timeList: res.extend.dayTimeAllow[0].times
    })
  },
  clickDay:function(event){
    var allInfoTimp = this.data.allInfo;
    var index = event.currentTarget.dataset.index;
    allInfoTimp.extend.dayTimeAllow.forEach(function(item){
      item.selected = false;
    })
    allInfoTimp.extend.dayTimeAllow[index].selected = true;
    this.setData({
      allInfo: allInfoTimp,
      timeList: allInfoTimp.extend.dayTimeAllow[index].times
    })
  },
  clickTime:function(event){
    var allow = event.currentTarget.dataset.allow;
    var index = event.currentTarget.dataset.index;
    if(allow == 1){
      wx.showToast({
        'title':"你不能再点击了"
      })
      return;
    }else {
      var timeListTemp = this.data.timeList;
      timeListTemp[index].allow = 1;
      this.setData({
        timeList: timeListTemp
      })

    }
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
  
  }
})