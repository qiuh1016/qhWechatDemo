//index.js
//获取应用实例

var md5 = require('../../utils/md5.js')
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World123',
    userInfo: {},

    loadingHidden: true,
    toastHidden: true,

    inputUsername: '',
    inputPassword: '',

    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },

  loadingChange: function () {
    this.setData({
      loadingHidden: true
    })
  },

  toastChange: function () {
    this.setData({
      toastHidden: true
    })
  },

  //button
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  //input
  bindUsernameInput: function(e) {
    this.setData({
      inputUsername: e.detail.value
    })
  },
  bindPasswordInput: function(e) {
    this.setData({
      inputPassword: e.detail.value
    })
  },

  login: function () {
    var username = this.data.inputUsername
    var password = md5.hex_md5(this.data.inputPassword)
    console.log('username:' + username)
    console.log('password:' + password)

    this.setData({
      loadingHidden: false
    })

    var that = this
    setTimeout(function () {
      that.setData({
        loadingHidden: true,
        toastHidden: false
      })
      setTimeout(function() {
        that.setData({
          toastHidden: true
        }) 
        wx.navigateTo({
         url: '../video/video'
        })
      }, 1000)
      
    }, 1500) 

    // wx.request({
    //   url: 'http://httpbin.org',
    //   // data: {
    //   //   x: '' ,
    //   //   y: ''
    //   // },
    //   header: {
    //       'Content-Type': 'application/json'
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   },
    //   fail: function(e) {
    //     console.log(e)
    //   }
    // })

  }
})
