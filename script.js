// Portfolio interactions are local and progressively enhanced; content stays visible if JS fails.
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const nav = document.querySelector("#main-nav");
const menuToggle = document.querySelector(".menu-toggle");
const progressBar = document.querySelector(".scroll-progress span");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const revealNodes = [...document.querySelectorAll(
  ".hero-copy, .hero-visual, .project-card, .skill-group, .build-copy, .process-step, .leadership-photo, .timeline-item, .committee-card, .education-card, .interest-row, .resume-card, .contact-item"
)];

function setupReveals() {
  if (!("IntersectionObserver" in window) || motionQuery.matches) return;
  document.documentElement.classList.add("js-motion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

  revealNodes.forEach((node, index) => {
    node.classList.add("reveal");
    node.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    observer.observe(node);
  });
}

function updateScrollUI() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;

  const sectionIds = ["home", "work", "skills", "leadership", "education", "resumes"];
  let activeId = "home";
  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= 145) activeId = id;
  }
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
}

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menuToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  nav?.classList.toggle("mobile-open", !open);
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("mobile-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  });
});

const heroVisual = document.querySelector(".hero-visual");
const heroPortrait = document.querySelector(".hero-portrait");
if (heroVisual && heroPortrait && !motionQuery.matches) {
  heroVisual.addEventListener("pointermove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroPortrait.style.transform = `scale(1.025) translate(${x * -9}px, ${y * -9}px)`;
  });
  heroVisual.addEventListener("pointerleave", () => {
    heroPortrait.style.transform = "";
  });
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);
setupReveals();
updateScrollUI();
