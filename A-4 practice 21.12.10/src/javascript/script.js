jQuery(document).ready(function () {
  //imgSlide

  var cnt = 0;
  var index = $(".imgitem").length;

  $(".imgitem").eq(cnt).fadeIn(0);
  setInterval(function () {
    if (cnt < index - 1) {
      cnt++;
    } else {
      cnt = 0;
    }

    before = cnt - 1;

    $(".imgitem").eq(before).fadeOut();
    $(".imgitem").eq(cnt).fadeIn();
  }, 3000);

  //navMenu

  var mainMenu = $(".mainMenu > ul > li");
  var subMenu = $(".subMenu");

  mainMenu.mouseover(function () {
    $(this).find(subMenu).stop().slideDown(250);
  });

  mainMenu.mouseout(function () {
    $(this).find(subMenu).stop().slideUp(250);
  });
});
