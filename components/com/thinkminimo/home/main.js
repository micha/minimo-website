var tabs = [
  { name: "home",     href: "#home/",     comp: "tabs.home" },
  { name: "products", href: "#products/", comp: "tabs.products" },
  { name: "services", href: "#services/", comp: "tabs.services" },
  { name: "lab",      href: "#lab/",      comp: "tabs.lab" },
];

document.title = "minimo software | " + argv.tab;

$(".tabs_placeholder").golfAfter($.pkg+".tabs", 
  { tabs: tabs, selected: argv.tab });
$(".tabs_placeholder").remove();

$(".body_placeholder").golfAfter($.pkg+".page", 
  { tab: argv.tab, section: argv.section });
$(".body_placeholder").remove();

$(".footer_placeholder").golfAfter($.pkg+".footer");
$(".footer_placeholder").remove();
