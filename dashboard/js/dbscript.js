function barsAction(){
  var nattr = $('.submenu').attr("style");
  if (nattr == "display: none;") {
    $(".submenu").css({
      display: "block"
    });
  $(".konten-dashboard").css({"width":"77.2%", "left":"311px"});
  }else{
    $(".submenu").css({
      display: "none"});
    $(".konten-dashboard").css({"width":"95.01%", "left":"68px"})
  }
  console.log(nattr);
}


$(document).ready(function(){

  $(window).on('resize',function(){
    var resize = $(this).width();
    if (resize <= 1200) {
      $(".submenu").css({
        display: "none"});
      $(".konten-dashboard").css({"width":"95.01%", "left":"68px"})
    }else {
      $(".submenu").css({
        display: "block"
      });
    $(".konten-dashboard").css({"width":"77.2%", "left":"311px"})
    }
  });

  $("[data-toggle=popover]")
    .popover({html:true, width:"75px", container:'body'});
});
