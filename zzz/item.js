$(".title h2").text(argv.title);
$(".body").append(argv.body);

if (typeof argv.href === 'string')
  argv.href = [argv.href];

if (argv.href[1]) {
  $("a.learnmore").empty();
  $("a.learnmore").append(argv.href[1]);
}

$("a.learnmore").attr("href", "#"+argv.href[0]);
$.golf.prepare($(".item"));

if (argv.fatlink) {
  $(".item").addClass("clickable");
  $(".item").click(function() {
    window.location = "#"+argv.href[0];
  });
}
