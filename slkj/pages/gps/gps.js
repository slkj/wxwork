//index.js
//获取应用实例 
var app = getApp()
Page({
  data: {
    carNumber: "",
    map: {
      lat: 0,
      lng: 0,
      iconPath:'',
      markers: [],
      hasMarkers: false//解决方案  
    } 
  },
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        // success  
        // wx.request({
        //   url: 'https://xxx.com/detail.htm?vid=3&latlng=' + res.latitude + ',' + res.longitude,
        //   data: {},
        //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
        //   // header: {}, // 设置请求的 header  
        //   success: function (res) {
            // success  
            that.setData({
              'map.lat': 23.099994,
              'map.lng': 113.324520,
              'map.markers': [{
                latitude: 23.099994,
                longitude: 113.324520,
                name: '00000',
                desc: '123123123',
                iconPath: '/res/images/location.png',
              }],
              'map.hasMarkers': true//解决方案  
            });
        //   }
        // })
      }
    })
  },
  carNumberInput: function (e) {
    this.setData({
      carNumber: e.detail.value
    })
  },
  clickButton: function (e) {
    let that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://zhihu-daily.leanapp.cn/api/v1/last-stories',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("用户名：" + that.data.carNumber + " 密码：");
      }
    })
  },

})