// pages/introduce/cs/cs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      { src: 'http://zrf.web3v.com/发型.png' },
      { src: 'http://zrf.web3v.com/文具.png' },
      { src: 'http://zrf.web3v.com/蛋糕.png' },
      { src: 'http://zrf.web3v.com/移动.png' }
    ]
  },
  goToScroll: function () {
    wx.navigateTo({
      url: '../scroll/scroll',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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