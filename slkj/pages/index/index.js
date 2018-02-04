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
    // util.fetch('https://zhihu-daily.leanapp.cn/api/v1/last-stories', function (data) {
    //   that.setData({
    //     banner: data.STORIES.stories
    //   });
    // });

    let that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://zhihu-daily.leanapp.cn/api/v1/last-stories',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          banner: res.data.STORIES.stories,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })

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