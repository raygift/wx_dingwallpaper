// main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    isWifi:false
  },
  toDownload: function (event) {
    // console.log(event.currentTarget.id)
    wx.navigateTo({
      url: '../event/download?id=' + event.currentTarget.id +"&intlF=0",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          intl: options.intlF,
          phoneH: res.windowHeight * 0.5,
          phoneW: res.windowWidth * 0.98

        })

      }
    })
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        if(res.networkType==='wifi'){
          that.setData({
            isWifi:true
          })
        }

      }
    })
    wx.request({
      url: 'https://cn.bing.com/HPImageArchive.aspx', //仅为示例，并非真实的接口地址
      data: {
        format: 'js',
        idx: '0',
        n: '8',
        video:'1'
      },
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function (res) {
        that.setData({
          imgs: res.data["images"]
        })
      }
    })
    
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
    this.onLoad(this.options);
    wx.stopPullDownRefresh();
    wx.showToast({
      title: '已刷新',
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '到底啦',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})