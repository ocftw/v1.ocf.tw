$(function () {
  $("#toggle-sidebar").on("click", function () {
    $("#wrapper-pushable").toggleClass("pushed");
  });

  $("#resources").on("click", function () {
    $("#resources").toggleClass("active");
  });
});
