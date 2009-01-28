
if (!argv.section) argv.section = "index";

$.golf.route(["left_pane/"+argv.tab+"/"+argv.section], $(".left_pane").eq(0));

$.golf.route(["right_pane/"+argv.tab+"/"+argv.section], $(".right_pane").eq(0));
