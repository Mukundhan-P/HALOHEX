/* ==========================================================
   app.js — shared helpers for logged-in pages
   (Dashboard, Generate, Progress, Profile)

   IMPORTANT — read this before wiring up your backend:
   This frontend does not have a real auth backend yet, so
   there is no persisted login session. CURRENT_USER below is
   placeholder demo data just so every page has something to
   display.

   To wire this up for real:
     1. Add a proper "accounts" table + POST /register and
        POST /login endpoints to the FastAPI backend (don't
        reuse the existing "users" table in models.py — that
        one stores generated roadmaps, not login accounts).
     2. On successful login, the backend should return a
        session token (e.g. a JWT). Store it in memory / an
        HttpOnly cookie set by the backend — NOT localStorage,
        which is easy to steal via XSS.
     3. Replace CURRENT_USER below with a real fetch to something
        like GET /me that reads the token and returns the
        logged-in user's profile.
   ========================================================== */

// Load CURRENT_USER from localStorage or use defaults
let CURRENT_USER = JSON.parse(localStorage.getItem("CURRENT_USER"));
if (!CURRENT_USER) {
  CURRENT_USER = {
    name: "Ananya Sharma",
    email: "ananya.sharma@example.com",
    goal: "Machine Learning Engineer",
    skillLevel: "Beginner",
    dailyHours: 2,
    duration: 6,
    memberSince: "July 2026",
  };
  localStorage.setItem("CURRENT_USER", JSON.stringify(CURRENT_USER));
}

function saveCurrentUser(user) {
  CURRENT_USER = user;
  localStorage.setItem("CURRENT_USER", JSON.stringify(CURRENT_USER));
}

function getNormalizedGoal(goal) {
  if (!goal) return "Machine Learning";
  const g = goal.toLowerCase();
  if (g.includes("full") || g.includes("stack")) {
    return "Full Stack Developer";
  }
  return "Machine Learning";
}

function getRoadmapProgress() {
  let progress = JSON.parse(localStorage.getItem("halohex_progress"));
  if (!progress) {
    progress = {
      "Machine Learning": {
        highestUnlockedWeek: 1,
        scores: {}
      },
      "Full Stack Developer": {
        highestUnlockedWeek: 1,
        scores: {}
      }
    };
    localStorage.setItem("halohex_progress", JSON.stringify(progress));
  }
  return progress;
}

function saveRoadmapProgress(progress) {
  localStorage.setItem("halohex_progress", JSON.stringify(progress));
}

function getInitials(fullName) {
  if (!fullName) return "";
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

// Fills in every element with data-user="field" using CURRENT_USER.
// e.g. <span data-user="name"></span> -> "Ananya Sharma"
function hydrateUserChips() {
  document.querySelectorAll("[data-user]").forEach((el) => {
    const field = el.getAttribute("data-user");
    if (field === "initials") {
      el.textContent = getInitials(CURRENT_USER.name);
    } else if (CURRENT_USER[field] !== undefined) {
      el.textContent = CURRENT_USER[field];
    }
  });
}

// Marks the sidebar link matching the current page as active,
// based on the <body data-page="..."> attribute.
function highlightActiveNavLink() {
  const page = document.body.dataset.page;
  if (!page) return;
  const link = document.querySelector(`.sidebar-link[data-page="${page}"]`);
  if (link) link.classList.add("active");
}

// Placeholder logout — clear this out and point it at a real
// POST /logout endpoint once auth exists on the backend.
function handleLogout(e) {
  if (e) e.preventDefault();
  window.location.href = "login.html";
}

// Small toast notification used across pages (e.g. "Profile updated").
function showToast(message, icon = "fa-circle-check") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
  toast.classList.add("show");
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateUserChips();
  highlightActiveNavLink();

  const logoutLink = document.getElementById("logoutLink");
  if (logoutLink) logoutLink.addEventListener("click", handleLogout);
});
