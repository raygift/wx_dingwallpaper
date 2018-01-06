// pages/main_intl/main_intl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: []
  },
  toDownload: function (event) {
    // console.log(event.currentTarget.id)
    wx.navigateTo({
      url: '../event/download?id=' + event.currentTarget.id+'&intlF=1',
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
    wx.request({
      url: 'https://cn.bing.com/HPImageArchive.aspx', //仅为示例，并非真实的接口地址
      data: {
        format: 'js',
        idx: '0',
        n: '8',
        nc:"",
        pid:"hp",
        intlF:"1"
      },
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function (res) {
        that.setData({
          imgs: res.data["images"]
        })
        // console.log(that.data.imgs[1]["hsh"])
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
      title: 'Refreshed',
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: 'In The End',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})