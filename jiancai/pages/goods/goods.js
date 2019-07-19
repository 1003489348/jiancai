// pages/goods/goods.js
var WxParse = require('../../lib/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attribute: [],
    gallery: [],
    info: [],
    content: [],
    brand: [],
    issueList: [],
    renqi:[],
    RootUrl: 'https://www.ledc.cn/',
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
    var t = this;
    const _this = this
    console.log(options.newsid)
    wx.request({
      url: "https://www.ledc.cn/xhr/api/method/goodsdetail?id=" + options.newsid,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        _this.setData({
          attribute: res.data.data.attribute,
          gallery: res.data.data.gallery,
          goodslist: res.data.data.info,
          content: res.data.data.info.content,
          brand: res.data.data.brand,
          issueList: res.data.data.issue,
        })
        var con = _this.data.content;
        WxParse.wxParse('goodsDetail', 'html',con, _this);
        console.log(res.data.data);
        console.log(res.data.data.info);
      }
    }),
      wx.request({
      url: "https://www.ledc.cn/xhr/api/method/def",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          _this.setData({
            renqi: res.data.data.hotGoodsList
          })
        }
      })
  },
  // 加入购物车
  addcart: function (e) {
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000
    })
    this.setData({
      toastHidden: false
    });
    // console.log(this.data.goodslist)
    // 遍历列表 与 购物车列表
    for (var i in this.data.goodslist) {
      // 列表中某一项item的id == 点击事件传递过来的id。则是被点击的项
      console.log(this.data.goodslist.id)
      if (this.data.goodslist.id == e.target.id) {
        // 给goodsList数组的当前项添加count元素，值为1，用于记录添加到购物车的数量
        this.data.goodslist.count = 1;
        // 获取购物车的缓存数组（没有数据，则赋予一个空数组）
        var arr = wx.getStorageSync('cart') || [];
        // 如果购物车有数据
        if (arr.length > 0) {
          // 遍历购物车数组
          for (var j in arr) {
            // 判断购物车内的item的id，和事件传递过来的id，是否相等
            if (arr[j].id == e.target.id) {
              // 相等的话，给count+1（即再次添加入购物车，数量+1）
              arr[j].count = arr[j].count + 1;
              // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）
              try {
                wx.setStorageSync('cart', arr)
              } catch (e) {
                console.log(e)
              }
              // 返回（在if内使用return，跳出循环节约运算，节约性能）
              return;
            }
          }
          // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组
          arr.push(this.data.goodslist);
        }
        // 购物车没有数据，把item项push放入当前数据（第一次存放时）
        else {
          arr.push(this.data.goodslist);
        }
        // 最后，把购物车数据，存放入缓存
        try {
          wx.setStorageSync('cart', arr)
          // 返回（在if内使用return，跳出循环节约运算，节约性能）
          return;
        } catch (e) {
          console.log(e)
        }
      }
    }
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