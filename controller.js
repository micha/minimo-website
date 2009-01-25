jQuery.golf.controllers = (function() {
  var pkg = "com.thinkminimo.home";
  
  var tabs = [
    { name: "home",     href: "#home/"},
    { name: "products", href: "#products/"},
    { name: "services", href: "#services/"},
    { name: "lab",      href: "#lab/"},
  ];

  var sections = {
    products:   [ ["", "p","r","o"], ["", "", "d","u"], ["", "c","t","s"] ],
    services:   [ ["", "s","e","r"], ["", "", "v","i"], ["", "c","e","s"] ],
    lab:        [ ["", "l","a","b"], ["", "", "", "" ], ["", "", "", "" ] ],
    computed:   [ ["", "c","o","m"], ["", "" ,"p","u"], ["", "t","e","d"] ],
    responsive: [ ["", "", "r","e"], ["s","p","o","n"], ["s","i","v","e"] ],
    modular:    [ ["", "m","o","d"], ["" ,"" ,"" ,"u"], ["" ,"l","a","r"] ],
  };

  return {
    'left_pane/home': function(argv, b, match) {
      if (b.get()[0] === document.body)
        throw "action is not directly accessible";
      b.golf(pkg+".ads");
    },

    'left_pane/([^/]+)': function(argv, b, match) {
      if (b.get()[0] === document.body)
        throw "action is not directly accessible";
      b.golf(pkg+".home.left", { section: sections[match[1]] });
    },

    'right_pane/([^/]+)': function(argv, b, match) {
      if (b.get()[0] === document.body)
        throw "action is not directly accessible";
      b.golf(pkg+".home.right", { section: match[1] });
    },

    defaultAction: function(argv, b, match) {
      b.golf(pkg+".main", { tabs: tabs, tab: match[0], section: argv[0] });
    },
  };
})();
