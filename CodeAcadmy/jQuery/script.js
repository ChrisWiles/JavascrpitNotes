$(document).ready(function() {
  $("div").click(function() {
    $("div").fadeOut("fast");
  });
  $("div").hover(function() {
    $(this).addClass('red');
  });
});
