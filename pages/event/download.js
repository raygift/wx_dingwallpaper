// pages/event/download.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [],
    imgs: [],
    intl: [],
    imgBaseUrl: []
  },
  // 原图下载
  Download: function (event) {
    if (this.data.imgUrl == null) {
      wx.showToast({
        title: '未能加载图片',
        icon: 'error',
        duration: 2000
      })
    }
    else {
      wx.downloadFile({
        url: "https://cn.bing.com" + this.data.imgBaseUrl + "_1920x1080.jpg",
        success: function (res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(msg) {
              wx.showModal({
                title: '提示',
                showCancel: false,
                content: '壁纸保存成功！',
                success: function (res) {
                  if (res.confirm) {
                    // console.log('用户点击确定')
                  }
                }
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
  // 适应手机尺寸壁纸下载
  DownloadPhoneSize: function (event) {
    if (this.data.imgUrl == null) {
      wx.showToast({
        title: '未能加载图片',
        icon: 'error',
        duration: 2000
      })
    }
    else {
      var phoneSize = "_768x1280.jpg"
      wx.downloadFile({
        url: "https://cn.bing.com" + this.data.imgBaseUrl + phoneSize,
        success: function (res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(msg) {
              wx.showModal({
                title: '提示',
                showCancel: false,
                content: '壁纸保存成功！',
                success: function (res) {
                  if (res.confirm) {
                    // console.log('用户点击确定')
                  }
                }
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


  // 带水印壁纸下载
  Downloadlogo: function (event) {
    if (this.data.imgUrl == null) {
      wx.showToast({
        title: '未能加载图片',
        icon: 'error',
        duration: 2000
      })
    }
    else {
      wx.downloadFile({
        url: "https://cn.bing.com/hpwp/" + this.data.imgs.hsh + "?intlF=" + this.data.intl,
        success: function (res) {
          console.log("保存到临时路径成功")
          console.log(res)
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(msg) {
              wx.showModal({
                title: '提示',
                showCancel: false,
                content: '壁纸保存成功！',
                success: function (res) {
                  if (res.confirm) {
                  }
                }
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
      intl: options.intlF
    })
    var that = this;

    wx.request({
      url: 'https://cn.bing.com/HPImageArchive.aspx', //仅为示例，并非真实的接口地址
      data: {
        format: 'js',
        idx: options.id,
        n: '1',
        nc: "",
        pid: "hp",
        intlF: options.intlF
      },
      success: function (res) {
        that.setData({
          imgs: res.data["images"][0],
          imgUrl: res.data["images"][0]["url"],
          imgBaseUrl: res.data["images"][0]["urlbase"]
        })
        // console.log(that.data.imgs)
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