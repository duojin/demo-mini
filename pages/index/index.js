//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    moneyInfo:{},
    taskList:[{
      taskId: 1,
      taskIcon: '',
      taskName: '武侠',
      taskTags: [{ tag: 'aaa' }, { tag: 'bbb' }],
      taskPrice: 16,
      execStatus: 0
    }, {
      taskId: 2,
      taskIcon: '',
      taskName: '选科',
      taskTags: '',
      taskPrice: 10,
      execStatus: 0
    }, {
        taskId: 3,
        taskIcon: '',
        taskName: '奖项',
        taskTags: '',
        taskPrice: 20,
        execStatus: 0
    }, {
      taskId: 4,
      taskIcon: '',
      taskName: '动作',
      taskTags: '',
      taskPrice: 30,
      execStatus: 0
    }, {
      taskId: 5,
      taskIcon: '',
      taskName: '喜剧',
      taskTags: '',
      taskPrice: 20,
      execStatus: 0
    }, {
      taskId: 6,
      taskIcon: '',
      taskName: '言情',
      taskTags: '',
      taskPrice: 10,
      execStatus: 0
    }]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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

    var that = this;
    wx.request({
      url: app.globalData.domain+'/mobile/test',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          msg: res.data
        });
      }
    })
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  lower: function () {
    console.log("下拉了....")
  },
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
    this.setData({
      taskList: [{
        taskId: 1,
        taskIcon: '',
        taskName: '武侠1',
        taskTags: [{ tag: 'aaa' }, { tag: 'bbb' }],
        taskPrice: 16,
        execStatus: 0
      }, {
        taskId: 2,
        taskIcon: '',
        taskName: '选科1',
        taskTags: '',
        taskPrice: 10,
        execStatus: 0
      }]
    });
  },
  onReachBottom: function () {
    var that = this;
    var data = that.data.taskList;
    that.setData({
      taskList: [{
        taskId: 1,
        taskIcon: '',
        taskName: '武侠',
        taskTags: [{ tag: 'aaa' }, { tag: 'bbb' }],
        taskPrice: 16,
        execStatus: 0
      }, {
        taskId: 2,
        taskIcon: '',
        taskName: '选科',
        taskTags: '',
        taskPrice: 10,
        execStatus: 0
      }].concat(data)
    });
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewDetail: function () {
    wx.navigateTo({ url:"../detail/detail"});
  },
  customData: {
    hi: 'MINA'
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
