function(section) {
  var width, colgr, i, j, tr;

  width = (100 / section[0].length) + "%";

  colgr = $("<colgroup/>");
  for (i in section[0])
    colgr.append($("<col/>").attr("width", width));

  $("table").prepend(colgr);

  for (i in section) {
    tr  = $("<tr/>");
    for (j in section[i])
      tr.append($("<td/>").text(section[i][j]));
    $(".grid").append(tr);
  }
}
