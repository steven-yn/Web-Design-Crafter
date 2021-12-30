jQuery(document).ready(function () {
  // imgSlide

  var cnt = 0;
  var index = $(".imgitem").length;

  $(".imgitem").eq(cnt).fadeIn();
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

  // nav menu

  var subMenu = $(".subMenu");
  var mainLi = $(".mainMenu");

  mainLi.mouseover(function () {
    $(this).find(subMenu).stop().slideDown();
  });
  mainLi.mouseout(function () {
    $(this).find(subMenu).stop().slideUp();
  });
});
