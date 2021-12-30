jQuery(document).ready(function () {
  // imgSlide

  var cnt = 0;
  var index = $(".imgitem").length;
  var position = 0;

  setInterval(function () {
    if (cnt < index - 1) {
      cnt++;
    } else {
      cnt = 0;
    }
    position = cnt * -300 + "px";

    console.log(position);
    $(".imgitem").animate({ top: position }, 500);
  }, 3000);

  // nav menu

  var navMain = $(".mainMenu > li");
  var navSub = $(".subMenu");

  navMain.mouseover(function () {
    $(this).find(navSub).stop().slideDown(250);
  });
  navMain.mouseout(function () {
    $(this).find(navSub).stop().slideUp(100);
  });

  // tab menu

  var btnDiv = $(".tab-btn > div ");
  var contDiv = $(".tab-cont > div");

  btnDiv.click(function (e) {
    e.preventDefault();

    var btnTarget = $(this);
    var contTarget = $(".tab-cont > .active");

    btnDiv.removeClass("active");
    btnTarget.addClass("active");

    contDiv.addClass("active");
    contTarget.removeClass("active");
  });
});
