//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util');
var network_util = require('../../utils/network_util');
var json_util = require('../../utils/json_util');

Page({
  data: {
    banner: null,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
  /*
  * 首页banner
  */
  setBanner: function () {
    let that = this//不要漏了这句，很重要
    //GET方式
    var url1 = 'https://zhihu-daily.leanapp.cn/api/v1/last-stories';
    network_util._get(url1, function (res) {
      console.log(res);
      that.setData({
        banner: res.data.STORIES.stories,
      });
    }, function (res) {
      console.log(res);
    });
  },

  /**
   * 入口
   */
  onLoad: function () {
    var that = this;
    that.setBanner();
  }
});