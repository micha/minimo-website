var width = "100%";

if (argv.tabs && argv.tabs.length > 0)
  width = (100 / argv.tabs.length) + "%";

var colgr = "<colgroup>";
for (var i in argv.tabs)
  colgr += "<col width='"+width+"'/>";
colgr += "</colgroup>";

$("table").prepend(colgr);
  
$.each(argv.tabs, function() {
  var td   = $("<td class='tab'></td>");
  var a    = $("<a class='fatlink' href='"+this.href+"'>"+this.name+"</a>");

  td.append(a);

//  if (!serverside) {
//    div.addClass("clickable");
//    div.click(function() {
//      $(this).find("a").click();
//    });
//  }

  if (this.name == argv.selected)
    td.addClass("selected");

  $(".tabcontainer").append($.golf.prepare(td));

});
