$(function(){
  $('.ui.sidebar').sidebar('attach events', '[data-toggle="sidebar"]');
  $('.ui.dropdown').dropdown();
  $('.ui.sticky').sticky();
  $('.ui.checkbox').checkbox();
});

$(function () {
  $("#topbar__button--toggleSidebar").on("click", function () {
    $("#page__pushable--wrapper").toggleClass("page__pushable--wrapper--pushed");
  });
});
