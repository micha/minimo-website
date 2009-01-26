
$(".title h2").text(argv.title);
$(".body").append(argv.body);
$(".learnmore").attr("href", argv.href);

if (!serverside) {
  $(".item").addClass("clickable");
  $(".item").click(function() {
    $(this).find("a.learnmore").click();
    return false;
  });
}
