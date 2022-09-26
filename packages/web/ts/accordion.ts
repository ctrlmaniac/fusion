let accordionHeaders = document.getElementsByClassName("accordion-header");

for (let header of accordionHeaders) {
  let accordion = header.parentElement?.parentElement as HTMLElement;
  let bodies = accordion?.getElementsByClassName("accordion-body");

  header.addEventListener("click", (ev) => {
    let target = ev.target as HTMLElement;
    let body = target.nextElementSibling as HTMLElement;
    let status = body.getAttribute("data-collapse");

    if (status === "collapse") {
      // Close all current opened bodies
      for (let otherBody of bodies) {
        otherBody.setAttribute("data-collapse", "collapse");
      }

      // Deactivate other active headers
      for (let otherHeader of accordionHeaders) {
        otherHeader.removeAttribute("data-active");
      }

      body.setAttribute("data-collapse", "show");
      target.setAttribute("data-active", "active");
    } else {
      body.setAttribute("data-collapse", "collapse");
      header.removeAttribute("data-active");
    }
  });
}
