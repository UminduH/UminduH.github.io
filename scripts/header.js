export function headerFunctionality() {
  toggleMobileMenuButton();
  window.addEventListener("resize", handleMobileMenuVisibility);
  window.addEventListener("scroll", updateActiveLink);

  // Toggle mobile nav menu button visibility
  function toggleMobileMenuButton() {
    const mobileMenuBtn = document.getElementById("js-mobile-menu-button");
    const mobileMenu = document.getElementById("js-mobile-nav-bar");

    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  }

  // Handle mobile nav menu visibility based on screen width
  function handleMobileMenuVisibility() {
    const mobileMenu = document.getElementById("js-mobile-nav-bar");

    const desktopBreakpoint = 768;

    if (window.innerWidth >= desktopBreakpoint) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }
  }

  // Update active link
  function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".js-nav-link");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }
}
