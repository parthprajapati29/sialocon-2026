const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll(".brochure-page, .site-footer");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.style.background =
            link.getAttribute("href") === `#${id}` ? "var(--gold)" : "";
          link.style.color =
            link.getAttribute("href") === `#${id}` ? "var(--navy)" : "";
        });
      }
    });
  },
  { rootMargin: "-40% 0px -40% 0px" }
);

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});
