function(section) {
  var width, i, j, tr;

  width = (100 / section[0].length) + "%";

  $("table").prepend(
    $("<colgroup/>").append(
      $.map(section[0], function() {
        return $("<col/>").attr("width", width).get();
      })
    )
  );

  for (i in section) {
    tr  = $("<tr/>");
    for (j in section[i])
      tr.append($("<td/>").text(section[i][j]));
    $(".grid").append(tr);
  }
}
