
if (!serverside) {
  $(".item").addClass("clickable");
  $(".item").click(function() {
    $(this).find("a.more_ads").click();
    return false;
  });
}
