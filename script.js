function checkLocalStorageUsage() {
  let total = 0;
  for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
          total += ((localStorage[key].length * 2) / 1024); // Convert to KB (each character is 2 bytes)
      }
  }
  
  const maxStorageKB = 5120; // 5MB in KB
  const usedPercentage = ((total / maxStorageKB) * 100).toFixed(2);

  console.log(`🔹 Used: ${total.toFixed(2)} KB / 5120 KB (${usedPercentage}%)`);
  console.log(`📌 Remaining: ${(maxStorageKB - total).toFixed(2)} KB`);
  
  if (total >= maxStorageKB) {
      console.warn("⚠️ You've hit the 5MB localStorage limit!");
  }
}

// Run the function to check localStorage usage
checkLocalStorageUsage();

const languageMapping = {
  html: [ "html-introduction", "html-structure", "html-elements", "html-attributes", "html-headings", "html-paragraphs", "html-formatting", "html-comments", "html-links", "html-images", "html-lists", "html-tables", "html-forms", "html-divs", "html-classes", "html-ids", "html-iframe", "html-css", "html-javascript", "html-file-paths", "html-head"],
  css: [ "css-introduction", "css-syntax", "css-selectors", "css-in-html", "css-adv-selectors", "css-colors", "css-backgrounds", "css-borders", "css-margins", "css-padding", "css-box-model", "css-width-height", "css-units", "css-fonts", "css-text", "css-links", "css-lists", "css-position", "css-display", "css-float-clear", "css-overflow", "css-flexbox", "css-grid", "css-flex", "css-media-queries", "css-responsive", "css-transitions", "css-animations", "css-transform", "css-shadows", "css-variables", "css-z-index", "css-clipping", "css-masking", "css-filters", "css-shapes"],
  javascript: [ "js-introduction", "js-setting-up", "js-syntax", "js-output", "js-comments", "js-variables", "js-let-var", "js-const", "js-data-types", "js-type-conversion", "js-arithmetic-operators", "js-assignment-operators", "js-comparison-operators", "js-logical-operators", "js-bitwise-operators", "js-if-else", "js-switch", "js-ternary-operator", "js-loops-introduction", "js-for-loops", "js-while-loops", "js-do-while-loops", "js-break-continue", "js-methods-basics", "js-creating-modifying-arrays.html","js-introduction-objects", "js-creating-objects", "js-accessing-properties", "js-modifying-properties", "js-object-methods", "js-object-constructors", "js-object-prototypes", "js-classes-inheritance", "js-introduction-arrays", "js-creating-modifying-arrays", "js-array-methods-advanced", "js-slicing-splicing-arrays", "js-sorting-arrays", "js-searching-arrays", "js-array-methods-basic", "js-iterating-arrays", "js-sorting-searching-arrays", "js-creating-modifying-arrays" ,"js-multidimensional-arrays", "js-this-keyword", "js-es6-modules", "js-destructuring", "js-spread-rest-operators", "js-default-parameters", "js-template-literals", "js-error-handling", "js-strict-mode", "js-json", "js-regex", "js-date-time", "js-classes", "js-inheritance"],
};

const masteryMapping = {
  html: [ "htmlmastery"],
  css: [ "cssmastery"],
  javascript: [ "jsmastery"],
};

(function() {
  let storedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
})();

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) {
      console.error("❌ Theme toggle button not found!");
      return;
  }

  let currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeToggle.innerText = currentTheme === "dark" ? "🌙" : "☀️";

  themeToggle.addEventListener("click", () => {
      let newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.innerText = newTheme === "dark" ? "🌙" : "☀️";
      console.log(`✅ Theme switched to: ${newTheme}`);
  });
}

function loadHeader() {
  fetch("/header.html")
      .then(response => {
          if (!response.ok) throw new Error(`Failed to fetch header: ${response.statusText}`);
          return response.text();
      })
      .then(html => {
          const container = document.getElementById("header-container");
          if (!container) {
              console.error("❌ Error: #header-container not found in the DOM.");
              return;
          }
          container.innerHTML = html;
          setTimeout(setupThemeToggle, 100);
      })
      .catch(error => console.error("❌ Error loading header:", error));
}

// Check if the required elements exist on the page
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-c3293482jdfsdfsdfss');
  const codeBlocks = document.querySelectorAll('.code-block-c3293482jdfsdfsdfss');

  if (tabs.length > 0 && codeBlocks.length > 0) {
      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              // Remove 'active' class from all tabs and blocks
              tabs.forEach(t => t.classList.remove('active'));
              codeBlocks.forEach(block => block.classList.remove('active'));

              // Activate the clicked tab and corresponding code block
              tab.classList.add('active');
              const activeBlock = document.getElementById(tab.dataset.tab);
              if (activeBlock) {
                  activeBlock.classList.add('active');
              }
          });
      });
  }
});

/* code for language coding pages */
function toggleChapter(chapterId) {
  const chapter = document.getElementById(chapterId);

  // Explicitly check computed style for visibility
  if (window.getComputedStyle(chapter).display === "none") {
    chapter.style.display = "block"; // Open the section
  } else {
    chapter.style.display = "none"; // Close the section
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Fetch and insert the footer
  fetch('/footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch footer: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      const container = document.getElementById('footer-container');
      if (!container) {
        console.error("Error: #footer-container not found in the DOM.");
        return;
      }
      container.innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading footer:", error);
    });
});

// Contact us message handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
      contactForm.addEventListener("submit", async function (event) {
          event.preventDefault(); // Prevent form reload

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
          const statusMessage = document.getElementById("status-message");

          if (!name || !email || !message) {
              statusMessage.textContent = "Please fill out all fields.";
              return;
          }

          // Send data to Airtable
          try {
              const dateValue = new Date().toISOString().split("T")[0]; // Sends only the date (YYYY-MM-DD)

              const response = await fetch("https://api.airtable.com/v0/app81xchmVjhSK7KP/Table%201", {
                  method: "POST",
                  headers: {
                      Authorization: "Bearer patg88SANt9E8IXPo.3df06e2bb52809a794cd4a4d21aa42295c39f58f0c9d3ce8dbea83f07368dd0b",
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      fields: {
                          Name: name,
                          Email: email,
                          Message: message,
                          "Date Submitted": dateValue, // Match Airtable's format for the Date field
                      },
                  }),
              });

              if (response.ok) {
                  statusMessage.textContent = "Your message has been sent successfully!";
                  contactForm.reset(); // Clear the form
              } else {
                  const errorData = await response.json();
                  console.error("Error from Airtable:", errorData);
                  statusMessage.textContent = "An error occurred. Please try again.";
              }
          } catch (error) {
              console.error("Error:", error);
              statusMessage.textContent = "An error occurred. Please try again.";
          }
      });
  }
});

// smooth scrolling 
document.addEventListener("DOMContentLoaded", () => {
  // Get all anchor links
  const anchorLinks = document.querySelectorAll("a[href^='#']");

  // Add click event listener to each anchor link
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target element
      const targetId = this.getAttribute("href").substring(1); // Remove the '#' symbol
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Adjust scroll position for sticky header
        const offset = document.querySelector("#header-container").offsetHeight; // Get sticky header height
        const targetPosition = targetElement.offsetTop - offset;

        // Smooth scroll to the target position
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});

// smooth scrolling for topic stuffs
document.addEventListener("DOMContentLoaded", () => {
  const adjustScroll = () => {
    // Get the hash from the URL (e.g., #topic1)
    const hash = window.location.hash.substring(1);

    if (hash) {
      const targetElement = document.getElementById(hash);

      if (targetElement) {
        // Total offset: header + language bar + margin
        const totalOffset = 122.95;

        // Use setTimeout to ensure all layout calculations are complete
        setTimeout(() => {
          const targetPosition = targetElement.offsetTop - totalOffset;

          // Smooth scroll to the adjusted position
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }, 100); // Delay in milliseconds (adjust if needed)
      }
    }
  };

  // Adjust scroll on page load
  window.onload = adjustScroll;

  // Adjust scroll on hash change (e.g., user clicks a link)
  window.addEventListener("hashchange", adjustScroll);
});

