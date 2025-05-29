import { aboutFunctionality } from "./about.js";
import { contactFunctionality } from "./contact.js";
import { headerFunctionality } from "./header.js";
import { projectsFunctionality } from "./projects.js";

document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScroll();
  setupBackToTopButton();

  headerFunctionality();
  aboutFunctionality();
  projectsFunctionality();
  contactFunctionality();
});

// Smooth navigation of sections
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const tartgetElement = document.querySelector(targetId);
      if (tartgetElement) {
        window.scrollTo({
          top: tartgetElement.offsetTop - 80,
          behavior: 'smooth'
        });

        const mobileMenu = document.getElementById('js-mobile-nav-bar')
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
}

// Back-to-top button functionality
function setupBackToTopButton() {
  const backToTopBtn = document.getElementById('js-back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}