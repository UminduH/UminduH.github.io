export function projectsFunctionality() {
  renderProjects();
  handleProjectsFilter();

  // Generate projects section
  function renderProjects() {
    const projects = [
      {
        imagePath: "./assets/images/projects/go-surf.png",
        name: "GO-SURF.LK – Online Surfboard Renting System",
        description:
          "A surfboard rental platform with user reviews, board filtering, inquiry handling, and a full-featured admin panel for managing rentals and operations.",
        tags: [
          { color: "blue", technology: "PHP" },
          { color: "green", technology: "MySQL" },
          { color: "purple", technology: "JavaScript" },
          { color: "yellow", technology: "HTML/CSS" },
        ],
        link: "https://github.com/ArvinFox/Go_Surf_Website",
        isGroupProject: true,
        categories: ["web"],
      },
      {
        imagePath: "./assets/images/projects/silverknight-cinema.png",
        name: "SilverKnight Cinema – Online Movie Booking System",
        description:
          "A cinema ticketing system with movie scheduling, bookings, promotions, and a comprehensive admin panel with PayPal integration.",
        tags: [
          { color: "blue", technology: "Java" },
          { color: "red", technology: "SQL Server" },
          { color: "indigo", technology: "JSP/Servlets" },
          { color: "green", technology: "JavaScript" },
          { color: "pink", technology: "HTML/CSS" },
          { color: "yellow", technology: "PayPal API" },
        ],
        link: "https://github.com/ArvinFox/SilverKnightCinema---Movie-Ticket-Booking-Website",
        isGroupProject: true,
        categories: ["web"],
      },
      {
        imagePath: "./assets/images/projects/lifeblood.png",
        name: "LifeBlood – Blood Donation Management System",
        description:
          "A cross-platform blood donation app with donor verification, medical uploads, donation history, and admin event management features.",
        tags: [
          { color: "purple", technology: "Flutter" },
          { color: "red", technology: "Firebase" },
          { color: "blue", technology: "Supabase" },
          { color: "green", technology: "Twilio" },
          { color: "pink", technology: "Google Maps" },
        ],
        link: "https://github.com/ArvinFox/LifeBlood-Blood-Donation-App",
        isGroupProject: true,
        categories: ["mobile", "desktop"],
      },
      {
        imagePath: "./assets/images/projects/shuttle-master.png",
        name: "ShuttleMaster – NSBM Transportation App",
        description:
          "A shuttle booking app with role-based views, OTP login, real-time trip info, and booking management for students and drivers.",
        tags: [
          { color: "blue", technology: "Flutter" },
          { color: "green", technology: "Firebase" },
          { color: "yellow", technology: "Twilio" },
          { color: "red", technology: "Stripe" },
          { color: "purple", technology: "Node.js" },
        ],
        link: "https://github.com/ArvinFox/ShuttleMaster-Bus-Ticket-Booking-App",
        isGroupProject: true,
        categories: ["mobile"],
      },
      {
        imagePath: "./assets/images/projects/movie-finder.png",
        name: "Movie Finder – Online Movie Searching System",
        description:
          "A responsive web app that allows users to search and explore movies using the TMDB API, complete with real-time search, detailed views, pagination, and a clean user interface.",
        tags: [
          { color: "purple", technology: "Angular" },
          { color: "pink", technology: "TypeScript" },
          { color: "green", technology: "TMDB API" },
          { color: "blue", technology: "HTML/CSS" },
        ],
        link: "https://github.com/UminduH/Movie-Finder",
        isGroupProject: false,
        categories: ["web"],
      },
      {
        imagePath: "./assets/images/projects/smart-sellpoint.png",
        name: "Smart SellPoint – Retail POS System",
        description:
          "A web-based POS system for retail shops with billing, inventory tracking, staff login, and product management.",
        tags: [
          { color: "pink", technology: "Java" },
          { color: "indigo", technology: "SQL Server" },
          { color: "green", technology: "JSP/Servlets" },
          { color: "red", technology: "JavaScript" },
          { color: "yellow", technology: "HTML/CSS" },
        ],
        link: "https://github.com/UminduH/Smart-SellPoint",
        categories: ["web"],
      },
      {
        imagePath: "./assets/images/projects/air-metrix-aqi.png",
        name: "AirMetrix AQI – Web-Based Air Quality Monitor",
        description:
          "A web app that tracks and compares real-time air quality data with personalized dashboards and historical analytics.",
        tags: [
          { color: "purple", technology: "ASP.NET Core" },
          { color: "blue", technology: "C#" },
          { color: "red", technology: "JavaScript" },
          { color: "yellow", technology: "HTML/CSS" },
          { color: "green", technology: "SQL Server" },
          { color: "pink", technology: "Chart.js" },
          { color: "indigo", technology: "Leaflet" },
        ],
        link: "https://github.com/UminduH/AirMetrix-AQI",
        categories: ["web"],
      },
      {
        imagePath: "./assets/images/projects/bookwise-automart.png",
        name: "BookWise AutoMart – Bookstore Checkout System",
        description:
          "A self-checkout platform for bookstores featuring searching, filtering, feedback, and admin tools for inventory, offers, and user management.",
        tags: [
          { color: "indigo", technology: "C#" },
          { color: "green", technology: "Windows Forms" },
          { color: "red", technology: "SQL Server" },
        ],
        link: "https://github.com/ArvinFox/BookWise-AutoMart",
        isGroupProject: true,
        categories: ["desktop"],
      },
    ];

    let projectsHTML = "";

    projects.forEach((project) => {
      projectsHTML += `
        <div class="project-card js-project-card" data-categories="${
          project.categories
        }">
          <div class="project-image-container">
            <img src="${
              project.imagePath
            }" alt="Project Image" class="project-image">
          </div>

          <div class="project-content">
            <h3 class="project-name">${project.name}</h3>
            ${
              project.isGroupProject
                ? `<span class="project-label group">Group Project</span>`
                : ""
            }
            <p class="project-description">
              ${project.description}
            </p>

            <div class="project-tags">
              ${generateTagsForProject(project.tags)}
            </div>

            <a href="${project.link}" class="project-link" target="_blank">
              View Project 🡲
            </a>
          </div>
        </div>
      `;
    });

    document.querySelector(".js-projects-grid").innerHTML = projectsHTML;

    function generateTagsForProject(tags) {
      let tagsHTML = "";

      tags.forEach((tag) => {
        tagsHTML += `
          <span class="tag tag-${tag.color}">${tag.technology}</span>
        `;
      });

      return tagsHTML;
    }
  }

  // Handle projects filtering functionality
  function handleProjectsFilter() {
    const filterButtons = document.querySelectorAll(".js-filter-btn");
    const projectCards = document.querySelectorAll(".js-project-card");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach((card) => {
          if (
            filter === "all" ||
            card.getAttribute("data-categories").includes(filter)
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
}