// coding language nav link active button thing
function activateNavLink() {
  const navLinks = document.querySelectorAll(".coding-languages-list-9321pookie li a");
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop().split('.')[0];

  navLinks.forEach(link => {
    const hrefFile = link.getAttribute("href").split('/').pop().split('.')[0];
    let isActive = false;

    // Check in languageMapping
    for (const [language, pages] of Object.entries(languageMapping)) {
      if (pages.includes(currentFile) && pages.includes(hrefFile)) {
        isActive = true;
        break;
      }
    }

    // Check in masteryMapping
    if (!isActive) {
      for (const [category, pages] of Object.entries(masteryMapping)) {
        if (pages.includes(currentFile) && pages.includes(hrefFile)) {
          isActive = true;
          break;
        }
      }
    }

    if (isActive) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// exercise reveal/hide answer button 
document.addEventListener("DOMContentLoaded", () => {
  // Find all buttons with the class 'reveal-answer-btn'
  const revealButtons = document.querySelectorAll(".reveal-answer-btn");

  // If no buttons exist, exit to prevent errors
  if (revealButtons.length === 0) return;

  // Add click event listener to each button
  revealButtons.forEach(button => {
      button.addEventListener("click", () => {
          const answerId = button.getAttribute("data-answer-id");
          const answerDiv = document.getElementById(answerId);

          // Check if the corresponding answer exists
          if (answerDiv) {
              if (answerDiv.classList.contains("blurred-answer")) {
                  // Unblur the answer and change button text to "Hide Answer"
                  answerDiv.classList.remove("blurred-answer");
                  button.textContent = "Hide Answer";
              } else {
                  // Blur the answer again and change button text to "Reveal Answer"
                  answerDiv.classList.add("blurred-answer");
                  button.textContent = "Reveal Answer";
              }
          }
      });
  });
});

// HTML Quick Menu Loader
document.addEventListener('DOMContentLoaded', () => {
  fetch('/html/html-quick-menu.html') // Adjust based on your folder structure
      .then(response => {
          if (!response.ok) {
              throw new Error(`Failed to fetch HTML Quick Menu: ${response.statusText}`);
          }
          return response.text();
      })
      .then(data => {
          const container = document.getElementById('html-quick-menu');
          if (!container) {
              console.error("Error: #html-quick-menu not found in the DOM.");
              return;
          }
          container.innerHTML = data;

          // 🟢 Initialize previous ranking system AFTER loading menu
          initializeTopicRankingSystem();

          // 🟢 Attach event listeners for the hamburger menu AFTER menu loads
          initializeHamburgerMenu();
      })
      .catch(error => console.error("Error loading HTML Quick Menu:", error));
});

// CSS Quick Menu Loader
document.addEventListener('DOMContentLoaded', () => {
  // Fetch the CSS Quick Menu content
  fetch('/css/css-quick-menu.html') // Adjust the path based on your folder structure
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch CSS Quick Menu: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      const container = document.getElementById('css-quick-menu');
      if (!container) {
        console.error("Error: #css-quick-menu not found in the DOM.");
        return;
      }
      container.innerHTML = data;

      // Initialize topic ranking system after menu is loaded
      initializeTopicRankingSystem();
    })
    .catch((error) => console.error('Error loading CSS Quick Menu:', error));
});

// JS Quick Menu Loader
document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JavaScript Quick Menu content
  fetch('/javascript/js-quick-menu.html') // Adjust the path based on your folder structure
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch JavaScript Quick Menu: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      const container = document.getElementById('js-quick-menu');
      if (!container) {
        console.error("Error: #js-quick-menu not found in the DOM.");
        return;
      }
      container.innerHTML = data;

      // Initialize topic ranking system after menu is loaded
      initializeTopicRankingSystem();
    })
    .catch((error) => console.error('Error loading JavaScript Quick Menu:', error));
});

// Universal Ranking System Initialization
function initializeTopicRankingSystem() {
  const statuses = ["neutral", "green", "amber", "red"];
  const allQuickMenus = document.querySelectorAll(".quick-plan-list-klm123");

  allQuickMenus.forEach(menu => {
      const menuItems = menu.querySelectorAll(".menu-item");

      menuItems.forEach(menuItem => {
          const link = menuItem.querySelector(".menu-link");
          const statusButton = menuItem.querySelector(".status-button");
          const hrefKey = link.getAttribute("href");

          const savedStatus = localStorage.getItem(hrefKey);
          if (savedStatus) {
              link.className = `menu-link ${savedStatus}`;
          }

          statusButton.addEventListener("click", () => {
              const currentStatus = statuses.find(status =>
                  link.classList.contains(status)
              );
              const currentIndex = statuses.indexOf(currentStatus);
              const nextIndex = (currentIndex + 1) % statuses.length;
              const nextStatus = statuses[nextIndex];

              link.className = `menu-link ${nextStatus}`;

              localStorage.setItem(hrefKey, nextStatus);
          });
      });
  });
}

const STATUSES = ["neutral", "green", "amber", "red"];

// Initialize the Quick Menu Status System
function initializeQuickMenuStatusSystem() {
  console.log("🚀 Initializing Quick Menu Status System...");

  const quickMenuItems = document.querySelectorAll(".quick-plan-list-klm123 .menu-item");
  console.log(`📌 Found ${quickMenuItems.length} quick menu items.`);

  quickMenuItems.forEach((menuItem, index) => {
    const link = menuItem.querySelector(".menu-link");
    const statusButton = menuItem.querySelector(".status-button");
    const hrefKey = link.getAttribute("href");

    console.log(`🔗 Processing quick menu item ${index + 1}: ${hrefKey}`);

    // Load saved status from localStorage
    const savedStatus = localStorage.getItem(hrefKey);
    if (savedStatus) {
      console.log(`📂 Loaded saved status for ${hrefKey}: ${savedStatus}`);
      link.className = `menu-link ${savedStatus}`;
    }

    // Add click event to cycle through statuses
    statusButton.addEventListener("click", () => {
      const currentStatus = STATUSES.find((status) => link.classList.contains(status));
      const currentIndex = STATUSES.indexOf(currentStatus);
      const nextIndex = (currentIndex + 1) % STATUSES.length;
      const nextStatus = STATUSES[nextIndex];

      console.log(`🖱 Clicked status button for ${hrefKey}. Changing status from ${currentStatus} to ${nextStatus}.`);

      // Update the link class and save to localStorage
      link.className = `menu-link ${nextStatus}`;
      localStorage.setItem(hrefKey, nextStatus);
    });
  });
}

// Initialize the Lesson Rating System
function initializeLessonRatingSystem() {
  console.log("🚀 Initializing Lesson Rating System...");

  // Find the exercise section
  const exerciseSection = document.querySelector(".exercise-section"); // Adjust the selector as needed

  // Get the current page's filename
  const currentPage = window.location.pathname.split("/").pop();
  console.log(`📄 Current page: ${currentPage}`);

  // Create the rating container
  const ratingContainer = document.createElement("div");
  ratingContainer.className = "lesson-rating-container";

  // Create rating buttons for each status
  STATUSES.forEach((status) => {
    if (status === "neutral") return; // Skip neutral (default state)

    const button = document.createElement("button");
    button.className = `lesson-rating-btn ${status}`;
    button.textContent = status.charAt(0).toUpperCase() + status.slice(1); // Capitalize status
    button.dataset.status = status;

    // Highlight the saved status
    const savedStatus = localStorage.getItem(`./${currentPage}`);
    if (savedStatus === status) {
      console.log(`✅ Loaded saved status for ${currentPage}: ${status}`);
      button.classList.add("selected");
    }

    // Add click event to update status
    button.addEventListener("click", () => {
      console.log(`🖱 Clicked rating button: ${status} for ${currentPage}`);

      // Remove 'selected' class from all buttons
      ratingContainer.querySelectorAll(".lesson-rating-btn").forEach((btn) => btn.classList.remove("selected"));

      // Highlight the clicked button
      button.classList.add("selected");

      // Save status to localStorage
      const normalizedPage = `./${currentPage}`;
      localStorage.setItem(normalizedPage, status);
      updateQuickMenuStatus(normalizedPage, status);
      console.log(`💾 Saved status for ${normalizedPage}: ${status}`);

      // Update the corresponding quick menu item
      updateQuickMenuStatus(currentPage, status);
    });

    ratingContainer.appendChild(button);
  });

  // Insert the rating buttons AFTER the exercise section
  exerciseSection.insertAdjacentElement("afterend", ratingContainer);
  console.log("📍 Inserted rating buttons below the exercise section.");
}

