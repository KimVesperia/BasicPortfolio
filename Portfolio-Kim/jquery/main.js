$(document).ready(function() {

  $("#slideshow > div:gt(0)").fadeOut(0);

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeIn(1000)
      .next()
      .fadeOut(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);

  /*$("#smallImg1").click(function(){
    $(".image-left1").delay(1000).fadeIn(1000);$(".desc1").delay(1000).fadeIn(1000);
    $(".image-left2").fadeOut(1000);$(".desc2").fadeOut(1000);
    $(".image-left3").fadeOut(1000);$(".desc3").fadeOut(1000);
    $(".image-left4").fadeOut(1000);$(".desc4").fadeOut(1000);
  });

  $("#smallImg2").click(function(){
    $(".image-left2").delay(1000).fadeIn(1000);$(".desc2").delay(1000).fadeIn(1000);
    $(".image-left1").fadeOut(1000);$(".desc1").fadeOut(1000);
    $(".image-left3").fadeOut(1000);$(".desc3").fadeOut(1000);
    $(".image-left4").fadeOut(1000);$(".desc4").fadeOut(1000);
  });

  $("#smallImg3").click(function(){
    $(".image-left3").delay(1000).fadeIn(1000);$(".desc3").delay(1000).fadeIn(1000);
    $(".image-left1").fadeOut(1000);$(".desc1").fadeOut(1000);
    $(".image-left2").fadeOut(1000);$(".desc2").fadeOut(1000);
    $(".image-left4").fadeOut(1000);$(".desc4").fadeOut(1000);
  });

  $("#smallImg4").click(function(){
    $(".image-left4").delay(1000).fadeIn(1000);$(".desc4").delay(1000).fadeIn(1000);
    $(".image-left1").fadeOut(1000);$(".desc1").fadeOut(1000);
    $(".image-left2").fadeOut(1000);$(".desc2").fadeOut(1000);
    $(".image-left3").fadeOut(1000);$(".desc3").fadeOut(1000);
  });
*/

  $(".smallscreen1").click(function(){
     $(".fullscreen1").fadeIn(1000).css("display","inherit");
  });

  $(".smallscreen2").click(function(){
     $(".fullscreen2").fadeIn(1000).css("display","inherit");
  });

  $(".smallscreen3").click(function(){
     $(".fullscreen3").fadeIn(1000).css("display","inherit");
  });

  $(".smallscreen4").click(function(){
     $(".fullscreen4").fadeIn(1000).css("display","inherit");
  });

  $(".fullscreen1").click(function(){
     $(".fullscreen1").fadeOut(1000);
  });

  $(".fullscreen2").click(function(){
     $(".fullscreen2").fadeOut(1000);
  });

  $(".fullscreen3").click(function(){
     $(".fullscreen3").fadeOut(1000);
  });

  $(".fullscreen4").click(function(){
     $(".fullscreen4").fadeOut(1000);
  });


//Footer
  var today = new Date;
  var year = today.getFullYear();
  $(".footer").append("<p>Copyright &copy; "+ year + " Kim's Portfolio</p>");

});
