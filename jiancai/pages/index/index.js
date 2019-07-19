Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    channel: [],
    brand: [],
    floorGoods: [],
    xinpin: [],
    jiaju: [],
    shangye: [],
    huwai: [],
    peijian: [],
    renqi: [],
    RootUrl:'https://www.ledc.cn/'
  },
  bindAaa(e) {
    let t = e.currentTarget.dataset.newsid;
    console.log("t", e.currentTarget.dataset.newsid)
    wx.navigateTo({
      url: '../goods/goods?newsid=' + t,
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.request({
      url: "https://www.ledc.cn/xhr/api/method/def",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        _this.setData({
          banner: res.data.data.banner,
          channel:res.data.data.channel,
          brand: res.data.data.brandList,
          floorGoods: res.data.data.categoryList,
          xinpin: res.data.data.newGoodsList,
          jiaju: res.data.data.categoryList[0],
          shangye: res.data.data.categoryList[1],
          huwai: res.data.data.categoryList[2],
          peijian: res.data.data.categoryList[3],
          renqi:res.data.data.hotGoodsList
        })
        // console.log(res.data.data)
        console.log(res.data.data)
        console.log(res.data.data.categoryList[0].goodsList)
        // console.log(res.data.data.brandList)
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