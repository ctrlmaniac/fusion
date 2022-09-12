import "@ctrlmaniac/vanilla-sidebar";

const sidebarRight = new VanillaSidebar({
  selector: ".sidebar-right",
  triggerer: ".sidebar-right-trigger",
  quitter: ".sidebar-quitter",
  align: "right",
});

const sidebarLeft = new VanillaSidebar({
  selector: ".sidebar-left",
  triggerer: ".sidebar-left-trigger",
  quitter: ".sidebar-quitter",
  align: "left",
});