// Update the Quick Menu Status for the corresponding lesson
function updateQuickMenuStatus(hrefKey, status) {
  console.log(`🔄 Updating quick menu for ${hrefKey} -> ${status}`);

  const quickMenuLinks = document.querySelectorAll(".quick-plan-list-klm123 .menu-link");
  console.log(`🔍 Found ${quickMenuLinks.length} quick menu links.`);

  quickMenuLinks.forEach((link) => {
    // Normalize the link's href by removing leading './' if present
    const linkHref = link.getAttribute("href").replace(/^\.\//, "");
    console.log(`🔗 Checking quick menu link: ${linkHref}`);

    // Normalize the hrefKey by removing leading './' if present
    const normalizedHrefKey = hrefKey.replace(/^\.\//, "");

    // Compare the normalized hrefKey with the normalized linkHref
    if (linkHref === normalizedHrefKey) {
      console.log(`✅ Match found! Updating quick menu for ${linkHref}.`);

      // Remove all status classes
      link.classList.remove(...STATUSES);

      // Add the new status class
      link.classList.add(status);
      localStorage.setItem(hrefKey, status);
    }
  });
}

// Load saved statuses for the Quick Menu on page load
function loadQuickMenuStatuses() {
  console.log("🔄 Loading quick menu statuses from localStorage...");

  const quickMenuLinks = document.querySelectorAll(".quick-plan-list-klm123 .menu-link");
  console.log(`🔍 Found ${quickMenuLinks.length} quick menu links.`);

  quickMenuLinks.forEach((link) => {
    const hrefKey = link.getAttribute("href").replace(/^\.\//, "");
    const savedStatus = localStorage.getItem(hrefKey);

    if (savedStatus) {
      console.log(`📂 Loaded saved status for ${hrefKey}: ${savedStatus}`);
      link.classList.remove(...STATUSES);
      link.classList.add(savedStatus);
    }
  });
}

// Initialize everything when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 DOM fully loaded. Initializing systems...");
  initializeQuickMenuStatusSystem();
  initializeLessonRatingSystem();
  loadQuickMenuStatuses();
});

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const contentContainer = document.getElementById('content');

// Add event listeners to links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent full page reload

    const url = link.href;

    // Fetch the new page content
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching ${url}`);
        }
        return response.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('#content').innerHTML;

        contentContainer.innerHTML = newContent;
        history.pushState(null, '', url);

        // Reinitialize scripts for dynamically loaded content
        reinitializeScripts();
      })
      .catch(error => {
        console.error('Error loading page:', error);
      });
  });
});

// Handle browser navigation (back/forward buttons)
window.addEventListener('popstate', () => {
  fetch(location.href)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const newContent = doc.querySelector('#content').innerHTML;
      contentContainer.innerHTML = newContent;
      reinitializeScripts();
    });
});

// i think its the nav links, not sure
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link'); // All navigation links
  const contentContainer = document.getElementById('content'); // Main content container

  navLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault(); // Prevent full page reload

          const url = link.getAttribute('href'); // Get the href of the clicked link

          // Fetch the new content
          fetch(url)
              .then(response => {
                  if (!response.ok) {
                      throw new Error(`Failed to fetch ${url}`);
                  }
                  return response.text();
              })
              .then(html => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(html, 'text/html');
                  const newContent = doc.querySelector('#content').innerHTML;

                  // Replace the current content
                  contentContainer.innerHTML = newContent;

                  // Update the browser's history
                  history.pushState(null, '', url);
              })
              .catch(error => console.error('Error loading content:', error));
      });
  });

  // Handle browser navigation (back/forward buttons)
  window.addEventListener('popstate', () => {
      fetch(location.href)
          .then(response => response.text())
          .then(html => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              const newContent = doc.querySelector('#content').innerHTML;
              contentContainer.innerHTML = newContent;
          });
  });
});

// Select all chapter titles
const chapterTitles = document.querySelectorAll(".chapter-title-unique-004");

// Add click event listeners to toggle chapters
chapterTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const chapterNumber = title.dataset.chapter; // Get chapter number
    const topicsList = document.getElementById(`chapter-${chapterNumber}-topics-unique-006`);

    // Toggle visibility of the topics
    if (topicsList.style.display === "block") {
      topicsList.style.display = "none"; // Collapse
    } else {
      topicsList.style.display = "block"; // Expand
    }
  });
});

// Add functionality for topic buttons
const topicButtons = document.querySelectorAll(".topic-button-unique-007");

topicButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    alert(`You clicked on: ${e.target.textContent}`);
    // Replace the alert with actual functionality as needed
  });
});

// Toggle chapters open/close
document.querySelectorAll('.unique-chapter-button').forEach(button => {
  button.addEventListener('click', () => {
      const chapterId = button.getAttribute('data-chapter');
      const topicsContainer = document.querySelector(`#unique-${chapterId}-topics`);
      topicsContainer.classList.toggle('open');
      topicsContainer.style.display = topicsContainer.style.display === 'block' ? 'none' : 'block';
  });
});

// Toggle completion for topics and chapters
document.querySelectorAll('.completion-button').forEach(button => {
  button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent triggering the topic link
      const circle = button.querySelector('.completion-circle');
      circle.classList.toggle('completed');
  });
});

// Load in the course VSP quick menu and header
document.addEventListener("DOMContentLoaded", () => {
  fetch("vsp-quick-menu.html")
      .then((response) => {
          if (!response || !response.ok) {
              throw new Error(`HTTP error! status: ${response ? response.status : "undefined response"}`);
          }
          return response.text();
      })
      .then((html) => {
          // Insert the quick menu HTML into the placeholder
          const quickMenuContainer = document.getElementById("vsp-quick-menu");
          if (quickMenuContainer) {
              quickMenuContainer.innerHTML = html;
              console.log("Quick menu loaded successfully.");

              // Add event listeners after content injection
              const hamburgerButton = document.getElementById("hamburger-menu-toggle");
              const menuContainer = document.getElementById("unique-quick-menu-container");

              if (hamburgerButton && menuContainer) {
                  hamburgerButton.addEventListener("click", () => {
                      menuContainer.classList.toggle("hidden");
                  });
                  console.log("Hamburger menu event listener attached.");
              } else {
                  console.error("Hamburger button or menu container not found.");
              }
          } else {
              console.error("Quick menu placeholder not found.");
          }
      })
      .catch((error) => {
          console.error("Error fetching quick menu:", error);
      });
});

// code for course topic section revealing stuff 
document.addEventListener("DOMContentLoaded", () => {
  // Select all completion buttons
  const completionButtons = document.querySelectorAll(".unique-completion-button-001");

  completionButtons.forEach((button) => {
      button.addEventListener("click", () => {
          // Get the current section and next section ID
          const currentSection = button.parentElement;
          const nextSectionId = currentSection.nextElementSibling?.id;

          // If there's a next section, show it and scroll into view with offset
          if (nextSectionId) {
              const nextSection = document.getElementById(nextSectionId);
              if (nextSection) {
                  nextSection.style.display = "block"; // Make it visible

                // Adjust scrolling for fixed header and custom offset
const headerHeight = document.querySelector('header')?.offsetHeight || 0;
const customOffset = 95; // Customize this value for additional spacing
const sectionPosition = nextSection.offsetTop - headerHeight - customOffset;

window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
});
              }
          }

          // Check if all sections in the main container are visible
          const parentMain = button.closest("main");
          const allSections = parentMain.querySelectorAll(".unique-section-container-001");
          const allCompleted = Array.from(allSections).every(
              (section) => section.style.display === "block"
          );

          // If all sections are completed, mark the chapter as complete
          if (allCompleted) {
              const chapterButton = document.querySelector(
                  `[data-chapter="${parentMain.getAttribute("data-chapter")}"]`
              );
              if (chapterButton) {
                  const completionCircle = chapterButton.querySelector(".completion-circle");
                  if (completionCircle) {
                      completionCircle.style.backgroundColor = "green"; // Mark chapter complete
                  }
              }
          }
      });
  });
});

// completion button status thing 
document.addEventListener("DOMContentLoaded", () => {

  const finalCompletionButton = document.getElementById("final-completion-button");

  // Load progress from localStorage
  const savedProgress = JSON.parse(localStorage.getItem("topicProgress")) || {};

  const topicLinks = document.querySelectorAll(".unique-topic-link");

  let isAnyUnmarked = false; // Initialize the flag
  const currentUrl = window.location.href; // Initialize the current URL

  if (finalCompletionButton) {
      finalCompletionButton.addEventListener("click", () => {
          console.log("Final completion button clicked.");

          // Get the current URL
          const currentUrl = window.location.href;

          // Find the corresponding completion-circle based on the current URL
          const topicLinks = document.querySelectorAll(".unique-topic-link");
          let isAnyUnmarked; // Flag to track if any section is unmarked

          topicLinks.forEach((link) => {
              const linkHref = new URL(link.getAttribute("href"), window.location.origin).href; // Absolute URL
              console.log("Checking link:", linkHref);

              if (currentUrl === linkHref) {
                  console.log("Match found for link:", linkHref);

                  // Find the completion-circle and toggle its state
                  const completionCircle = link.querySelector(".completion-circle");
                  if (completionCircle) {
                      const isCompleted = completionCircle.classList.contains("completed");
                      if (isCompleted) {
                          // Mark as complete
                          completionCircle.classList.add("completed");
                          console.log("Marked as completed.");
                          savedProgress[linkHref] = true;
                      } else {
                          // Mark as complete
                          completionCircle.classList.add("completed");
                          console.log("Marked as completed.");
                          savedProgress[linkHref] = true;
                      }
                  }
              }
          });


            // Save progress to localStorage
if (!isAnyUnmarked) {
  savedProgress[currentUrl] = true; // Save the current URL as completed
} else {
  delete savedProgress[currentUrl]; // Remove the current URL from completed
}
      });
  } else {
      console.error("Final completion button not found.");
  }

localStorage.setItem("topicProgress", JSON.stringify(savedProgress));
console.log("Updated progress saved to localStorage:", savedProgress);

  // Restore progress
  document.addEventListener("DOMContentLoaded", () => {
    restoreProgress(); 
  });
    const restoreProgress = () => {
        console.log("Restoring progress from localStorage...");
        const savedProgress = JSON.parse(localStorage.getItem("topicProgress")) || {};
console.log("Retrieved progress from localStorage:", savedProgress);

        const topicLinks = document.querySelectorAll(".unique-topic-link");
        topicLinks.forEach((link) => {
            const completionCircle = link.querySelector(".completion-circle");
            if (completionCircle) {
                const linkHref = new URL(link.getAttribute("href"), window.location.origin).href;
                if (savedProgress[linkHref]) {
                    completionCircle.classList.add("completed");
                    console.log(`Restored ${linkHref} as completed.`);
                }
            }
        });
    };

    // If the menu is dynamically loaded, call restoreProgress after it's loaded
    const quickMenu = document.getElementById("vsp-quick-menu");
    if (quickMenu && quickMenu.innerHTML.trim() === "") {
        const observer = new MutationObserver(() => {
            restoreProgress();
            observer.disconnect(); // Stop observing once progress is restored
        });
        observer.observe(quickMenu, { childList: true, subtree: true });
    } else {
        restoreProgress();
    }
  
  // Call the function immediately to set the button text on page load

// Handle the final completion button click
if (finalCompletionButton) {
  finalCompletionButton.addEventListener("click", () => {
      let isAnyUnmarked = false;

      topicLinks.forEach((link) => {
          const linkHref = new URL(link.getAttribute("href"), window.location.origin).href;
          const completionCircle = link.querySelector(".completion-circle");

          if (completionCircle) {
              const isCompleted = completionCircle.classList.contains("completed");

              if (isCompleted) {
                  // Unmark as complete
                  completionCircle.classList.remove("completed");
                  delete savedProgress[linkHref];
                  isAnyUnmarked = true;
              } else {
                  // Mark as complete
                  completionCircle.classList.add("completed");
                  savedProgress[linkHref] = true;
              }
          }
      });


// Save updated progress to localStorage
localStorage.setItem("topicProgress", JSON.stringify(savedProgress));
console.log("Updated progress saved to localStorage:", savedProgress);

// Update the text of the final-completion-button
});
} else {
console.error("Final completion button not found.");
}
});

