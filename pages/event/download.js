// pages/event/download.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: []
  },
  startDownload: function (event) {
    if(this.data.imgUrl==null){
      wx.showToast({
        title: '未能加载图片',
        icon: 'error',
        duration: 2000
      })
    }
    else{
      wx.downloadFile({
        url: "https://cn.bing.com"+this.data.imgUrl,
        // /az/hprichbg/rb/SneffelsRange_ZH-CN9303969066_1920x1080.jpg",
        success: function (res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(msg) {
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 2000
              })
            },
            fail(err) {
              console.log(err)
            },
            complete(msg) {
              console.log(msg)
            }
          })
        }
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imgUrl: options.id
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