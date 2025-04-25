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

// code for identifying which content goes in each page header. 

const metaTag = document.querySelector('meta[name="page-type"]');
let pageType = null;

if (metaTag) {
    pageType = metaTag.getAttribute('content');
    console.log(`Page type detected: ${pageType}`);
} else {
    console.warn('No page-type meta tag found.');
}

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

// new idea - code 

const completeButton = document.getElementById("mark-complete-button");

document.addEventListener("click", function (event) {
  if (event.target && event.target.id === "mark-complete-button") {
    const url = window.location.pathname;
    const parts = url.split("/");
    const topic = parts.pop().replace(".html", "").replace("-quiz", "");
    const type = url.includes("/study/") ? "mastery" : "tutorial";
    const key = `completed-${topic}-${type}`;

    localStorage.setItem(key, "true");

    event.target.textContent = "Returning to main page...";
    event.target.classList.add("completed");
    setTimeout(() => {
      window.location.href = "/css/learncss.html";
    }, 300);
  }
});

// List of topic buttons to check (use data attributes if needed)
const topicButtons = document.querySelectorAll(".topic-entry");

topicButtons.forEach(entry => {
    const topicLabel = entry.querySelector("span")?.textContent?.toLowerCase().replace(/\s+/g, "-");

    const tutorialBtn = entry.querySelector(".topic-button:nth-of-type(1)");
    const masteryBtn = entry.querySelector(".topic-button:nth-of-type(2)");

    if (tutorialBtn && localStorage.getItem(`completed-${topicLabel}-tutorial`) === "true") {
        tutorialBtn.classList.add("completed");
        tutorialBtn.textContent = "✓ Tutorial";
    }

    if (masteryBtn && localStorage.getItem(`completed-${topicLabel}-mastery`) === "true") {
        masteryBtn.classList.add("completed");
        masteryBtn.textContent = "✓ Mastery";
    }
});


let currentQuestionIndex = 0;

function displayQuestion() {
  const container = document.getElementById("quiz-container");
  const q = quizQuestions[currentQuestionIndex];

  // Clear previous content
  container.innerHTML = "";

  // Create question element
  const questionEl = document.createElement("h2");
  questionEl.textContent = q.question;
  container.appendChild(questionEl);

  // Create choices
  q.choices.forEach((choice, i) => {
    const choiceEl = document.createElement("div");
    choiceEl.textContent = choice;
    choiceEl.classList.add("quiz-choice");
    choiceEl.style.cursor = "pointer";
    choiceEl.addEventListener("click", () => {
      // Prevent multiple selections
      const allChoices = container.querySelectorAll(".quiz-choice");
      allChoices.forEach(c => c.style.pointerEvents = "none");

      // Check if correct
      if (i === q.answer) {
        choiceEl.style.backgroundColor = "#28a745"; // green
        choiceEl.style.color = "#fff";
      } else {
        choiceEl.style.backgroundColor = "#dc3545"; // red
        choiceEl.style.color = "#fff";

        // Highlight correct answer
        allChoices[q.answer].style.backgroundColor = "#28a745";
        allChoices[q.answer].style.color = "#fff";
      }

      // Add "Next" button if it doesn't already exist
      if (!document.getElementById("next-question-button")) {
        const nextButton = document.createElement("button");
        nextButton.id = "next-question-button";
        nextButton.textContent = "Next Question";
        nextButton.classList.add("next-button");
        nextButton.style.marginTop = "20px";
        nextButton.addEventListener("click", () => {
          currentQuestionIndex++;
          if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
          } else {
            container.innerHTML = "";

            const completeMsg = document.createElement("h2");
            container.appendChild(completeMsg);

            const completeButton = document.createElement("button");
            completeButton.id = "mark-complete-button";
            completeButton.className = "topic-complete-button";
            completeButton.textContent = "Complete Lesson";
            container.appendChild(completeButton);
          }
        });
        container.appendChild(nextButton);
      }
    });

    container.appendChild(choiceEl);
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
});

function setupDynamicSubHeader() {
  const titleEl = document.getElementById("sub-header-title");
  const progressEl = document.getElementById("sub-header-progress");

  if (!titleEl || !progressEl) {
    console.log("❌ Missing sub-header elements");
    return;
  }

  // Detect language based on path folder
  const path = (document.referrer || window.location.href).toLowerCase();
  console.log("📂 Detected path:", path);

  const language = path.includes("/css/") ? "CSS"
                : path.includes("/javascript/") ? "JavaScript"
                : path.includes("/html/") ? "HTML"
                : "Course";

  console.log("🌐 Detected language:", language);

  // Detect page type from meta
  const metaType = document.querySelector('meta[name="page-type"]');
  const pageType = metaType ? metaType.getAttribute("content") : "tutorial";
  const capitalizedType = pageType.charAt(0).toUpperCase() + pageType.slice(1);

  console.log("📄 Page type from meta:", pageType);

  // Update header title with clickable language link
  const langLink = language.toLowerCase();
  titleEl.innerHTML = `Learn <a href="/${langLink}/learn${langLink}.html">${language}</a>`;
  console.log("🔠 Header title set to:", titleEl.innerHTML);

  // Define topic list based on language (only CSS for now)
  const topicList = language === "CSS" ? [
    "css-introduction",
    "css-syntax",
    "css-selectors",
    "css-in-html",
    "css-colors"
  ] : [];

  const completed = topicList.filter(topic => {
    const key = `completed-${topic}-${pageType}`;
    return localStorage.getItem(key) === "true";
  });

  console.log("✅ Completed topics:", completed.length, "of", topicList.length);

  // If in quiz mode, show question progress
  const isQuizPage = document.getElementById("quiz-container") !== null;

  if (isQuizPage && typeof quizQuestions !== "undefined" && Array.isArray(quizQuestions)) {
    const current = Math.min(currentQuestionIndex + 1, quizQuestions.length);
    progressEl.textContent = `${current} / ${quizQuestions.length}`;
  } else {
    // Fallback for tutorial/study topic-based progress
    progressEl.textContent = `${completed.length} / ${topicList.length}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupDynamicSubHeader();
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("/sub-header.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("sub-header-container");
      if (container) {
        container.innerHTML = html;
        if (typeof setupDynamicSubHeader === "function") {
          setupDynamicSubHeader();
        }
      }
    })
    .catch(err => console.error("Failed to load sub-header:", err));
});