// tutorial unlock exericse section thing

document.addEventListener("DOMContentLoaded", () => {
  const tutorialId = document.querySelector(".detailed-plan-klm123").id; // Get tutorial ID
  const nextButton = document.getElementById("unlock-exercises");
  const exerciseSection = document.getElementById(tutorialId.replace("-tutorial", "-exercises")); // Match the exercise section

  // Check if this tutorial has been completed before
  if (localStorage.getItem(`${tutorialId}-completed`)) {
      exerciseSection.style.display = "block"; // Unlock the exercises
  } else {
      exerciseSection.style.display = "none"; // Keep it locked
  }

  // Unlock on button click
  nextButton.addEventListener("click", () => {
      localStorage.setItem(`${tutorialId}-completed`, "true"); // Mark as completed
      exerciseSection.style.display = "block"; // Show exercises
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all tutorial sections
  const tutorialSections = document.querySelectorAll(".detailed-plan-klm123[id$='-tutorial']");

  tutorialSections.forEach(tutorial => {
    const tutorialId = tutorial.id; // Get tutorial ID
    const exerciseSection = document.getElementById(tutorialId.replace("-tutorial", "-exercises")); // Match the exercise section

    // Check if this tutorial has been completed before
    if (localStorage.getItem(`${tutorialId}-completed`)) {
      exerciseSection.style.display = "block"; // Unlock the exercises
    } else {
      exerciseSection.style.display = "none"; // Keep it locked
    }

    // Create the wrapper div
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "unlock-exercises-button-parent-div";

    // Create the button
    const button = document.createElement("a");
    button.className = "navigation-button";
    button.textContent = "Try out the exercise questions";

    // Add click event to unlock exercises
    button.addEventListener("click", () => {
      localStorage.setItem(`${tutorialId}-completed`, "true"); // Mark as completed
      exerciseSection.style.display = "block"; // Show exercises
    });

    // Append button to wrapper, then add to tutorial section
    buttonWrapper.appendChild(button);
    tutorial.appendChild(buttonWrapper);
  });
}); 

// progress bar styling 
document.addEventListener("DOMContentLoaded", () => {
  const progressBarContainerId = "topic-progress-bar"; // ID of the progress bar container
  const progressBarFillId = "topic-progress-bar-fill"; // ID of the progress bar fill element
  const sectionsClass = ".unique-section-container-001"; // Class for each section
  const completionButtonClass = ".unique-completion-button-001"; // Class for each button

  let completedSections = 0; // Counter for completed sections
  let totalSections = 0; // Total sections on the page

  const initializeProgressBar = () => {
      const progressBarFill = document.getElementById(progressBarFillId);
      const sections = document.querySelectorAll(sectionsClass);
      totalSections = sections.length;

      if (!progressBarFill) {
          console.error(`Progress bar fill element (#${progressBarFillId}) not found.`);
          return;
      }

      // Function to update the progress bar
      const updateProgressBar = () => {
          const progressPercentage = (completedSections / totalSections) * 100;
          console.log(`Updating progress bar: ${completedSections}/${totalSections} (${progressPercentage}%)`);
          progressBarFill.style.width = `${progressPercentage}%`;
      };

      // Add click event listeners to the section completion buttons
      sections.forEach((section) => {
          const button = section.querySelector(completionButtonClass);
          if (button) {
              button.addEventListener("click", () => {
                  if (!section.classList.contains("completed")) {
                      section.classList.add("completed");
                      completedSections++;
                      updateProgressBar();
                  }
              });
          }
      });

      // Initialize the progress bar
      updateProgressBar();
  };

  // Wait for the dynamically loaded progress bar to appear
  const progressBarContainer = document.getElementById(progressBarContainerId);
  if (!progressBarContainer) {
      const observer = new MutationObserver(() => {
          if (document.getElementById(progressBarFillId)) {
              console.log("Progress bar loaded. Initializing...");
              initializeProgressBar();
              observer.disconnect(); // Stop observing
          }
      });
      observer.observe(document.body, { childList: true, subtree: true });
  } else {
      initializeProgressBar();
  }
});

// exercise sections in courses
document.addEventListener("DOMContentLoaded", () => {
  // Define correct answers
  const correctAnswers = {
    "html-intro-q1": "HyperText Markup Language",
    "html-tags-elements-q1": "&lt;/p&gt;",
    "html-paragraph-q1": "&lt;p&gt;CodeItClear has taught me how to create a paragraph.&lt;/p&gt;",
  };


  // Track attempts for each question
  const attempts = {};

  // Add event listener to each submit button
  document.querySelectorAll(".exercise-question .submit-answers").forEach((submitButton) => {
    submitButton.addEventListener("click", () => {
      // Get the parent container of the question
      const questionContainer = submitButton.closest(".exercise-question");
      const userInput = questionContainer.querySelector(".user-answer");
      const questionId = userInput?.id; // Ensure questionId is retrieved safely
      const feedback = questionContainer.querySelector(".feedback");
      const displayAnswer = questionContainer.querySelector(".answer-display");
      const nextButton = questionContainer.querySelector(".unique-completion-button-001");

      // Log for debugging
      console.log("Question ID:", questionId);
      console.log("Correct Answers Object:", correctAnswers);

      // Check if questionId exists in correctAnswers
      if (!questionId || !(questionId in correctAnswers)) {
        console.error(`No correct answer found for question ID: ${questionId}`);
        feedback.textContent = "Error: Question not configured properly.";
        feedback.style.color = "red";
        return;
      }

      if (!attempts[questionId]) attempts[questionId] = 0; // Initialize attempts

      const userAnswer = userInput.value.trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
      attempts[questionId]++; // Increment attempts

      console.log("User answer:", userAnswer);
      console.log("Correct answer:", correctAnswers[questionId]);

      if (userAnswer.toLowerCase() === correctAnswers[questionId].toLowerCase()) {
        // Correct answer
        userInput.classList.add("correct");
        userInput.classList.remove("incorrect");
        feedback.textContent = "Correct!";
        feedback.style.color = "green";

        // Remove check button and show the next button
        submitButton.style.display = "none";
        nextButton.style.display = "block";
      } else {
        // Incorrect answer
        userInput.classList.add("incorrect");
        userInput.classList.remove("correct");

        if (attempts[questionId] === 1) {
          feedback.textContent = "Double check your answer!";
          feedback.style.color = "orange";
          feedback.style.fontWeight = "bold";
        } else if (attempts[questionId] === 2) {
          feedback.textContent = "Incorrect!";
          feedback.style.color = "red";
          feedback.style.fontWeight = "bold";

          // Remove check button and show the next button
          submitButton.style.display = "none";
          nextButton.style.display = "block";

          // Show feedback with user and correct answers
          displayAnswer.innerHTML = `
            <div style="color: red; border-radius: 10px; background: #ffe6e6; padding: 10px; margin-top: 5px;">
              Your Answer: ${userAnswer}
            </div>
            <div style="color: green; border-radius: 10px; background: #e6ffe6; padding: 10px; margin-top: 5px;">
              Correct Answer: ${correctAnswers[questionId]}
            </div>`;
        }
      }
    });
  });
});

// mcq section in courses 
document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to each submit button for multiple-choice questions
  document.querySelectorAll(".mcq-question .submit-answers").forEach((submitButton) => {
      submitButton.addEventListener("click", () => {
          // Get the parent container of the question
          const questionContainer = submitButton.closest(".mcq-question");
          const feedback = questionContainer.querySelector(".feedback");
          const displayAnswer = questionContainer.querySelector(".answer-display");
          const nextButton = questionContainer.querySelector(".unique-completion-button-001");

          // Get the selected option
          const selectedOption = questionContainer.querySelector('input[name="mcq"]:checked');

          if (!selectedOption) {
              feedback.textContent = "Please select an option!";
              feedback.style.color = "orange";
              return;
          }

          const userAnswer = selectedOption.value;
          const correctAnswer = selectedOption.getAttribute("data-correct-answer");

          if (userAnswer === correctAnswer) {
              // Correct answer
              feedback.textContent = "Correct!";
              feedback.style.color = "green";

              displayAnswer.innerHTML = `<div style="color: green; border: 1px solid green; background: #e6ffe6; padding: 10px; margin-top: 5px;">
                  Correct Answer: ${correctAnswer}
              </div>`;
          } else {
              // Incorrect answer
              feedback.textContent = "Incorrect!";
              feedback.style.color = "red";

              displayAnswer.innerHTML = `
              <div style="color: red; border: 1px solid red; background: #ffe6e6; padding: 10px; margin-top: 5px;">
                  Your Answer: ${userAnswer}
              </div>
              <div style="color: green; border: 1px solid green; background: #e6ffe6; padding: 10px; margin-top: 5px;">
                  Correct Answer: ${correctAnswer}
              </div>`;
          }

          // Remove check button and show the next button
          submitButton.style.display = "none";
          nextButton.style.display = "block"; // Show the Next button
          console.log("Next button displayed.");
      });
  });
});

