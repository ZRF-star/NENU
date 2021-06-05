Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData:[
      {text:"院系"},
      { text: "宿舍" },
      { text: "餐饮" },
      { text: "图书馆" },
      { text: "场馆" },
      { text: "出入门" },
      { text: "ATM" },
      { text: "服务" }
    ],
    currentTab: 0,
     
    centerLongitude: "125.425812",
    centerLatitude: "43.825986",
    markers1: [{
      iconPath: "http://zrf.web3v.com/yuanxi.png",
      title: '美术学院',
      id: 'item10',
      latitude: 43.826512, 
      longitude: 125.429347,
      width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '政法学院',
        id: 'item11',
        latitude: 43.826474, 
        longitude: 125.428146,
        width: 42,
      height: 50,

      },{
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '经济与管理学院',
        id: 'item12',
        latitude: 43.827758,
        longitude: 125.427271,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '传媒科学学院（新闻学院）',
        id: 'item13',
        latitude: 43.828409, 
        longitude: 125.426670,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '东北师范大学罗格斯大学纽瓦克学院',
        id: 'item14',
        latitude: 43.827139, 
        longitude: 125.425978,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '外国语学院',
        id: 'item15',
        latitude: 43.825591, 
        longitude: 125.426241,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '音乐学院',
        id: 'item16',
        latitude: 43.825382, 
        longitude: 125.427105,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '环境学院',
        id: 'item17',
        latitude: 43.826149,
        longitude: 125.429460,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '信息科学与技术学院',
        id: 'item18',
        latitude: 43.826141, 
        longitude: 125.425576,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/yuanxi.png",
        title: '民族教育学院',
        id: 'item19',
        latitude: 43.827480, 
        longitude: 125.424492,
        width: 42,
        height: 50
      }],

    markers2: [{
      iconPath: "http://zrf.web3v.com/sushe.png",
      title: '春华公寓',
      id: "item20",
      latitude: 43.824829, 
      longitude: 125.421343,
      width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '光华公寓',
        id: "item21",
        latitude: 43.825471, 
        longitude: 125.420877,
        width: 42,
      height: 50,

    }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '夏华公寓',
        id: "item22",
        latitude: 43.825340, 
        longitude: 125.423039,
        width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '秋华公寓',
        id: "item23",
        latitude: 43.824991, 
        longitude: 125.423940,
        width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '星华公寓',
        id: "item24",
        latitude: 43.825943, 
        longitude: 125.422813,
        width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '日华公寓',
        id: "item25",
        latitude: 43.826900, 
        longitude: 125.422990,
        width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '月华公寓',
        id: "item26",
        latitude: 43.826710, 
        longitude: 125.421665,
        width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '冬华公寓',
        id: "item27",
        latitude: 43.824744, 
        longitude: 125.425748,
        width: 42,
      height: 50
      }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '地华公寓',
        id: "item28",
        latitude: 43.825270, 
        longitude: 125.433376,
        width: 42,
        height: 50
      }, {
        iconPath: "http://zrf.web3v.com/sushe.png",
        title: '天华公寓',
        id: "item29",
        latitude: 43.825762, 
        longitude: 125.433065,
        width: 42,
        height: 50
      }],

    markers3: [{
      iconPath: "http://zrf.web3v.com/shitang.png",
      title: '一食堂和清真餐厅',
      id: "item30",
      latitude: 43.827043, 
      longitude: 125.423849,
      width: 42,
      height: 50
    }, {
        iconPath: "http://zrf.web3v.com/shitang.png",
        id: "item31",
        title: '二食堂',
        latitude: 43.825433, 
        longitude: 125.424246,
        width: 42,
        height: 50,

    }],

    markers4: [{
      iconPath: "http://zrf.web3v.com/tushuguan.png",
      title: '图书馆',
      id: "item32",
      latitude: 43.826090, 
      longitude: 125.424310,
      width: 42,
      height: 50
    }],

    markers5: [
      {
        id: 'item50',
        latitude: 43.824461,
        longitude: 125.419369,
        title: '运动长廊',
        iconPath: 'http://zrf.web3v.com/场馆.png',

      },
      {
        id: 'item51',
        latitude: 43.825645,
        longitude: 125.423902,
        title: '排球馆',
        iconPath: 'http://zrf.web3v.com/场馆.png',

      },
    ],
    markers6: [
      {
        id: 'item60',
        latitude: 43.828524,
        longitude: 125.431063,
        title: '一号门',
        iconPath: 'http://zrf.web3v.com/一号门.png',
      },
      {
        id: 'item61',
        latitude: 43.828857,
        longitude: 125.426900,
        title: '二号门',
        iconPath: 'http://zrf.web3v.com/一号门.png',
      },
      {
        id: 'item62',
        latitude: 43.827890,
        longitude: 125.423805,
        title: '三号门',
        iconPath: 'http://zrf.web3v.com/一号门.png',
      },

      {
        id: 'item63',
        latitude: 43.826601,
        longitude: 125.419889,
        title: '四号门',
        iconPath: 'http://zrf.web3v.com/一号门.png',
      },

      {
        id: 'item64',
        latitude: 43.824836,
        longitude: 125.417743,
        title: '五号门',
        iconPath: 'http://zrf.web3v.com/一号门.png',
      },
    ],
    markers7: [
      {
        id: 0,
        latitude: 43.827263,
        longitude: 125.423365,
        title: 'ATM',
        iconPath: 'http://zrf.web3v.com/atm.png',

      },
    ],
    markers8: [
      {
        id: 'item80',
        latitude: 43.825068,
        longitude: 125.424867,
        title: '超市',
        iconPath: 'http://zrf.web3v.com/服务.png',

      },

      {
        id: 'item81',
        latitude: 43.825451,
        longitude: 125.423746,
        title: '医务室',
        iconPath: 'http://zrf.web3v.com/服务.png',

      },
      {
        id: 'item82',
        latitude: 43.826094,
        longitude: 125.421021,
        title: '幸福小铺',
        iconPath: 'http://zrf.web3v.com/服务.png',

      },
    ],
    yuanxi:[
      {
        image: 'http://zrf.web3v.com/11.jpg',
        text: '美术学院',
      },
      {
        image: 'http://zrf.web3v.com/美术学院.jpg',
        text: '政法学院',
      },
      {
        image: 'http://zrf.web3v.com/11.jpg',
        text: '经济与管理学院',
      },
      {
        image: 'http://zrf.web3v.com/传媒科学学院.jpg',
        text: '传媒科学学院（新闻学院）',
      },
      {
        image: 'http://zrf.web3v.com/11.jpg',
        text: '东北师范大学罗格斯大学纽瓦克学院',
      },
      {
        image: 'http://zrf.web3v.com/外国语学院.jpg',
        text: '外国语学院',
      },
      {
        image: 'http://zrf.web3v.com/音乐学院.jpg',
        text: '音乐学院',
      },
      {
        image: 'http://zrf.web3v.com/环境学院.jpg',
        text: '环境学院',
      },
      {
        image: 'http://zrf.web3v.com/信息科学与技术学院.jpg',
        text: '信息科学与技术学院',
      },
      {
        image: 'http://zrf.web3v.com/民族教育学院.jpg',
        text: '民族教育学院',
      }
    ],
    sushe:[
      {
        image: 'http://zrf.web3v.com/春华公寓.jpg',
        text: '春华公寓',
      },
      {
        image: 'http://zrf.web3v.com/光华公寓.jpg',
        text: '光华公寓',
      },
      {
        image: 'http://zrf.web3v.com/夏华公寓.jpg',
        text: '夏华公寓',
      },
      {
        image: 'http://zrf.web3v.com/秋华公寓.jpg',
        text: '秋华公寓',
      },
      {
        image: 'http://zrf.web3v.com/星华公寓.jpg',
        text: '星华公寓',
      },
      {
        image: 'http://zrf.web3v.com/日华公寓.jpg',
        text: '日华公寓',
      },
      {
        image: 'http://zrf.web3v.com/月华公寓.jpg',
        text: '月华公寓',
      },
      {
        image: 'http://zrf.web3v.com/冬华公寓.jpg',
        text: '冬华公寓',
      },
      {
        image: 'http://zrf.web3v.com/地华公寓.jpg',
        text: '地华公寓',
      },
      {
        image: 'http://zrf.web3v.com/天华公寓.jpg',
        text: '天华公寓',
      }
    ],

    canyin:[
      {
        image: 'http://zrf.web3v.com/一食堂.jpg',
        text: '一食堂',
      },
      {
        image: 'http://zrf.web3v.com/二食堂.jpg',
        text: '二食堂',
      },
      {
        image: 'http://zrf.web3v.com/二食堂.jpg',
        text: '清真餐厅',
      },
    ],

    lib:[
      {
        image: "http://zrf.web3v.com/tushu.png",
        text: '图书馆',
      },
    ],
    gyms: [
      {
        image: 'http://zrf.web3v.com/运动长廊.jpg',
        text: '运动长廊',
      },
      {
        image: 'http://zrf.web3v.com/排球馆.jpg',
        text: '排球馆',
      }
    ],
    gates: [
      {
        image: 'http://zrf.web3v.com/3.jpg',
        text: '一号门',
      },
      {
        image: 'http://zrf.web3v.com/二号门.jpg',
        text: '二号门',
      },
      {
        image: 'http://zrf.web3v.com/3.jpg',
        text: '三号门',
      },
      {
        image: 'http://zrf.web3v.com/3.jpg',
        text: '四号门',
      },
      {
        image: 'http://zrf.web3v.com/3.jpg',
        text: '五号门',
      }
    ],
    ATM: [
      {
        image: 'http://zrf.web3v.com/atm2.png',
        text: 'ATM',
      }
    ],
    service: [
      {
        image: 'http://zrf.web3v.com/超市.jpg',
        text: '超市',
      },
      {
        image: 'http://zrf.web3v.com/医务室.jpg',
        text: '医务室',
      },
      {
        image: 'http://zrf.web3v.com/幸福小铺.jpg',
        text: '幸福小铺',
      }
    ],

    yuanxiJumpPages:[
      '/pages/introduce/art/art',
      '/pages/introduce/political/political',
      '/pages/introduce/sem/sem',
      '/pages/introduce/media/media',
      '/pages/introduce/newark/newark',
      '/pages/introduce/foreign/foreign',
      '/pages/introduce/music/music',
      '/pages/introduce/environment/environment',
      '/pages/introduce/information/information',
      '/pages/introduce/mingzu/mingzu'
    ],

    susheJumpPages:[
      '/pages/introduce/C/C',
      '/pages/introduce/G/G',
      '/pages/introduce/xia/xia',
      '/pages/introduce/G1/G1',
      '/pages/introduce/X/X',
      '/pages/introduce/R/R',
      '/pages/introduce/Y/Y',
      '/pages/introduce/D/D',
      '/pages/introduce/dihua/dihua',
      '/pages/introduce/tianhua/tianhua'
    ],
    canyinJumpPages:[
      '/pages/introduce/restaurant/restaurant',
      '/pages/introduce/restaurant1/restaurant1',
    
    ],
    libJumpPages:[
      '/pages/introduce/library/library',
    ],
    gymsJumpPages:
      ['/pages/introduce/ydcl/ydcl',
        '/pages/introduce/pqg/pqg',
      ],
    gatesJumpPages:
      ["/pages/introduce/yhm/yhm",
        "/pages/introduce/ehm/ehm",
        "/pages/introduce/shm/shm",
        "/pages/introduce/sihm/sihm",
        "/pages/introduce/whm/whm",
      ],
    ATMJumpPages:
      ["/pages/introduce/atm/atm"],
    serviceJumpPages:
      ["/pages/introduce/cs/cs",
        "/pages/introduce/yws/yws",
        "/pages/introduce/xfxp/xfxp"]
  },

  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
   
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur,
      })
    }
    this.setData({
      centerLongitude: "125.425812",
      centerLatitude: "43.825986",
    })
    
  },
  

  yuanxiJumpTo:function(e){
    var index1 = e.currentTarget.dataset.index1;
    console.log(index1);
    this.setData({
      index1: index1,
    })
    wx.navigateTo({
      url: this.data.yuanxiJumpPages    [this.data.index1],
    })
  },

  susheJumpPages: function (e) {
    var index2 = e.currentTarget.dataset.index2;
    console.log(index2);
    this.setData({
      index2: index2,
    })
    wx.navigateTo({
      url: this.data.susheJumpPages   [this.data.index2],
    })
  },

  canyinJumpPages: function (e) {
    var index3 = e.currentTarget.dataset.index3;
    console.log(index3);
    this.setData({
      index3: index3,
    })
    wx.navigateTo({
      url: this.data.canyinJumpPages[this.data.index3],
    })
  },

  libJumpPages: function (e) {
    var index4 = e.currentTarget.dataset.index4;
    console.log(index4);
    this.setData({
      index4: index4,
    })
    wx.navigateTo({
      url: this.data.libJumpPages[this.data.index4],
    })
  },

  gymsJumpTo: function (e) {
    var index5 = e.currentTarget.dataset.index5;
    console.log(index5);
    this.setData({
      index5: index5,
    })
    wx.navigateTo({
      url: this.data.gymsJumpPages[this.data.index5],
    })
  },

  gatesJumpTo: function (e) {
    var index6 = e.currentTarget.dataset.index6;
    console.log(index6);
    this.setData({
      index6: index6,
    })
    wx.navigateTo({
      url: this.data.gatesJumpPages[this.data.index6],
    })
  },
  ATMJumpTo: function (e) {
    var index7 = e.currentTarget.dataset.index7;
    console.log(index7);
    this.setData({
      index7: index7,
    })
    wx.navigateTo({
      url: this.data.ATMJumpPages[this.data.index7],
    })
  },
  serviceJumpTo: function (e) {
    var index8 = e.currentTarget.dataset.index8;
    console.log(index8);
    this.setData({
      index8: index8,
    })
    wx.navigateTo({
      url: this.data.serviceJumpPages[this.data.index8],
    })
  },

  getCurrentLocation:function(){
    wx.getLocation({
      type: 'gcj02',
      success: (e) => {
        console.log(e)
        this.setData({
          centerLatitude: e.latitude,
          centerLongitude: e.longitude
        })
      }
    })
  },

  markertap:function(e){
    console.log(e.markerId)
    this.setData({
      toScroll:e.markerId,
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