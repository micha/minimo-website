
$.golf.defaultRoute = "/home/";

$.golf.controller = (function() {

  var data = [];

  $.ajax({
    async: false,
    dataType: "json",
    error: function() { alert("error fetching json data :(") },
    success: function(json, status) { data = json },
    type: "GET",
    url: "?path=data.json"
  });
    
  alert(data);

  return [

    { route:  ".*",
      action: function(b, match) {
        b.empty().append(new Component.com.thinkminimo.home.main());
      }
    }

  ];

})();