// exercise box styling
document.querySelectorAll(".inline-code-input").forEach((input) => {
  input.addEventListener("input", (e) => {
      const target = e.target;
      target.style.width = `${target.value.length + 1}ch`; // Dynamically set width
  });
});

// lesson folder vsp quick menu thing 
document.addEventListener("DOMContentLoaded", () => {
  // Add toggle functionality for folders
  document.querySelectorAll(".unique-topic-folder").forEach((folder) => {
      folder.addEventListener("click", () => {
          const targetId = folder.getAttribute("data-toggle");
          const targetContainer = document.getElementById(`${targetId}-subtopics`);

          if (targetContainer) {
              // Toggle visibility
              if (targetContainer.style.display === "block") {
                  targetContainer.style.display = "none";
              } else {
                  targetContainer.style.display = "block";
              }
          } else {
              console.error(`No element found with ID ${targetId}-subtopics`);
          }
      });
  });

  // Update folder-circle completion status dynamically
  const updateFolderCompletion = () => {
      document.querySelectorAll(".unique-topic-folder").forEach((folder) => {
          const targetId = folder.getAttribute("data-toggle");
          const subtopics = document.querySelectorAll(`#${targetId}-subtopics .unique-topic-link .completion-circle`);
          const allCompleted = Array.from(subtopics).every((circle) =>
              circle.style.backgroundColor === "green"
          );

          const folderCircle = folder.querySelector(".folder-circle");
          if (folderCircle) {
              folderCircle.style.backgroundColor = allCompleted ? "green" : "lightgrey";
          }
      });
  };

  // Initialize folder completion status
  updateFolderCompletion();

  // Add event listeners to subtopic circles to update folder circles dynamically
  document.querySelectorAll(".completion-circle").forEach((circle) => {
      circle.addEventListener("click", () => {
          updateFolderCompletion();
      });
  });
});

// sub topic and topic completion thing 
document.addEventListener("DOMContentLoaded", () => {
  // Fetch the header file
  fetch('/header.html')
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch header: ${response.statusText}`);
      return response.text();
    })
    .then(headerData => {
      const headerContainer = document.getElementById('header-container');
      if (headerContainer) {
        headerContainer.innerHTML = headerData;
        setTimeout(() => {
          activateNavLink();
        }, 100);
      } else {
        console.error("Header container not found.");
      }

      // Detect which type of page this is
      const isHTMLPage = document.getElementById('html-quick-menu') !== null;
      const isCSSPage = document.getElementById('css-quick-menu') !== null;
      const isJSPage = document.getElementById('js-quick-menu') !== null;

      // Fetch the correct quick menu
      let menuFetches = [];
      let menuOrder = [];

      if (isHTMLPage) {
        menuFetches.push(fetch('/html/html-quick-menu.html').then(res => res.ok ? res.text() : Promise.reject("HTML Quick Menu failed")));
        menuOrder.push("html");
      }
      if (isCSSPage) {
      
        menuFetches.push(fetch('/css/css-quick-menu.html').then(res => res.ok ? res.text() : Promise.reject("CSS Quick Menu failed")));
        menuOrder.push("css");
      }
      if (isJSPage) {
        menuFetches.push(fetch('/javascript/js-quick-menu.html').then(res => res.ok ? res.text() : Promise.reject("JS Quick Menu failed")));
        menuOrder.push("js");
      }

      return Promise.all(menuFetches).then((menuData) => {
        menuOrder.forEach((menuType, index) => {
          if (menuType === "html") {
            document.getElementById('html-quick-menu').innerHTML = menuData[index];
            
          } else if (menuType === "css") {
            document.getElementById('css-quick-menu').innerHTML = menuData[index];
            
          } else if (menuType === "js") {
            document.getElementById('js-quick-menu').innerHTML = menuData[index];
          
          }
        });

        // **Run ranking system & hamburger menu after quick menus are loaded**
        setTimeout(() => {
          initializeHamburgerMenu();
          initializeTopicRankingSystem(); // Fix: Reinitialize ranking system after loading
        }, 300);
      });
    })
    .catch(error => console.error("Error during fetch operations:", error));
});

// hamburger menu for quick menu 
document.addEventListener("DOMContentLoaded", () => {
  // Fetch the header file
  fetch('/header.html')
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch header: ${response.statusText}`);
      return response.text();
    })
    .then(headerData => {
      const headerContainer = document.getElementById('header-container');
      if (headerContainer) {
        headerContainer.innerHTML = headerData;
      }

      // Detect which type of page this is
      const isHTMLPage = document.getElementById('html-quick-menu') !== null;
      const isCSSPage = document.getElementById('css-quick-menu') !== null;
      const isJSPage = document.getElementById('js-quick-menu') !== null;

      // Fetch the correct quick menu
      let menuFetches = [];

      if (isHTMLPage) {
        
        menuFetches.push(fetch('/html/html-quick-menu.html').then(res => res.ok ? res.text() : Promise.reject("HTML Quick Menu failed")));
      }
      if (isCSSPage) {
        
        menuFetches.push(fetch('/css/css-quick-menu.html').then(res => res.ok ? res.text() : Promise.reject("CSS Quick Menu failed")));
      }
      if (isJSPage) {
        
        menuFetches.push(fetch('/javascript/js-quick-menu.html').then(res => res.ok ? res.text() : Promise.reject("JS Quick Menu failed")));
      }

      return Promise.all(menuFetches);
    })
    .then((menuData) => {
      if (document.getElementById('html-quick-menu')) {
        document.getElementById('html-quick-menu').innerHTML = menuData[0];
      }
      if (document.getElementById('css-quick-menu')) {
        document.getElementById('css-quick-menu').innerHTML = menuData[0]; // If this is a CSS page, menuData[0] contains the CSS menu
      }
      if (document.getElementById('js-quick-menu')) {
        document.getElementById('js-quick-menu').innerHTML = menuData[0]; // If this is a JS page, menuData[0] contains the JS menu
      }

      // Initialize the hamburger menu only after the relevant quick menu has loaded
      setTimeout(() => {
        initializeHamburgerMenu();
      }, 300);
    })
    .catch(error => console.error("Error during fetch operations:", error));
});
function initializeHamburgerMenu() {
  setTimeout(() => {
    const menuButton = document.getElementById("hamburger-menu");
    const htmlMenu = document.getElementById("html-quick-menu");
    const cssMenu = document.getElementById("css-quick-menu");
    const jsMenu = document.getElementById("js-quick-menu");

    if (menuButton && (htmlMenu || cssMenu || jsMenu)) {
      // **Remove existing event listeners before adding new ones**
      menuButton.removeEventListener("click", toggleQuickMenu);
      menuButton.addEventListener("click", toggleQuickMenu);

      document.removeEventListener("click", closeQuickMenus);
      document.addEventListener("click", closeQuickMenus);
    } else {
      console.error("Hamburger menu button or one of the quick menus not found.");
    }
  }, 300); // Delay to ensure elements exist
}
function toggleQuickMenu(event) {
  console.log("Menu button clicked! Toggling menu...");
  const htmlMenu = document.getElementById("html-quick-menu");
  const cssMenu = document.getElementById("css-quick-menu");
  const jsMenu = document.getElementById("js-quick-menu");

  if (htmlMenu) htmlMenu.classList.toggle("show");
  if (cssMenu) cssMenu.classList.toggle("show");
  if (jsMenu) jsMenu.classList.toggle("show");

  event.stopPropagation();
}
function closeQuickMenus(event) {
  const menuButton = document.getElementById("hamburger-menu");
  const htmlMenu = document.getElementById("html-quick-menu");
  const cssMenu = document.getElementById("css-quick-menu");
  const jsMenu = document.getElementById("js-quick-menu");

  if (!menuButton.contains(event.target) && !htmlMenu?.contains(event.target) && !cssMenu?.contains(event.target) && !jsMenu?.contains(event.target)) {
    console.log("Clicked outside. Closing menu...");
    if (htmlMenu) htmlMenu.classList.remove("show");
    if (cssMenu) cssMenu.classList.remove("show");
    if (jsMenu) jsMenu.classList.remove("show");
  }
}

// buttons for scrolling on mouse for coding extention menu thing
document.addEventListener("DOMContentLoaded", function () {

  const checkExist = setInterval(() => {
      const scrollContainer = document.querySelector(".coding-extension-9321pookie"); // Parent container
      const scrollLeftBtn = document.getElementById("scroll-left");
      const scrollRightBtn = document.getElementById("scroll-right");

      if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
          clearInterval(checkExist);
          const scrollSpeed = 1; // Adjust how fast it scrolls
          let scrollInterval; // Variable to store the interval

          // 🔵 Function to start scrolling in a direction
          function startScrolling(direction) {
              stopScrolling(); // Clear any existing interval
              scrollInterval = setInterval(() => {
                  scrollContainer.scrollLeft += direction * scrollSpeed; // Move left (-1) or right (+1)
              }, 0.001); // Adjust speed (lower value = smoother)
          }

          // 🛑 Function to stop scrolling when the button is released
          function stopScrolling() {
              clearInterval(scrollInterval);
          }

          // 🔼 Scroll left while holding the button
          scrollLeftBtn.addEventListener("mousedown", () => startScrolling(-1));
          scrollLeftBtn.addEventListener("mouseup", stopScrolling);
          scrollLeftBtn.addEventListener("mouseleave", stopScrolling); // Stop if the user moves away

          // 🔽 Scroll right while holding the button
          scrollRightBtn.addEventListener("mousedown", () => startScrolling(1));
          scrollRightBtn.addEventListener("mouseup", stopScrolling);
          scrollRightBtn.addEventListener("mouseleave", stopScrolling);

      }
  }, 300);
});


