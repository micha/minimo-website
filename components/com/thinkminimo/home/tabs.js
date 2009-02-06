
var width = "100%";

if (argv.tabs && argv.tabs.length > 0)
  width = (100 / argv.tabs.length) + "%";

var colgr = "<colgroup>";
for (var i in argv.tabs)
  colgr += "<col width='"+width+"'/>";
colgr += "</colgroup>";

$("table").prepend(colgr);
  
$.each(argv.tabs, function() {
  var td  = $("<td class='tab'></td>");
  var div = $("<div class='fatlink'></div>");
  var a   = $("<a href='"+this.href+"'>"+this.name+"</a>");

  td.append($.golf.prepare(div.append(a)));

  div.addClass("clickable");
  div.click(function() {
    $(this).find("a").click();
  });

  if (this.name == argv.selected)
    td.addClass("selected");

  $(".tabcontainer").append(td);

});
