Page({
  data: {
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
  // Event handler.
  viewDetail: function () {
    wx.navigateTo({ url: "../detail/detail" });
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
  onLoad: function () {
    console.log(this.data.taskList)
  }
})
