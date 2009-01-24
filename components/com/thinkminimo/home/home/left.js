
var i, j, k, cols=0, rows=0;

for (i in argv.section) {
  k = 0;
  for (j in argv.section[i].reverse()) {
    if (argv.section[i][j].length > 0)
      k++;
    else
      break;
  }
  if (k > cols) cols = k;
  if (k == 0) break;
  rows++;
}

for (i in argv.section) {
  var td = $(".left_pane_section > table.section tr").eq(i).find("td:last");
  var line = argv.section[i];
  j = 0;
  for (j in line) {
    if (i >= rows || j >= cols) td.addClass("empty");
    td.text(line[j]);
    td = td.prev();
  }
  argv.section[i].reverse();
}
