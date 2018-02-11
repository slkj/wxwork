//index.js
//获取应用实例 
var app = getApp()
var util = require('../../utils/util');
var network_util = require('../../utils/network_util');
var json_util = require('../../utils/json_util');
Page({
  data: {
    carNumber: "",
    scale: '15', //缩放
    Height: '0',
    controls: '40',//中心点
    latitude: '',
    longitude: '',
    markers: [],
    listData: []
  },
  onLoad: function (options) {
    let that = this//不要漏了这句，很重要
    this.getMapD();
    wx.getLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: (res) => {
        that.setData({
          markers: that.getSchoolMarkers(),
          // scale: 12,
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    });
  },
  getMapD() {
    let that = this//不要漏了这句，很重要
    //GET方式
    var url1 = 'https://zhihu-daily.leanapp.cn/api/v1/last-stories';
    network_util._get(url1, function (res) {
      console.log(res);
      that.setData({
        'listData': [
          {
            "id": 1,
            "placeName": "金色尚都",
            "placeImageUrl": "",
            "placeOpenTime": 1505854800,
            "placeCloseTime": 1505919600,
            "placeAddress": "河北省邯郸市丛台区金色尚都A座",
            "placeLongitude": "114.49705",
            "placeLatitude": "36.63881"
          }],
      });
    }, function (res) {
      console.log(res);
    });
  },
  getSchoolMarkers() {

    var market = [];

    for (let item of this.data.listData) {

      let marker1 = this.createMarker(item);

      market.push(marker1)
    }
    return market;
  },
  strSub: function (a) {
    var str = a.split(".")[1];
    str = str.substring(0, str.length - 1)
    return a.split(".")[0] + '.' + str;
  },
  createMarker(point) {

    let latitude = this.strSub(point.placeLatitude);
    let longitude = point.placeLongitude;
    let marker = {
      iconPath: "/res/images/location.png",
      id: point.id || 0,
      name: point.placeName || '',
      title: point.placeName || '',
      latitude: latitude,
      longitude: longitude,
      label: {
        x: -24,
        y: -26,
        content: point.placeName
      },
      width: 30,
      height: 30
    };
    return marker;
  },
  //  车牌输入框
  carNumberInput: function (e) {
    this.setData({
      carNumber: e.detail.value
    })
  },
  // 点击查询事件
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