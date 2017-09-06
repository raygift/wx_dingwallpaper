// main.js
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
      url: '../event/download?id=' + event.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://cn.bing.com/HPImageArchive.aspx', //仅为示例，并非真实的接口地址
      data: {
        format: 'js',
        idx: '0',
        n: '8'
      },
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function (res) {
        that.setData({
          imgs: res.data["images"]
        })
        // wx.request({
        //   url: 'https://cn.bing.com/cnhp/coverstory/', //仅为示例，并非真实的接口地址
        //   // success: function (res) {
        //   //   that.setData({
        //   //     imgs: res.data["images"]
        //   //   })
        //   // }
        // })
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