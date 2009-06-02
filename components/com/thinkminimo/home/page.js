function(postFile, mode) {
    
        // If you just want an excerpt of the article
	if (mode == "excerpt")  {
		$(".body").load(postFile + " .excerpt"); 
	}
        // if you want the laft pane content of the article
        else if(mode == "left")  {
        	$(".body").load(postFile + " .left");
        }
        // if you want the body of the article
	else if(mode == "fullBody")  {
		$(".body").load(postFile + " .boddy");
	}
	
  /*
  if (typeof argv.href === 'string')
    argv.href = [argv.href];

  if (argv.href[1]) {
    $("a.learnmore").empty();
    $("a.learnmore").append(argv.href[1]);
  }

  $("a.learnmore").attr("href", "#"+argv.href[0]);

  if (argv.fatlink) {
    $(".item").addClass("clickable");
    $(".item").click(function() {
      window.location = "#"+argv.href[0];
    });
  }
  */
}
