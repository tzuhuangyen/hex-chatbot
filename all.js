//常見問題收合
$(document).ready(function () {
  $(".faq_title").click(function () {
    $(".faq_title").addClass("change_color");
    $(this).find(".ans").slideToggle();
    //同時會顯示打開答案
    $(this).find(".close").toggleClass("active-show");
    // 點擊後 同時出現 顯示關閉按鈕
    $(this).find(".open").toggleClass("active-none");
    //同時打開鈕＋號也會消失
    $(this).siblings().find("p").slideUp();
  });
});

//回到頂按鈕
$(document).ready(function () {
  $(".btn-top").click(function () {
    $("html,body").scrollTop(0);
  });
});

// 用戶試算表
$(document).ready(function () {
  $(".10th").click(function (event) {
    event.preventDefault();
    $(".user-number").text("10000");
    $(".basic-m").text("600");
    $(".stand-m").text("1600");
  });
  $(".15th").click(function (event) {
    event.preventDefault();
    $(".user-number").text("15000");
    $(".basic-m").text("800");
    $(".stand-m").text("1800");
  });
  $(".20th").click(function (event) {
    event.preventDefault();
    $(".user-number").text("20000");
    $(".basic-m").text("1000");
    $(".stand-m").text("2000");
  });
  $(".25th").click(function (event) {
    event.preventDefault();
    $(".user-number").text("25000");
    $(".basic-m").text("1200");
    $(".stand-m").text("2200");
  });
  $(".m25th").click(function (event) {
    event.preventDefault();
    $(".user-number").text(">25000");
    $(".basic-m").text("1400");
    $(".stand-m").text("2400");
  });
});

//swiper 輪播插件

/* 
  id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
  要抓取 id "#comment-swiper"
  */
var swiper = new Swiper("#comment-swiper", {
  /*  預設要顯示幾個卡片 */
  slidesPerView: 3,
  /* 卡片元素的間隔 */
  spaceBetween: 30,
  /* 我想將分頁圓點綁在哪個 class */
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  /* 螢幕寬度大於等於 375px 時切換為 1 欄 */
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    375: {
      slidesPerView: 1,
    },
  },
});
