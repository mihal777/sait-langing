
// function for scrool venu
$(document).ready(function () {
  $("#scroolling").removeClass("default");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#scroolling").addClass("default").fadeIn('fast');
    } else {
      $("#scroolling").removeClass("default").fadeIn('fast');
    };
  });
});


// function for burger menu
(function ($) {
  $(function() {
    $('.icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu-open');
    });
  });
})(jQuery);