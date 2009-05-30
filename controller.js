
$.golf.defaultRoute = "/home/";

$.golf.controller = (function() {

  var data = [];

  $.ajax({
    async: false,
    dataType: "json",
    error: function() { alert("error fetching json data") },
    success: function(json, status) { data = json },
    type: "GET",
    url: "?path=data.json"
  });
    
  var main = new Component.com.thinkminimo.home.main();

  return [

    { route:  "^/home/$",
      action: function(b, match) {
        b.empty().append(main);
        var text;
        for (var i in data) {
          if (data[i].section == "home" && !!data[i].exerpt) {
            text += data[i].exerpt;
          }
        }
        main.left(new Component.com.thinkminimo.home.ads());
        main.right(new Component.com.thinkminimo.home.page(text));
        main.load("home");
        return false;
      }
    },

    { route:  "^/([^/]+)/$",
      action: function(b, match) {
        b.empty().append(main);
        for (var i in data) {
          if (data[i].section == match[1]) {
            main.left(new Component.com.thinkminimo.home.grid(data[i].grid));
            main.right(new Component.com.thinkminimo.home.page(data[i].body));
          }
        }
        main.load(match[1]);
        return false;
      }
    }

  ];

})();


