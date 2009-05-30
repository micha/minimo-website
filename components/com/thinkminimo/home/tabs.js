function(tabs) {

  tabs = [ "home", "products", "services", "lab" ];

  this.load = function(tab) {
    $(".tabcontainer td.tab").each(function(k,v) {
      if (tabs[k] == tab)
        $(this).addClass("selected");
      else
        $(this).removeClass("selected");
    });
  };

  var width = "100%";

  if (tabs && tabs.length > 0)
    width = (100 / tabs.length) + "%";

  $("table").prepend(
    $("<colgroup/>").append(
      $.map(tabs, function(v,k) {
        return $("<col/>").attr("width", width).get();
      })
    )
  );

  $.each(tabs, function(k,v) {
    $(".tabcontainer").append(
      $("<td/>").addClass("tab").append(
        $("<a/>").addClass("fatlink").attr("href", "#/"+v+"/").text(v)
      )
    );
  });
}
