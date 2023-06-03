nie.define("Func", function () {
  // nie.config.copyRight.setWhite();
  var PopDialog = nie.require("nie.util.PopDialog");
  const shareV5 = nie.require("nie.util.shareV5"),
    init = function () {
      fn.shareCommon();
      const $bgm = $("audio")[0],
        $bgmBtn = $(".music_btn");
      $bgmBtn.click(function (e) {
        $bgmBtn.toggleClass("off");
        if (!$bgmBtn.hasClass("off")) {
          $bgm.play();
          sessionStorage.setItem("bgm", 1);
        } else {
          $bgm.pause();
          sessionStorage.setItem("bgm", 0);
        }
      });
      console.log("common");
      if (sessionStorage.getItem("bgm") == 0) {
        $bgm.pause();
        $bgmBtn.toggleClass("off");
      }
      if (!$bgmBtn.hasClass("off") && location.pathname.indexOf("show").length == -1) {
        $(document).one("click", function () {
          $bgm.play();
        });
      }
      $(".wait_close").click(function () {
        $(".wait_div").hide();
      });
      $(".waitShow").click(function () {
        $(".wait_div").show();
      });
      $(".openalert").click(function(){
        PopDialog.Alert('系统维护中');
      })
    },
    fn = {
      shareCommon: function () {
        let sharePic = $("#share_pic").attr("src");
        let shareTxt = $("#share_desc").html();
        let shareTitle = $("#share_title").html();

        var share = shareV5({
          fat: "#NIE-share", //分享组件插入父级（dom或选择器），默认："#NIE-share"
          type: 1, //分享组件类别，默认:1（1：小icon，2：大icon，3：右侧滚动条分享，4：图片分享，5：文本分享，6：带文字的小icon）
          defShow: [23, 22, 2, 1, 24], //默认展示的分享按钮
          title: shareTitle, //分享的标题,默认：当前页面的title
          img: sharePic, //分享的图片，默认：null
          content: shareTxt, //分享的正文内容，只有部分平台支持。默认：当前页面的title
        });
      },
      //检测号码正确性
      checkPhone: function (phonenum) {
        return /^(13|14|15|17|18|19)\d{9}$/.test(phonenum);
      },
      checkEmail: function (email) {
        return /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          email
        );
      },
      getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return r[2];
        return null;
      },
      download: function () {
        var niedownload = nie.require("nie.util.niedownload");
        NieDownload.create({
          wrapper: $("#nie-download"), //下载模块最外层容器
          enableAndroid: true, //是否开发安卓下载
          enableIos: true, //是否开发IOS下载
          abroad: true, //是否使用海外下载地址，20180510添加
          useSSL: true, //是否使用https，默认为false,20180510已取消使用，统一为https
          disableClick: function () {
            //设置未开发下载的按钮点击后执行此函数
            // $('#androidOrder').trigger("click");
          },
        });
      },
      InitRemote: {
        //接口根目录
        _traditional: true, //传统方式序列化数据
        _doAjax: function (url, data, success, error) {
          error = typeof error === "function" ? error : this.ajaxError;
          return $.ajax({
            url: url,
            data: data,
            traditional: this._traditional,
            dataType: "jsonp",
            success: function (result) {
              if (
                result.success == true ||
                result.status == true ||
                result.succ == true ||
                result.code == 200
              ) {
                success && success(result);
              } else {
                error && error(result);
              }
            },
            error: function () {
              error &&
                error({
                  msg: "网络错误，请刷新重试",
                });
            },
          });
        },
        _fakeAjax: function (callback, data) {
          return setTimeout(function () {
            callback(data);
          }, 500);
        },
        ajaxError: function (data) {
          alert(data.msg);
        },
      },
    };

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) == true) {
    if (location.pathname.indexOf("light") != -1) {
      if (location.hash == "#fyhd") {
        window.location.href = "https://sky.163.com/m/light/cultural/";
      } else if (location.hash == "#workshop") {
        window.location.href = "https://sky.163.com/m/light/workshop/";
      } else {
        window.location.href = "https://sky.163.com/m/light/welfare/";
      }
      return
    }
    // if (location.pathname.indexOf("mapview") != -1) {
    //   window.location.href = location.origin + "/m" + location.pathname + location.search
    //   return
    // }
    window.location.href = location.origin + "/m" + location.pathname + location.search
    return
  }

  init();

  return {
    init: init,
    fn: fn,
  };
});


function waitShow() {
  $(".wait_div").show();
}