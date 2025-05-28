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


// Smooth navigation of sections
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

// Update active link in header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});


// Download resume functionality
const downloadBtn = document.getElementById('js-download-resume-btn');
const resumeModal = document.getElementById('js-resume-modal');
const closeModalIcon = document.getElementById('js-close-modal');
const downloadPdf = document.getElementById('js-download-pdf');
const downloadDocx = document.getElementById('js-download-docx');

downloadBtn.addEventListener('click', openModal);
closeModalIcon.addEventListener('click', closeModal);

resumeModal.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    closeModal();
  }
});

function openModal() {
  resumeModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  resumeModal.classList.add('hidden');
  document.body.style.overflow = '';
}

function downloadFile(format) {
  const fileName = `umindu-haputhanthri-resume.${format}`;
  const link = document.createElement('a');

  console.log(fileName);

  link.href = `./assets/documents/${fileName}`;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  closeModal();
}

downloadPdf.addEventListener('click', () => downloadFile('pdf'));
downloadDocx.addEventListener('click', () => downloadFile('docx'));