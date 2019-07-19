// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    isLogin: false,
    showLoginDialog: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  getPhoneNumbe: function () {
    wx.navigateTo({
      url: '../denglu/denglu'
    })
  },

  dizhi: function () {
    wx.navigateTo({
      url: '../addressList/addressList'
    })
  },
  security: function () {
    wx.navigateTo({
      url: '../security/security'
    })
  },
  shoucang: function () {
    wx.navigateTo({
      url: '../shoucang/shoucang'
    })
  },
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },
  dingdan: function () {
    wx.navigateTo({
      url: '../dingdan/dingdan'
    })
  },
  coupon: function () {
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },
  help: function () {
    wx.showToast({
      image: '../../../image/jinggao.png',
      title: '请联系客服',
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '114',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  onUserInfoClick() {
    //点击用户头像
    let token = wx.getStorageSync('token');
    console.log(token)
    if (!token) {
      this.showLoginDialog();
    } else {
      this.showLoginDialog();
    }
  },
  onDialogBody() {
    // 阻止冒泡
  },
  //显示登录框
  showLoginDialog() {
    this.setData({
      showLoginDialog: true
    })
  },
  //关闭登录框
  onCloseLoginDialog() {
    this.setData({
      showLoginDialog: false
    })
  },
  onWechatLogin() {
    wx.reLaunch({
      url: './my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
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

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})