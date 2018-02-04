  /**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _get(url, success, fail) {

  console.log("------start---_get----");
  wx.request({
    url: url,
    header: {
      // 'Content-Type': 'application/json'
    },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });

  console.log("----end-----_get----");
}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post_from(url, data, success, fail) {
  console.log("----_post--start-------");
  wx.request({
    url: url,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    data: { data: data },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });
  console.log("----end-----_get----");
}

/**
* url 请求地址
* success 成功的回调
* fail 失败的回调
*/
function _post_json(url, data, success, fail) {
  console.log("----_post--start-------");
  wx.request({
    url: url,
    header: {
      'content-type': 'application/json',
    },
    method: 'POST',
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });

  console.log("----end----_post-----");
}
module.exports = {
  _get: _get,
  _post: _post_from,
  _post_json: _post_json
}

// //GET方式
// let map = new Map();
// map.set('receiveId', '0010000022464');
// let d = json_util.mapToJson(util.tokenAndKo(map));
// console.log(d);
// var url1 = api.getBaseUrl() + 'SearchTaskByReceiveId?data=' + d;
// network_util._get(url1, d,
//   function (res) {
//     console.log(res);
//     that.setData({
//       taskEntrys: res.data.taskEntrys
//     });
//   }, function (res) {
//     console.log(res);
//   });

// //Post方式
// let map = new Map();
// map.set('receiveId', '0010000022464');
// let d = json_util.mapToJson(util.tokenAndKo(map));
// console.log(d);
// var url1 = api.getBaseUrl() + 'SearchTaskByReceiveId';
// network_util._post(url1, d,
//   function (res) {
//     console.log(res);
//     that.setData({
//       taskEntrys: res.data.taskEntrys
//     });
//   }, function (res) {
//     console.log(res);
//   });