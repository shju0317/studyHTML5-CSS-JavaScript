//light box
$(".lightgallery").lightGallery();

//window popup
$(".windowPopup").click(function (e) {
  e.preventDefault();
  //window.open("파일명","팝업이름","옵션설정");
  //옵션: left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open(
    "sample_popup.html",
    "popup01",
    "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"
  );
});

//layer popup
$(".layer").click(function (e) {
  e.preventDefault();
  //$("#layer").css("display","block");
  //$("#layer").show();
  //$("#layer").fadeIn();
  $("#layer").slideDown();
});
$("#layer .close").click(function (e) {
  e.preventDefault();
  //$("#layer").css("display","none");
  //$("#layer").hide();
  //$("#layer").fadeOut();
  $("#layer").slideUp();
});

//tab
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();
  var $this = $(this);
  $this
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings("li")
    .removeClass("active")
    .find(">ul")
    .hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//banner
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});

// gallery
$(".gallery_img").slick({
  fade: true,
  pauseOnHover: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1,
});
$(".play").click(function () {
  $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function () {
  $(".gallery_img").slick("slickPause");
});
$(".prev").click(function () {
  $(".gallery_img").slick("slickPrev");
});
$(".next").click(function () {
  $(".gallery_img").slick("slickNext");
});

//버튼 클릭시 전체메뉴 보이기
$(".tit .btn").click(function (e) {
  e.preventDefault();
  //$("#cont_nav").css("display","block");
  //$("#cont_nav").show();
  //$("#cont_nav").fadeIn();
  //$("#cont_nav").slideDown();
  //$("#cont_nav").toggle();
  //$("#cont_nav").fadeToggle();
  $("#cont_nav").slideToggle(200);
  $(this).toggleClass("on");
});
