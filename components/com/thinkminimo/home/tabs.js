
var width = "100%";

if (argv.tabs && argv.tabs.length > 0)
  width = (100 / argv.tabs.length) + "%";

var colgr = "<colgroup>";
for (var i in argv.tabs)
  colgr += "<col width='"+width+"'/>";
colgr += "</colgroup>";

$("table").prepend(colgr);
  
$.each(argv.tabs, function() {
  var tab = this;

  var a;
  var td;

  if (this.name == argv.selected) {
    a = this.name;
    td = jQuery("<td class='tab'>"+a+"</td>");
    td.addClass("selected");
  } else {
    a = "<a href='"+this.href+"'>"+this.name+"</a>";
    td = jQuery("<td class='tab'>"+a+"</td>");

    if (!serverside) {
      td.addClass("clickable");
      td.click(function() {
        $(this).find("a").click();
        return false;
      });
    }
  }

  $(".tabcontainer").append($.golf.prepare(td));
});
