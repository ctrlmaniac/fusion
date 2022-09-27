let accordions = document.getElementsByClassName("accordion");

for (let accordion of accordions) {
  let items = accordion.children;

  for (let item of items) {
    let header = item.firstElementChild;

    header?.addEventListener("click", (ev) => {
      let attribute = item.getAttribute("data-collapse");

      if (attribute === "collapse" || attribute === null) {
        // Close all opened items
        for (let otherItem of items) {
          if (otherItem.getAttribute("data-collapse") === "show") {
            otherItem.setAttribute("data-collapse", "collapse");
          }
        }

        item.setAttribute("data-collapse", "show");
      } else {
        item.setAttribute("data-collapse", "collapse");
      }
    });
  }
}