// quick menu selection stuff 
function waitForSidebars() {
  const observer = new MutationObserver((mutations, obs) => {
      const sidebar = document.getElementById("tutorial-coding-extention-9321pookie");
      const sidebarT = document.getElementById("mastery-coding-extention-9321pookie");

      if (sidebar && sidebarT) {
          obs.disconnect(); // Stop observing once the elements exist
          applySidebarVisibility(sidebar, sidebarT);
      }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Fallback: Check for elements after a delay
  setTimeout(() => {
      const sidebar = document.getElementById("tutorial-coding-extention-9321pookie");
      const sidebarT = document.getElementById("mastery-coding-extention-9321pookie");
      if (sidebar && sidebarT) {
          applySidebarVisibility(sidebar, sidebarT);
      }
  }, 100); // Check after 1 second
}


function applySidebarVisibility(sidebar, sidebarT) {
  sidebar.style.display = "none";  
  sidebarT.style.display = "none";  

  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop().replace(".html", "");

  let pageCategory = null;

  for (const [category, pages] of Object.entries(languageMapping)) {
      if (pages.includes(currentPage)) {
          pageCategory = category;
          break;
      }
  }

    if (currentPage === "tutorials" || pageCategory) {
        sidebar.style.display = "flex";
        sidebarT.style.display = "none";
    } 

 else if (currentPage === "masteries" || currentPage === "cssmastery" ) {
  sidebar.style.display = "none";
  sidebarT.style.display = "flex";
}
}


waitForSidebars();



// mastery code 

// css mastery 

let cssBasicsQuestions = [];
let totalQuestions = 0;

fetch("/questions.json")
  .then(response => response.json())
  .then(data => {
    cssBasicsQuestions = [...data];
    shuffleQuestions = [...data];
  })
  .catch(error => console.error("❌ ERROR: Failed to load questions!", error));
const cssChapters = [
    {
        chapter: "CSS Basics",
        topics: [
            { topic: "Introduction to CSS", id: "css-introduction" },
            { topic: "CSS Syntax & Selectors", id: "css-selectors" },
            { topic: "CSS Colors & Backgrounds", id: "css-colors-backgrounds" },
            { topic: "Text Styling & Fonts", id: "css-text-styling" }
        ]
    },
    {
        chapter: "CSS Box Model & Layout",
        topics: [
            { topic: "Box Model", id: "css-box-model" },
            { topic: "Margins, Padding & Borders", id: "css-spacing" },
            { topic: "Width, Height & Overflow", id: "css-sizing-overflow" }
        ]
    },
    {
        chapter: "CSS Display & Positioning",
        topics: [
            { topic: "CSS Display", id: "css-display" },
            { topic: "CSS Positioning", id: "css-positioning" },
            { topic: "Float & Clear", id: "css-float-clear" },
            { topic: "Z-Index & Stacking Context", id: "css-z-index" }
        ]
    },
    {
        chapter: "CSS Flexbox",
        topics: [
            { topic: "Introduction to Flexbox", id: "css-flexbox-intro" },
            { topic: "Flexbox Properties", id: "css-flexbox-properties" },
            { topic: "Flexbox Alignment & Justification", id: "css-flexbox-alignment" }
        ]
    },
    {
        chapter: "CSS Grid",
        topics: [
            { topic: "Introduction to Grid", id: "css-grid-intro" },
            { topic: "Grid Template & Areas", id: "css-grid-template" },
            { topic: "Grid Alignment & Justification", id: "css-grid-alignment" }
        ]
    },
    {
        chapter: "CSS Styling & Effects",
        topics: [
            { topic: "Shadows & Borders", id: "css-shadows-borders" },
            { topic: "Gradients", id: "css-gradients" },
            { topic: "CSS Transitions", id: "css-transitions" },
            { topic: "CSS Animations", id: "css-animations" },
            { topic: "Transformations (Rotate, Scale, Skew)", id: "css-transforms" }
        ]
    },
    {
        chapter: "Responsive Design",
        topics: [
            { topic: "CSS Media Queries", id: "css-media-queries" },
            { topic: "Mobile-First Design", id: "css-mobile-first" },
            { topic: "CSS Viewport Units", id: "css-viewport-units" }
        ]
    },
    {
        chapter: "Advanced CSS",
        topics: [
            { topic: "Custom Properties (CSS Variables)", id: "css-variables" },
            { topic: "CSS Preprocessors (SASS & LESS)", id: "css-preprocessors" },
            { topic: "CSS Specificity & Inheritance", id: "css-specificity-inheritance" },
            { topic: "CSS Pseudo-Elements & Pseudo-Classes", id: "css-pseudo-elements" }
        ]
    }
];


// ✅ Select Elements
const mainContainer = document.getElementById("gridContainer");
const masteryTopicButtons = document.querySelectorAll(".topic-button-mastery");
const quizContainer = document.getElementById("quiz-container-mastery");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options-mastery");
const nextButton = document.getElementById("next-button");
const returnToMenuButton = document.getElementById("return-to-menu");

// ✅ Create Back to Menu Button
const backToMenuButton = document.createElement("button");
backToMenuButton.innerText = "Back to Menu";
backToMenuButton.id = "back-to-menu";
backToMenuButton.style.display = "none";

// ✅ Wrap Buttons in a Div
const buttonWrapper = document.createElement("div");
buttonWrapper.id = "quiz-buttons";
buttonWrapper.style.display = "flex";
buttonWrapper.style.justifyContent = "space-between";
buttonWrapper.style.marginTop = "10px";
buttonWrapper.appendChild(backToMenuButton);
buttonWrapper.appendChild(nextButton);
buttonWrapper.appendChild(returnToMenuButton);
quizContainer.appendChild(buttonWrapper);

// ✅ Progress Bar & Tracker
const progressBar = document.createElement("progress");
progressBar.id = "progress-bar";
progressBar.value = 0;
progressBar.max = 100;
quizContainer.insertBefore(progressBar, questionText);

const progressTracker = document.createElement("p");
progressTracker.id = "progress-tracker";
quizContainer.insertBefore(progressTracker, questionText);

// ✅ Quiz Logic Variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let previouslyIncorrect = new Set();
let totalAnsweredQuestions = 0;

// ✅ Function to Shuffle Questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ✅ Function to Decode HTML Entities
function decodeHtmlEntities(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
}

// ✅ Start Quiz When Clicking a Topic
masteryTopicButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedTopic = button.getAttribute("data-topic");
        currentTopicId = selectedTopic; // ✅ Ensure the topic is tracked

        shuffledQuestions = selectedTopic === "all"
            ? [...cssBasicsQuestions]
            : cssBasicsQuestions.filter(q => q.topic === selectedTopic);

            totalQuestions = shuffledQuestions.length; 
totalAnsweredQuestions = 0;
progressBar.value = 0;  
previouslyIncorrect.clear();  
correctAnswers = 0;  
updateProgress();  

        shuffleArray(shuffledQuestions);
        currentQuestionIndex = 0;

        mainContainer.style.display = "none";
        quizContainer.style.display = "block";
        returnToMenuButton.style.display = "none";
        backToMenuButton.style.display = "block";

        updateProgress();
        displayQuestion();
    });
});

// ✅ Back to Menu Button
backToMenuButton.addEventListener("click", () => {
    console.log("🔄 Returning to main grid... Resetting quiz.");

    // ✅ **Fully reset the quiz state**
    shuffledQuestions = [];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    previouslyIncorrect.clear();
    totalAnsweredQuestions = 0;
    
    // ✅ **Ensure topic ID resets** (Fixes second quiz issue)
    currentTopicId = null; 

    // ✅ **Clear quiz UI to prevent leftover elements**
    questionText.innerHTML = "Loading question...";
    answerOptions.innerHTML = ""; // ✅ Remove old answer buttons
    nextButton.style.display = "none"; 

    // ✅ **Ensure UI visibility is properly updated**
    quizContainer.style.display = "none";
    mainContainer.style.display = "grid";

    console.log("✅ Quiz fully reset, main menu restored.");
});

// ✅ Function to Update Progress Bar
function updateProgress() {
    console.log(`🔍 DEBUG: totalQuestions = ${totalQuestions}, totalAnsweredQuestions = ${totalAnsweredQuestions}`);

    if (totalQuestions === 0) {
        progressBar.value = 0;
        return;
    }

    const progressPercentage = (totalAnsweredQuestions / totalQuestions) * 100;
    progressBar.value = Math.min(progressPercentage, 100);
    console.log(`📊 Progress Updated: ${progressBar.value}%`);
}

