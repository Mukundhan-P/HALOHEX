/* ==========================================================
   HaloHex PATH AI — Frontend logic
   Talks to the FastAPI backend at BACKEND_URL and renders
   the AI-generated roadmap into the results section.
   ========================================================== */

// Change this if your backend runs on a different host/port.
const BACKEND_URL = "http://127.0.0.1:8000";

const heroSection = document.getElementById("hero");
const formSection = document.getElementById("formSection");
const loadingSection = document.getElementById("loadingSection");
const resultsSection = document.getElementById("resultsSection");

const roadmapForm = document.getElementById("roadmapForm");
const submitBtn = document.getElementById("submitBtn");
const ctaBtn = document.getElementById("ctaBtn");
const restartBtn = document.getElementById("restartBtn");

// Scroll to the form when the hero CTA is clicked (only present on landing.html).
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    formSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Convenience: prefill the name field from the logged-in user (see app.js).
// Once real auth exists, CURRENT_USER will come from a session/profile fetch.
document.addEventListener("DOMContentLoaded", () => {
  const nameField = document.getElementById("name");
  if (nameField && typeof CURRENT_USER !== "undefined" && CURRENT_USER.name) {
    nameField.value = CURRENT_USER.name;
  }
});

roadmapForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("name").value.trim(),
    goal: document.getElementById("goal").value.trim(),
    skill_level: document.getElementById("skillLevel").value,
    daily_hours: parseInt(document.getElementById("dailyHours").value, 10),
    duration: parseInt(document.getElementById("duration").value, 10),
  };

  showLoading(payload.goal);

  try {
    const response = await fetch(`${BACKEND_URL}/generate-roadmap`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.detail || `Request failed with status ${response.status}`);
    }

    const data = await response.json();
    renderResults(payload, data.roadmap);
  } catch (err) {
    console.error(err);
    showError(err.message);
  }
});

restartBtn.addEventListener("click", () => {
  resultsSection.style.display = "none";
  formSection.style.display = "block";
  formSection.scrollIntoView({ behavior: "smooth" });
});

function showLoading(goal) {
  formSection.style.display = "none";
  resultsSection.style.display = "none";
  loadingSection.style.display = "block";
  document.getElementById("loadingGoal").textContent = goal || "your field";
  submitBtn.disabled = true;
  loadingSection.scrollIntoView({ behavior: "smooth" });
}

function showError(message) {
  loadingSection.style.display = "none";
  formSection.style.display = "block";
  submitBtn.disabled = false;
  alert(
    "Couldn't generate your roadmap.\n\n" +
    message +
    "\n\nMake sure the backend server is running at " + BACKEND_URL
  );
}

function renderResults(userInput, roadmap) {
  loadingSection.style.display = "none";
  resultsSection.style.display = "block";
  submitBtn.disabled = false;

  document.getElementById("resultName").textContent = `${userInput.name}'s`;
  document.getElementById("motivationMessage").textContent = roadmap.motivation_message || "";
  document.getElementById("weeklySummary").textContent = roadmap.weekly_plan_summary || "";
  document.getElementById("estimatedCompletion").textContent = roadmap.estimated_completion || "";
  document.getElementById("finalProject").textContent =
    (roadmap.projects && roadmap.projects.final_capstone) || "";

  // Week-by-week roadmap
  const roadmapList = document.getElementById("roadmapList");
  roadmapList.innerHTML = "";
  (roadmap.roadmap || []).forEach((weekObj) => {
    const item = document.createElement("div");
    item.className = "week-item";
    const topics = (weekObj.topics || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    item.innerHTML = `
      <div class="week-num">Week ${weekObj.week}</div>
      <ul>${topics}</ul>
    `;
    roadmapList.appendChild(item);
  });

  // Resources
  const resourcesList = document.getElementById("resourcesList");
  resourcesList.innerHTML = "";
  const resources = roadmap.resources || {};
  const resourceLabels = {
    documentation: "Documentation",
    youtube_channels: "YouTube Channels",
    practice_websites: "Practice Websites",
    courses: "Courses",
  };
  Object.keys(resourceLabels).forEach((key) => {
    if (resources[key] && resources[key].length) {
      resourcesList.appendChild(buildTagGroup(resourceLabels[key], resources[key]));
    }
  });

  // Projects
  const projectsList = document.getElementById("projectsList");
  projectsList.innerHTML = "";
  const projects = roadmap.projects || {};
  if (projects.beginner && projects.beginner.length) {
    projectsList.appendChild(buildTagGroup("Beginner", projects.beginner));
  }
  if (projects.intermediate && projects.intermediate.length) {
    projectsList.appendChild(buildTagGroup("Intermediate", projects.intermediate));
  }

  resultsSection.scrollIntoView({ behavior: "smooth" });
}

function buildTagGroup(label, items) {
  const group = document.createElement("div");
  group.className = "tag-group";
  const tags = items.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join("");
  group.innerHTML = `<span class="tag-group-label">${escapeHtml(label)}</span><div class="tag-list">${tags}</div>`;
  return group;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
