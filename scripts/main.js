import { aboutFunctionality } from "./about.js";
import { headerFunctionality } from "./header.js";
import { newsletterFunctionality } from "./newsletter.js";
import { projectsFunctionality } from "./projects.js";

document.addEventListener("DOMContentLoaded", async () => {
  await renderPageSections();
  setupSmoothScroll();
  setupBackToTopButton();
});

// Load all the sections and display them accordingly
async function renderPageSections() {
  const sections = [
    { name: "header", fn: headerFunctionality },
    { name: "hero" },
    { name: "about", fn: aboutFunctionality },
    { name: "projects", fn: projectsFunctionality },
    { name: "contact" },
    { name: "newsletter", fn: newsletterFunctionality },
    { name: "footer" },
  ];

  await Promise.all(sections.map((section) => fetchSectionHTML(section.name)));

  sections.forEach((section) => {
    if (section.fn) section.fn();
  });
}

// Fetch HTML for each section
async function fetchSectionHTML(section) {
  const response = await fetch(`./sections/${section}.html`);
  const html = await response.text();
  const container = document.getElementById(`js-${section}-placeholder`);
  if (container) container.innerHTML = html;
}

// Smooth navigation of sections
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const tartgetElement = document.querySelector(targetId);
      if (tartgetElement) {
        window.scrollTo({
          top: tartgetElement.offsetTop - 80,
          behavior: "smooth",
        });

        const mobileMenu = document.getElementById("js-mobile-nav-bar");
        if (mobileMenu && mobileMenu.classList.contains("show")) {
          mobileMenu.classList.remove("show");
        }
      }
    });
  });
}

// Back-to-top button functionality
function setupBackToTopButton() {
  const backToTopBtn = document.getElementById("js-back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.visibility = "visible";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.visibility = "hidden";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
