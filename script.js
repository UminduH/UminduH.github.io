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
const navLinks = document.querySelectorAll('.js-nav-link');

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


// Generate skills
const skills = [{
  name: 'HTML/CSS',
  proficiencyPercent: 95
}, {
  name: 'JavaScript',
  proficiencyPercent: 92
}, {
  name: 'Java',
  proficiencyPercent: 82
}, {
  name: 'PHP',
  proficiencyPercent: 85
}, {
  name: 'SQL (MySQL)',
  proficiencyPercent: 88
}, {
  name: 'Flutter (Dart)',
  proficiencyPercent: 90
}, {
  name: 'UI/UX Design',
  proficiencyPercent: 75
}, {
  name: 'Git/GitHub',
  proficiencyPercent: 78
}];

let skillsHTML = '';

skills.forEach((skill) => {
  skillsHTML += `
    <div class="skill-item">
      <div class="skill-label">
        <span>${skill.name}</span>
        <span>${skill.proficiencyPercent}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.proficiencyPercent}%;"></div>
      </div>
    </div>
  `;
});

document.querySelector('.js-skills-grid').innerHTML = skillsHTML;


// Generate projects
const projects = [{
  imagePath: './assets/images/projects/sample-project.jpeg',
  name: 'Project 01',
  description: 'A sample description for project 01 to test the design and layouts and how it looks.',
  tags: [{
    color:'blue',
    technology: 'Tech 1'
  }, {
    color:'green',
    technology: 'Tech 2'
  }, {
    color:'purple',
    technology: 'Tech 3'
  }, {
    color:'yellow',
    technology: 'Tech 4'
  }],
  link: '#'

}, {
  imagePath: './assets/images/projects/sample-project.jpeg',
  name: 'Project 02',
  description: 'A sample description for project 02 to test the design and layouts and how it looks.',
  tags: [{
    color:'blue',
    technology: 'Tech 1'
  }, {
    color:'red',
    technology: 'Tech 2'
  }, {
    color:'indigo',
    technology: 'Tech 3'
  }, {
    color:'green',
    technology: 'Tech 4'
  }],
  link: '#'

}, {
  imagePath: './assets/images/projects/sample-project.jpeg',
  name: 'Project 03',
  description: 'A sample description for project 03 to test the design and layouts and how it looks.',
  tags: [{
    color:'purple',
    technology: 'Tech 1'
  }, {
    color:'red',
    technology: 'Tech 2'
  }, {
    color:'yellow',
    technology: 'Tech 3'
  }, {
    color:'blue',
    technology: 'Tech 4'
  }],
  link: '#'

}, {
  imagePath: './assets/images/projects/sample-project.jpeg',
  name: 'Project 04',
  description: 'A sample description for project 04 to test the design and layouts and how it looks.',
  tags: [{
    color:'blue',
    technology: 'Tech 1'
  }, {
    color:'green',
    technology: 'Tech 2'
  }, {
    color:'yellow',
    technology: 'Tech 3'
  }, {
    color:'red',
    technology: 'Tech 4'
  }],
  link: '#'

}, {
  imagePath: './assets/images/projects/sample-project.jpeg',
  name: 'Project 05',
  description: 'A sample description for project 05 to test the design and layouts and how it looks.',
  tags: [{
    color:'blue',
    technology: 'Tech 1'
  }, {
    color:'green',
    technology: 'Tech 2'
  }, {
    color:'purple',
    technology: 'Tech 3'
  }, {
    color:'yellow',
    technology: 'Tech 4'
  }],
  link: '#'

}, {
  imagePath: './assets/images/projects/sample-project.jpeg',
  name: 'Project 06',
  description: 'A sample description for project 06 to test the design and layouts and how it looks.',
  tags: [{
    color:'purple',
    technology: 'Tech 1'
  }, {
    color:'blue',
    technology: 'Tech 2'
  }, {
    color:'red',
    technology: 'Tech 3'
  }, {
    color:'green',
    technology: 'Tech 4'
  }],
  link: '#'
}];

let projectsHTML = '';

projects.forEach((project) => {
  projectsHTML += `
    <div class="project-card">
      <div class="project-image-container">
        <img src="${project.imagePath}" alt="Project Image" class="project-image">
      </div>

      <div class="project-content">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-description">
          ${project.description}
        </p>

        <div class="project-tags">
          ${generateTagsForProject(project.tags)}
        </div>

        <a href="${project.link}" class="project-link">
          View Project &#129138;
        </a>
      </div>
    </div>
  `;
});

document.querySelector('.js-projects-grid').innerHTML = projectsHTML;

function generateTagsForProject(tags) {
  let tagsHTML = '';

  tags.forEach((tag) => {
    tagsHTML += `
      <span class="tag tag-${tag.color}">${tag.technology}</span>
    `;
  });

  return tagsHTML;
}


// Back to top button functionality
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
