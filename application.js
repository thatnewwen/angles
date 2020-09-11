$(document).ready(function () {
  var a = Math.floor(Math.random() * 360 + 1);
  $("#number").val(a);
  $(".angles").css("transform", "rotate(" + a + "deg)");
  $(".angles.first-text").css("transform", "rotate(" + a * 1.5 + "deg)");
  $(".angles.second-text").css("transform", "rotate(-" + a + "deg)");

  $("#number").on("input", function () {
    console.log();
    if ($(this).val()) {
      $(".angles").css("transform", "rotate(" + $(this).val() + "deg)");
      $(".angles.first-text").css(
        "transform",
        "rotate(" + $(this).val() * 1.5 + "deg)"
      );
      $(".angles.second-text").css(
        "transform",
        "rotate(-" + $(this).val() + "deg)"
      );
    } else {
      $(".angles").css("transform", "rotate(0deg)");
    }
  });
});
