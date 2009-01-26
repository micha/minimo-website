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

  var home_right = [
    {
      title:    "computed",
      body:     "<p>Lorem ipsum dolor sit amet, consectetur adipisicing "+
                "elit, sed do eiusmod tempor incididunt ut labore et "+
                "dolore magna aliqua. Ut enim ad minim veniam, quis "+
                "nostrud exercitation ullamco laboris nisi ut aliquip "+
                "ex ea commodo consequat. Duis aute irure dolor in "+
                "reprehenderit in voluptate velit esse cillum dolore "+
                "eu fugiat nulla pariatur. Excepteur sint occaecat "+
                "cupidatat non proident, sunt in culpa qui officia "+
                "deserunt mollit anim id est.</p>",
      href:     "home/computed/",
    },
    {
      title:    "responsive",
      body:     "<p>Neque porro quisquam est, qui dolorem ipsum quia "+
                "dolor sit amet, consectetur, adipisci velit, sed "+
                "quia non numquam eius modi tempora incidunt ut "+
                "labore et dolore magnam aliquam quaerat voluptatem. "+
                "Ut enim ad minima veniam, quis nostrum exercitationem "+
                "ullam corporis suscipit laboriosam, nisi ut aliquid "+
                "ex ea commodi consequatur? Quis autem vel eum iure "+
                "reprehenderit qui in ea voluptate velit esse quam "+
                "nihil molestiae consequatur, vel illum qui dolorem "+
                "eum fugiat quo voluptas nulla pariatur?</p>",
      href:     "home/responsive/",
    },
    {
      title:    "modular",
      body:     "<p>At vero eos et accusamus et iusto odio dignissimos "+
                "ducimus qui blanditiis praesentium voluptatum "+
                "deleniti atque corrupti quos dolores et quas molestias "+
                "excepturi sint occaecati cupiditate non provident, "+
                "similique sunt in culpa qui officia deserunt mollitia "+
                "animi, id est laborum et dolorum fuga. Et harum "+
                "quidem rerum facilis est et expedita distinctio. "+
                "Nam libero tempore, cum soluta nobis est eligendi "+
                "optio cumque nihil impedit quo minus id quod maxime "+
                "placeat facere possimus, omnis voluptas assumenda "+
                "est, omnis dolor repellendus.</p>",
      href:     "home/modular/",
    },
  ];

  return {
    'left_pane/home': function(argv, b, match) {
      if (b.get()[0] == document.body)
        throw "action is not directly accessible";
      b.golf(pkg+".ads");
    },

    'right_pane/home': function (argv, b, match) {
      if (b.get()[0] == document.body)
        throw "action is not directly accessible";
      for (var i in home_right)
        b.golf(pkg+".item", home_right[i]);
    },

    'left_pane/([^/]+)': function(argv, b, match) {
      if (b.get()[0] == document.body)
        throw "action is not directly accessible";
      b.golf(pkg+".home.left", { section: sections[match[1]] });
    },

    'right_pane/([^/]+)': function(argv, b, match) {
      if (b.get()[0] == document.body)
        throw "action is not directly accessible";
      b.golf(pkg+".home.right", { section: match[1] });
    },

    defaultAction: function(argv, b, match) {
      b.golf(pkg+".main", { tabs: tabs, tab: match[0], section: argv[0] });
    },
  };
})();
