// Toggle mobile nav menu
const mobileMenuButton = document.getElementById('js-mobile-menu-button');
const mobileMenu = document.getElementById('js-mobile-nav-bar');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
});

// Handle mobile nav menu visibility based on screen width
function handleMenuVisibility() {
  const desktopBreakpoint = 768;

  if (window.innerWidth >= desktopBreakpoint) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  }
}

window.addEventListener('resize', handleMenuVisibility);