//index.js 
//获取应用实例 
var app = getApp()
Page({
  data: {
    // 页面配置  
    list: [],
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    img:"https://www.ledc.cn/upload/ad/20181106022519637.png",
    RootUrl:" https://www.ledc.cn/",
    tit:''
  },
  bindAaa: function (e) {
    let t = e.currentTarget.dataset.newsid;
    if (t.product_id === '2') {
      wx.navigateTo({
        url: '../fenlei_er/fenlei_er'
      })
    }
    else if (t.product_id === '1') {
      wx.navigateTo({
        url: '../fenlei_er1/fenlei_er1'
      })
    }
  },
  bindAaa1(e) {
    wx.navigateTo({
      url: '../fenlei_er1/fenlei_er1'
    })
  },
  onLoad: function () {
    const _this = this;
    wx.request({
      url: "https://www.ledc.cn/xhr/api/method/catalog",
      data: {},
      success: function (res) {
        _this.setData({
          currentCategory: res.data.data
        })
      }
    })
    wx.request({
      url: "https://www.ledc.cn/xhr/api/method/current?id=1",
      data: {},
      success: function (res) {
        console.log(res.data.data.currentCategory)
        _this.setData({
          jiaju: res.data.data.currentCategory
        })
      }
    })
    wx.request({
      url: "https://www.ledc.cn/xhr/api/method/current?id=5",
      data: {},
      success: function (res) {
        console.log( res.data.data.currentCategory)
        _this.setData({
          shangye: res.data.data.currentCategory
        })
      }
    })
    wx.request({
      url: "https://www.ledc.cn/xhr/api/method/current?id=11",
      data: {},
      success: function (res) {
        console.log(res.data.data.currentCategory)
        _this.setData({
          huwai: res.data.data.currentCategory
        })
      }
    })
    wx.request({
      url: "https://www.ledc.cn/xhr/api/method/current?id=14",
      data: {},
      success: function (res) {
        console.log(res.data.data.currentCategory)
        _this.setData({
          peijian: res.data.data.currentCategory
        })
      }
    })
    var that = this;
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
    if (e.detail.current === 1){
      wx.setNavigationBarTitle({
        title: '商业照明'
      })
    }
    else if (e.detail.current === 2) {
      wx.setNavigationBarTitle({
        title: '户外照明'
      })
    }
    else if (e.detail.current === 3) {
      wx.setNavigationBarTitle({
        title: '配件'
      })
    }
    else if (e.detail.current === 0) {
      wx.setNavigationBarTitle({
        title: '家具照明'
      })
    }
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
}) 