export function aboutFunctionality() {
  renderSkills();
  downloadResume();

  // Generate skills section
  function renderSkills() {
    const skills = [
      { name: 'HTML/CSS', proficiencyPercent: 95 },
      { name: 'JavaScript', proficiencyPercent: 92 },
      { name: 'Java', proficiencyPercent: 82 },
      { name: 'PHP', proficiencyPercent: 85 },
      { name: 'SQL (MySQL)', proficiencyPercent: 88 },
      { name: 'Flutter (Dart)', proficiencyPercent: 90 },
      { name: 'UI/UX Design', proficiencyPercent: 75 },
      { name: 'Git/GitHub', proficiencyPercent: 78 }
    ];

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
  }

  // Download resume functionality
  function downloadResume() {
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

    downloadPdf.addEventListener('click', () => downloadFile('pdf'));
    downloadDocx.addEventListener('click', () => downloadFile('docx'));

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

      link.href = `./assets/documents/${fileName}`;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      closeModal();
    }
  }
}