// ✅ Function to Display a Question
function displayQuestion() {
    console.log("📌 DISPLAYING QUESTION:", currentQuestionIndex + 1, "of", shuffledQuestions.length);

    // ✅ **Check if `shuffledQuestions` has questions**
    if (shuffledQuestions.length === 0) {
        console.error("❌ ERROR: No questions available to display!");
        questionText.innerHTML = "Error: No questions available.";
        return;
    }

    if (currentQuestionIndex >= shuffledQuestions.length) {
        console.log("🚨 No more questions left, calling endQuiz()");
        endQuiz();
        return;
    }

    nextButton.style.display = "none";
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    console.log("📝 Setting Question:", currentQuestion.question);

    // ✅ **Reset wasAnswered before showing a new question**
    shuffledQuestions[currentQuestionIndex].wasAnswered = false;

    // ✅ **Update Question Text**
    questionText.innerHTML = currentQuestion.question;
    
    // ✅ **Clear previous buttons to prevent event listener issues**
    answerOptions.innerHTML = ""; 

    // ✅ **Create new answer buttons**
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("answer-button-mastery");

        // ✅ **Ensure event listeners work properly (Fix for unclickable answers)**
        button.addEventListener("click", () => {
            console.log(`🖱 Clicked on: ${option}`);
            selectAnswer(button, currentQuestion.answer);
        });

        answerOptions.appendChild(button);
    });

    console.log("✅ New question displayed, answer buttons reset.");
}

// ✅ Handle Answer Selection
function selectAnswer(button, correctAnswer) {
    const selectedOption = decodeHtmlEntities(button.innerText.trim());
    const decodedCorrectAnswer = decodeHtmlEntities(correctAnswer.trim());

    console.log(`🖱 Answer Selected: ${selectedOption}`);
    console.log(`✅ Correct Answer: ${decodedCorrectAnswer}`);

    if (shuffledQuestions[currentQuestionIndex].wasAnswered) {
        console.log("⚠️ Question was already answered. Ignoring click.");
        return;
    }

    shuffledQuestions[currentQuestionIndex].wasAnswered = true; // ✅ Mark as answered

    let wasCorrect = false;

    if (selectedOption === decodedCorrectAnswer) {
        console.log("🎉 CORRECT ANSWER!");
        button.style.backgroundColor = "lightgreen";
        wasCorrect = true;
        correctAnswers++; // ✅ This was missing! Fixes progress bar issue
    } else {
        console.log("❌ WRONG ANSWER!");
        button.style.backgroundColor = "lightcoral";

        if (!previouslyIncorrect.has(shuffledQuestions[currentQuestionIndex].question)) {
            previouslyIncorrect.add(shuffledQuestions[currentQuestionIndex].question);
            totalQuestions++; // ✅ Increase total questions for repeats
        }
    }

    // ✅ Highlight Correct Answer
    Array.from(answerOptions.children).forEach(btn => {
        if (decodeHtmlEntities(btn.innerText.trim()) === decodedCorrectAnswer) {
            btn.style.backgroundColor = "lightgreen";
        }
    });

    totalAnsweredQuestions++; // ✅ Increment answered question count

    updateProgress(); // ✅ Progress bar now updates properly

    console.log("➡ Showing Next Button...");
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    console.log("➡ NEXT QUESTION CLICKED! Current index:", currentQuestionIndex);

    if (!shuffledQuestions[currentQuestionIndex].wasAnswered) {
        console.log("❌ ERROR: User didn't answer yet.");
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        console.log("🔄 Displaying next question:", currentQuestionIndex + 1);
        displayQuestion();
    } else {
        console.log("🏁 All questions answered, calling endQuiz()");
        endQuiz();
    }
});

// Motivational Messages Array
const reviewMessages = [
    "Time to refine your skills! Let’s tackle those tricky questions again.",
    "You’re almost there! A few more correct answers and you’ll hit 100%.",
    "One last push! Let’s clear up any mistakes and finish strong.",
    "Review round! Answer these correctly to complete your progress.",
    "Almost perfect! Let’s master these last few questions."
];

function startReviewRound() {
    if (previouslyIncorrect.size > 0) {
        shuffledQuestions = cssBasicsQuestions.filter(q => previouslyIncorrect.has(q.question));
        previouslyIncorrect.clear();
        currentQuestionIndex = 0;

        shuffledQuestions.forEach(q => q.wasAnswered = false); // ✅ Allow answering again
        
        nextButton.style.display = "block"; // ✅ Ensure Next button is visible
        displayQuestion(); // ✅ Start the review round
    }
}

// Elements
const popup = document.getElementById("review-popup");
const popupMessage = document.getElementById("popup-message");
const closePopupButton = document.getElementById("close-popup");

// Show Review Popup
function showReviewPopup() {
    // Select a Random Message
    popupMessage.textContent = reviewMessages[Math.floor(Math.random() * reviewMessages.length)];

    // Blur Background and Show Popup
    quizContainer.classList.add("blurred-background");
    popup.classList.add("active");
}

// Close Popup and Remove Blur
closePopupButton.addEventListener("click", () => {
    quizContainer.classList.remove("blurred-background");
    popup.classList.remove("active");

    // Move to Review Questions
    startReviewRound();
});


function resetQuizState() {
    console.log("🔄 Resetting quiz state...");
    shuffledQuestions = [];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    previouslyIncorrect.clear();
}

// Get Completion Popup Elements
const completionPopup = document.getElementById("completion-popup");
const returnToMenuPopupButton = document.getElementById("return-to-menu-popup");

// Show Completion Popup
function showCompletionPopup() {
    quizContainer.classList.add("blurred-background");
    completionPopup.classList.add("active");
}

// Handle Return to Menu Button Click (Inside Popup)
returnToMenuPopupButton.addEventListener("click", () => {
    
    quizContainer.classList.remove("blurred-background");
    completionPopup.classList.remove("active");

    // ✅ Ensure the whole grid layout is visible again
    document.querySelector(".mastery-main-page-grid-container").style.display = "grid";
    
    returnToMenuButton.style.display = "none";
    gridContainer.style.display = "grid";
    quizContainer.style.display = "none";
});

// Modify End Quiz Function
function endQuiz() {
    console.log("🚨🚨🚨 DEBUG: END QUIZ FUNCTION IS RUNNING 🚨🚨🚨");

    if (previouslyIncorrect.size > 0) {
        showReviewPopup(); // Show review popup for incorrect questions
        console.log("🔁 REVIEW ROUND STARTED: Incorrect answers exist.");
        shuffledQuestions = cssBasicsQuestions.filter(q => previouslyIncorrect.has(q.question));
        previouslyIncorrect.clear();
        currentQuestionIndex = 0;
        shuffledQuestions.forEach(q => q.wasAnswered = false);
        displayQuestion();
    } else {
        showCompletionPopup();
        console.log("✅ QUIZ COMPLETED! Checking topic completion...");
        console.log("🎯 Current Topic ID at end:", currentTopicId);

        if (currentTopicId) {
            console.log("🏁 Saving topic completion for:", currentTopicId);
            saveCompletedTopic(currentTopicId);
        } else if (shuffledQuestions.length > 0) {
            console.log("🛠 Trying to determine last completed topic...");
            let lastQuestionTopic = shuffledQuestions[0].topic;
            saveCompletedTopic(lastQuestionTopic);
        } else {
            console.log("❌ ERROR: No topic ID found!");
        }

        returnToMenuButton.style.display = "block";
        backToMenuButton.style.display = "none";
        nextButton.style.display = "none";

        markCompletedTopics();
        updateNextSectionLink();
    }
}

// ✅ Load Completed Topics from Local Storage
function getCompletedTopics() {
    return JSON.parse(localStorage.getItem("completedTopics")) || [];
}

// ✅ Save Completed Topics to Local Storage (Only when exercise is completed)
function saveCompletedTopic(topicId) {
    if (!topicId) {
        console.log("❌ ERROR: No topic ID provided to saveCompletedTopic!");
        return;
    }

    let completedTopics = getCompletedTopics();
    console.log("📂 LOCAL STORAGE BEFORE SAVE:", completedTopics);

    if (!completedTopics.includes(topicId)) {
        completedTopics.push(topicId);
        localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
markCompletedTopics(); // ✅ Update the UI after saving
updateNextSectionLink();

        console.log(`✅ Topic '${topicId}' marked as complete!`);
    } else {
        console.log(`⚠️ Topic '${topicId}' was already marked complete.`);
    }

    console.log("📂 LOCAL STORAGE AFTER SAVE:", getCompletedTopics());

    markCompletedTopics();
    updateNextSectionLink();
}

// ✅ Mark Completed Topics on Page Load
function markCompletedTopics() {
    let completedTopics = getCompletedTopics();
    let masteryTopicButtons = document.querySelectorAll(".topic-button-mastery");

    if (masteryTopicButtons.length === 0) {
        console.log("⚠️ No topic buttons found. Skipping marking.");
        return;
    }

    masteryTopicButtons.forEach(button => {
        if (completedTopics.includes(button.dataset.topic)) {
            button.style.backgroundColor = "green"; // Mark completed topics
            console.log(`✅ Marked '${button.dataset.topic}' as completed.`);
        }
    });
}

// ✅ Find the First Incomplete Topic
function getNextTopic() {
    let completedTopics = getCompletedTopics();

    console.log("🔎 Checking for next topic...");
    console.log("✅ Completed topics:", completedTopics);

    for (let chapter of cssChapters) {
        for (let topic of chapter.topics) {
            if (!completedTopics.includes(topic.id)) {
                console.log(`🚀 Next topic to complete: ${topic.topic}`);
                return topic; // ✅ First incomplete topic
            }
        }
    }

    console.log("🎉 All topics completed!");
    return null; // ✅ No incomplete topics left
}

