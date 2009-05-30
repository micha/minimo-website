function() {

  this.load = function(tab) {
    document.title = "minimo software | " + tab;
    tabs.load(tab);
  };

  this.left = function(cpn) {
    $(".left_pane").empty().append(cpn);
  };

  this.right = function(cpn) {
    $(".right_pane").empty().append(cpn);
  };

  var tabs = new Component.com.thinkminimo.home.tabs();

  $(".tabs_container").append(tabs);
}
