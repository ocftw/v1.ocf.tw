$(function () {
  $("#log .ui.dividing.header").on("click tap", function () {
    $(this).find(".icon").toggleClass("down").toggleClass("left");
    $(this).next(".items").slideToggle();
  });
});
