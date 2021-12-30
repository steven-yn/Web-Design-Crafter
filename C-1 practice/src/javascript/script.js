jQuery(document).ready(function () {
  // img slide

  var cnt = $(".slideImg").length;
  var pos = 0;
  var index = 0;

  setInterval(function () {
    if (index < cnt - 1) {
      index++;
    } else {
      index = 0;
    }

    pos = index * -800 + "px";

    $(".slideList").animate({ left: pos }, 500);
  }, 3000);

  // nav

  $(".nav > ul > li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown(500);
  });
  $(".nav > ul > li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp(150);
  });

  //tab menu

  var btnLi = $(".tab-btn > ul > li");
  var cont = $(".tab-cont > div");
  var gall = $(".tab-gall > div");

  btnLi.click(function (e) {
    e.preventDefault();

    var target = $(this);
    var index = target.index();

    btnLi.removeClass("active");
    cont.removeClass("active");
    target.addClass("active");
    gall.addClass("active");

    cont.css("display", "none");
    cont.eq(index).css("display", "block");

    gall.css("display", "block");
    gall.eq(index).css("display", "none");
  });

  //gall img

  var img = $(".tab-gall > div > ul > li > a > img");

  img.mouseover(function () {
    $(this).css("opacity", "0.5");
  });

  img.mouseout(function () {
    $(this).css("opacity", "1");
  });
});
