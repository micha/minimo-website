
var width = "100%";

if (argv.tabs && argv.tabs.length > 0)
  width = (100 / argv.tabs.length) + "%";

var colgr = "<colgroup>";
for (var i in argv.tabs)
  colgr += "<col width='"+width+"'/>";
colgr += "</colgroup>";

$("table").prepend(colgr);
  
$.each(argv.tabs, function() {
  var a   = "<a href='"+this.href+"'>"+this.name+"</a>";
  var td  = jQuery("<td class='tab'>"+a+"</td>");

  if (this.name == argv.selected)
    td.addClass("selected");

  if (!serverside) {
    td.addClass("clickable");
    td.click(function() {
      $(this).find("a").click();
    });
  }

  $(".tabcontainer").append($.golf.prepare(td));
});
