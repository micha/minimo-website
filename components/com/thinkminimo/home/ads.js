
if (!serverside) {
  $(".item").addClass("clickable");
  $(".item").click(function() {
    $(this).find("a.learnmore").click();
  });
}
