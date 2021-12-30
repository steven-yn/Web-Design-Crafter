jQuery(document).ready(function () {
  // imgSlide
  var cnt = 0;
  var index = $(".imgitem").length;

  $(".imgitem").eq(cnt).fadeIn(0);
  setInterval(function () {
    if (cnt < index - 1) {
      cnt++;
    } else {
      cnt = 0;
    }

    var before = cnt - 1;

    $(".imgitem").eq(before).fadeOut();
    $(".imgitem").eq(cnt).fadeIn();
  }, 3000);

  // submenu slide

  $(".mainMenu > li").mouseover(function () {
    $(this).find(".subMenu").stop().slideDown(200);
  });

  $(".mainMenu > li").mouseout(function () {
    $(this).find(".subMenu").stop().slideUp(200);
  });

  // tab-menu

  var btn = $(".tab-btn > div");
  var cont = $(".tab-cont > div");

  btn.click(function (e) {
    e.preventDefault();

    var btnTarget = $(this);
    var contTarget = $(".tab-cont > .active");

    btn.removeClass("active");
    btnTarget.addClass("active");

    cont.addClass("active");
    contTarget.removeClass("active");
  });

  $(".notice > li:first > a").click(function () {
    $("#modalLayer").addClass("active");
  });

  $(".modalBtn > a").click(function () {
    $("#modalLayer").removeClass("active");
  });
});
