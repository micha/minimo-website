
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
	var textSource = $.golf.res.content.home;
        var ex = [];
        for (var i in textSource) {
        ex.push(new Component.com.thinkminimo.home.page(textSource[i], "excerpt"));
        }
	main.right(ex);
        main.left(new Component.com.thinkminimo.home.ads());
        main.load("home");
        return false;
      }
    },

    { route:  "^/home\/([^/]+)/$",
      action: function(b, match) {
        b.empty().append(main);
        textSource = $.golf.res.content.home[match[1] + ".html"];
        main.right(new Component.com.thinkminimo.home.page(textSource, "fullBody"));
        main.left(new Component.com.thinkminimo.home.page(textSource, "left"));
        main.load("home");
        return false;
      }
    },

    { route:  "^/([^/]+)/$",
      action: function(b, match) {
        b.empty().append(main);
        alert(match[1]);
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


