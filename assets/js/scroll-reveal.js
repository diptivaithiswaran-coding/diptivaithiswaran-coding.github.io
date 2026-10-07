(() => {
  const main = document.querySelector("#main-content");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Content stays visible without JavaScript or IntersectionObserver support.
  if (!main || reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const sections = [
    ...Array.from(main.children).filter(
      (element) => !element.classList.contains("contact-options")
    ),
    ...main.querySelectorAll(".contact-card"),
  ];
  const pending = new Set(sections);
  const reveal = (element) => {
    element.classList.remove("is-pending");
    pending.delete(element);
    observer.unobserve(element);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -24px 0px" }
  );

  sections.forEach((element) => {
    element.classList.add("scroll-reveal", "is-pending");
    observer.observe(element);
  });

  // Keyboard navigation must never leave a focused link invisible.
  main.addEventListener("focusin", (event) => {
    const section = event.target.closest(".scroll-reveal");
    if (section && pending.has(section)) reveal(section);
  });

  // Stop immediately if the visitor enables reduced motion during the visit.
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      pending.forEach(reveal);
      observer.disconnect();
    }
  });
})();
