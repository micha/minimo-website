function(tabs) {

  this.load(selected) {
    $(".tabcontainer tr.tab").each(function(k,v) {
      if (this.name == selected)
        td.addClass("selected");
      else
        td
    });
  };

  var width = "100%";

  if (tabs && tabs.length > 0)
    width = (100 / tabs.length) + "%";

  var colgr = "<colgroup>";
  for (var i in tabs)
    colgr += "<col width='"+width+"'/>";
  colgr += "</colgroup>";

  $("table").prepend(colgr);
    
  $.each(tabs, function() {
    $(".tabcontainer").append(
      $("<td/>").addClass("tab").append(
        $("<a/>").addClass("fatlink").attr("href", this.href).text(this.name)
      )
    );
  });
}