// ✅ Update Next Section Link
function updateNextSectionLink() {
    let nextTopic = getNextTopic();
    let nextSectionDiv = document.querySelector(".grid-right-section");

    if (!nextSectionDiv) {
        console.log("⚠️ No '.grid-right-section' found. Skipping update.");
        return;
    }

    if (!nextTopic) {
        console.log("✅ No more topics left to complete.");
        nextSectionDiv.innerHTML = "<p>All topics completed!</p>";
        return;
    }

    console.log(`🟢 Next section set to: ${nextTopic.topic}`);
    nextSectionDiv.innerHTML = `
        <p>Next Section:</p>
        <a href="#" class="next-topic-link" data-topic-id="${nextTopic.id}">${nextTopic.topic}</a>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        markCompletedTopics();
        updateNextSectionLink();
    }, 100); // Wait briefly to ensure elements are loaded
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("next-topic-link")) {
        event.preventDefault();

        let topicId = event.target.getAttribute("data-topic-id");

        if (!topicId) {
            console.error("❌ ERROR: No topic ID found! Fixing...");
            return;
        }

        console.log(`🔥 Starting quiz for next section: ${topicId}`);

        // ✅ Call startQuiz with correct topic ID
        startQuiz(topicId);
    }
});

let currentTopicId = null;

function startQuiz(topicId) {
    console.log(`🚀 startQuiz() CALLED with topicId = '${topicId}'`);

    if (!topicId) {
        console.error("❌ ERROR: startQuiz() was called WITHOUT a valid topicId!");
        return;
    }

    console.log(`🎯 STARTING quiz for topic: '${topicId}'`);

    // ✅ Ensure we correctly set `currentTopicId`
    currentTopicId = topicId;

    // ✅ Reset the entire quiz state
    shuffledQuestions = [];  // Clear old questions
    currentQuestionIndex = 0;
    correctAnswers = 0;
    previouslyIncorrect.clear();
    
    // ✅ Filter questions properly
    shuffledQuestions = cssBasicsQuestions.filter(q => q.topic === topicId);

    if (shuffledQuestions.length === 0) {
        console.error(`❌ ERROR: No questions found for topic '${topicId}'!`);
        return;
    }

    console.log("📌 Filtered Questions:", shuffledQuestions);

    // ✅ Shuffle the questions
    shuffleArray(shuffledQuestions);
    
    // ✅ Reset tracking variables
    totalQuestions = shuffledQuestions.length; 
    totalAnsweredQuestions = 0;  // Ensure answered count resets
    progressBar.value = 0;  // Reset progress bar immediately
    updateProgress();  // Ensure progress updates instantly

    console.log(`📌 totalQuestions set to: ${totalQuestions}`);

    // ✅ Reset UI Elements
    answerOptions.innerHTML = ""; // Remove old answer buttons
    nextButton.style.display = "none"; 
    returnToMenuButton.style.display = "none"; 

    // ✅ Ensure quiz is displayed properly
    document.getElementById("gridContainer").style.display = "none";
    document.getElementById("quiz-container-mastery").style.display = "block";

    console.log("✅ UI Updated: Grid Hidden, Quiz Shown");

    backToMenuButton.style.display = "block";

    console.log("📌 Resetting progress before starting new topic...");
    progressBar.value = 0; 
    totalAnsweredQuestions = 0;
    correctAnswers = 0; 
    updateProgress(); 

    console.log("📌 Displaying First Question...");
    displayQuestion();
}










// shuffle stuff code stuff 


let shuffleQuestions = [];

document.addEventListener("DOMContentLoaded", () => {
    let shuffleButton = document.getElementById("shuffle-quiz-button");
    let shuffleCurrentIndex = 0;

    const shuffleContainer = document.getElementById("shuffle-container");
    const shuffleQuestionText = document.getElementById("shuffle-question-text");
    const shuffleAnswerOptions = document.getElementById("shuffle-answer-options-mastery");
    const shuffleBackToMenuButton = document.getElementById("shuffle-back-to-menu");
    const shuffleNextButton = document.getElementById("shuffle-next-button");

    shuffleButton.addEventListener("click", () => {
        console.log("🎲 Shuffle button clicked! Switching to shuffle mode...");

        if (!shuffleQuestions || shuffleQuestions.length === 0) {
            console.error("❌ ERROR: No questions available for shuffle!");
            shuffleContainer.innerHTML = "<h2>Error: No questions found!</h2>";
            return;
        }

        document.getElementById("gridContainer").style.display = "none";
        document.getElementById("quiz-container-mastery").style.display = "none";
        shuffleContainer.style.display = "block";
        shuffleCurrentIndex = 0;

        shuffleBackToMenuButton.style.display = "block";

        displayShuffleQuestion();
    });

    function displayShuffleQuestion() {
        if (shuffleCurrentIndex >= shuffleQuestions.length) {
            document.getElementById("shuffle-question-text").innerText = `Shuffled Question ${shuffleCurrentIndex + 1} / ${shuffleQuestions.length}`;
            document.getElementById("shuffle-answer-options-mastery").innerHTML = "";
        
            question.options.forEach(option => {
                let button = document.createElement("button");
                button.innerText = option;
                button.classList.add("shuffle-answer-button-mastery");
                button.addEventListener("click", () => handleShuffleAnswer(button, question.answer));
                document.getElementById("shuffle-answer-options-mastery").appendChild(button);
            });
            
            document.getElementById("shuffle-next-button").style.display = "none";
            console.log("✅ End of shuffle questions.");
            document.getElementById("back-to-menu").addEventListener("click", () => {
                shuffleContainer.style.display = "none";
                document.getElementById("gridContainer").style.display = "grid";
                console.log("🔄 Back to Menu button clicked - Returning to main menu.");
            });
            return;
        }
        let question = shuffleQuestions[shuffleCurrentIndex];
    
        console.log(`🔍 DEBUG: Displaying Question ${shuffleCurrentIndex + 1}/${shuffleQuestions.length}`);
        console.log(`❓ Question: ${question.question}`);
        console.log(`✅ Correct Answer: ${question.answer}`);
    
        shuffleContainer.innerHTML = `
        <h2>Shuffled Question ${shuffleCurrentIndex + 1} / ${shuffleQuestions.length}</h2>
        <p>${question.question}</p>
        <div id="shuffle-answer-options-mastery"></div>
        <button id="shuffle-next-button" style="display: none;">Next</button>
        <button id="shuffle-back-to-menu">Back to Menu</button>
    `;
    
    document.getElementById("shuffle-back-to-menu").addEventListener("click", () => {
        console.log("🔄 Returning to Main Menu from Shuffle Quiz...");
        shuffleContainer.style.display = "none";
        document.getElementById("gridContainer").style.display = "grid";
        console.log("✅ Shuffle Quiz Reset & Menu Restored.");
    });
    
        let answerOptionsDiv = document.getElementById("shuffle-answer-options-mastery");

        question.options.forEach(option => {
            let button = document.createElement("button");
            button.innerHTML = option;
            button.classList.add("shuffle-answer-button-mastery");
            button.addEventListener("click", () => handleShuffleAnswer(button, question.answer));
            answerOptionsDiv.appendChild(button);
        });

        document.getElementById("shuffle-next-button").addEventListener("click", () => {
            shuffleCurrentIndex++;
            displayShuffleQuestion();
        });
    }

    shuffleBackToMenuButton.addEventListener("click", () => {
        shuffleContainer.style.display = "none";
        document.getElementById("gridContainer").style.display = "grid";

    });
    
    function handleShuffleAnswer(button, correctAnswer) {
        const selectedOption = decodeHtmlEntities(button.innerText.trim());
        const decodedCorrectAnswer = decodeHtmlEntities(correctAnswer.trim());
    
        console.log(`Selected Answer: ${selectedOption}`);
        console.log(`Expected Correct Answer: ${decodedCorrectAnswer}`);
    
        if (selectedOption === decodedCorrectAnswer) {
            console.log("🎉 CORRECT ANSWER!");
            button.style.backgroundColor = "lightgreen";
        } else {
            console.log("❌ WRONG ANSWER!");
            button.style.backgroundColor = "lightcoral";
        }
    
        let foundCorrect = false;
        Array.from(document.getElementById("shuffle-answer-options-mastery").children).forEach(btn => {
            if (decodeHtmlEntities(btn.innerText.trim()) === decodedCorrectAnswer) {
                btn.style.backgroundColor = "lightgreen";
                foundCorrect = true;
            }
        });
    
        document.getElementById("shuffle-next-button").style.display = "block";
    }
    
    function decodeHtmlEntities(str) {
        let txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    }

const gridContainer = document.getElementById("gridContainer");

shuffleBackToMenuButton.innerText = "Back to Menu";
shuffleBackToMenuButton.id = "shuffle-back-to-menu";

shuffleContainer.appendChild(shuffleBackToMenuButton);

shuffleButton.addEventListener("click", () => {

    if (!shuffleQuestions || shuffleQuestions.length === 0) {
        shuffleContainer.innerHTML = "<h2>Error: No questions found!</h2>";
        return;
    }

    gridContainer.style.display = "none";
    shuffleContainer.style.display = "block";

    shuffleBackToMenuButton.style.display = "block";

    shuffleCurrentIndex = 0;
    displayShuffleQuestion();
});

shuffleBackToMenuButton.addEventListener("click", () => {
    shuffleContainer.style.display = "none"; // Hide shuffle quiz
    document.getElementById("gridContainer").style.display = "grid"; // Show main menu
});
});