
var width = (100 / argv.section[0].length) + "%";

var colgr = "<colgroup>";
for (var i in argv.section[0])
  colgr += "<col width='"+width+"'/>";
colgr += "</colgroup>";

$("table").prepend(colgr);

for (var i in argv.section) {
  var row = argv.section[i];
  var tr  = $("<tr/>");
  for (var j in row) {
    var chr = row[j];
    var td  = $("<td/>");
    td.append(chr);
    tr.append(td);
  }
  $(".grid").append(tr);
}
