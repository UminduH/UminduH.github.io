export function projectsFunctionality() {
  renderProjects();

  // Generate projects section
  function renderProjects() {
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
  }
}