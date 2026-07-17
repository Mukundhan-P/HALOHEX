/* ==========================================================
   HaloHex PATH AI — Frontend logic for 2-step path generation
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // State variables
  let currentStep = 1;
  let selectedExperience = 'Beginner';
  let selectedDays = 5;
  let selectedWeeks = 16;

  // DOM Elements
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');

  const badge1 = document.getElementById('badge1');
  const badge2 = document.getElementById('badge2');
  const line1 = document.getElementById('line1');

  const btnBack = document.getElementById('btnBack');
  const btnContinue = document.getElementById('btnContinue');
  const btnGenerate = document.getElementById('btnGenerate');

  // STEP 1 Event Listeners
  const careerGoalInput = document.getElementById('careerGoalInput');
  const popularGoals = document.querySelectorAll('#popularGoalsList button');
  popularGoals.forEach(btn => {
    btn.addEventListener('click', () => {
      careerGoalInput.value = btn.dataset.value;
    });
  });

  const experienceButtons = document.querySelectorAll('#experienceLevelRow button');
  experienceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      experienceButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedExperience = btn.dataset.level;
    });
  });

  // STEP 2 Event Listeners & Calculations
  const hoursSlider = document.getElementById('hoursSlider');
  const hoursDisplayVal = document.getElementById('hoursDisplayVal');
  const daysDisplayVal = document.getElementById('daysDisplayVal');
  const durationDisplayVal = document.getElementById('durationDisplayVal');
  const totalHoursDisplay = document.getElementById('totalHoursDisplay');
  const formulaDisplay = document.getElementById('formulaDisplay');

  function updateScheduleCalculations() {
    const hours = parseFloat(hoursSlider.value);
    hoursDisplayVal.textContent = hours + 'h';
    daysDisplayVal.textContent = selectedDays + ' days';
    durationDisplayVal.textContent = selectedWeeks + ' weeks';

    const totalHours = Math.round(hours * selectedDays * selectedWeeks);
    totalHoursDisplay.textContent = totalHours + ' hours';
    formulaDisplay.textContent = `${hours}h/day × ${selectedDays} days × ${selectedWeeks} weeks`;
  }

  if (hoursSlider) {
    hoursSlider.addEventListener('input', updateScheduleCalculations);
  }

  const daysButtons = document.querySelectorAll('#daysWeekRow button');
  daysButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      daysButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedDays = parseInt(btn.dataset.days, 10);
      updateScheduleCalculations();
    });
  });

  const durationButtons = document.querySelectorAll('#durationRow button');
  durationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      durationButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedWeeks = parseInt(btn.dataset.weeks, 10);
      updateScheduleCalculations();
    });
  });

  // Navigation Logic
  function showStep(step) {
    if (step === 1) {
      step1.classList.add('active');
      step2.classList.remove('active');
      
      badge1.className = 'step-badge active';
      badge2.className = 'step-badge pending';
      line1.className = 'step-line';
      
      btnBack.classList.add('hidden');
      btnContinue.classList.remove('hidden');
      btnGenerate.classList.add('hidden');
    } else {
      step1.classList.remove('active');
      step2.classList.add('active');
      
      badge1.className = 'step-badge completed';
      badge2.className = 'step-badge active';
      line1.className = 'step-line completed';
      
      btnBack.classList.remove('hidden');
      btnContinue.classList.add('hidden');
      btnGenerate.classList.remove('hidden');
    }
  }

  btnContinue.addEventListener('click', () => {
    const goal = careerGoalInput.value.trim();
    if (!goal) {
      alert('Please specify your career goal to continue.');
      return;
    }
    currentStep = 2;
    showStep(2);
  });

  btnBack.addEventListener('click', () => {
    currentStep = 1;
    showStep(1);
  });

  btnGenerate.addEventListener('click', () => {
    const goalVal = careerGoalInput.value.trim();
    const hours = parseFloat(hoursSlider.value);
    const durationMonths = Math.round(selectedWeeks / 4) || 1;

    // Prefill name if missing
    if (!CURRENT_USER.name) {
      CURRENT_USER.name = "Ananya Sharma";
    }

    // Save user selections
    CURRENT_USER.goal = goalVal;
    CURRENT_USER.skillLevel = selectedExperience;
    CURRENT_USER.dailyHours = hours;
    CURRENT_USER.duration = durationMonths;

    // New pacing variables
    CURRENT_USER.daysPerWeek = selectedDays;
    CURRENT_USER.durationWeeks = selectedWeeks;

    saveCurrentUser(CURRENT_USER);

    // Sync selected_goal in localStorage so progress.html is fully updated
    localStorage.setItem("selected_goal", getNormalizedGoal(goalVal));

    // Redirect to roadmap progress section
    window.location.href = "progress.html";
  });

  // Prefill fields from CURRENT_USER on load
  if (CURRENT_USER) {
    if (CURRENT_USER.goal) {
      careerGoalInput.value = CURRENT_USER.goal;
    }
    if (CURRENT_USER.skillLevel) {
      selectedExperience = CURRENT_USER.skillLevel;
      experienceButtons.forEach(btn => {
        if (btn.dataset.level === selectedExperience) {
          experienceButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    }
    if (CURRENT_USER.dailyHours) {
      hoursSlider.value = CURRENT_USER.dailyHours;
    }
    if (CURRENT_USER.daysPerWeek) {
      selectedDays = CURRENT_USER.daysPerWeek;
      daysButtons.forEach(btn => {
        if (parseInt(btn.dataset.days, 10) === selectedDays) {
          daysButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    }
    if (CURRENT_USER.durationWeeks) {
      selectedWeeks = CURRENT_USER.durationWeeks;
      durationButtons.forEach(btn => {
        if (parseInt(btn.dataset.weeks, 10) === selectedWeeks) {
          durationButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    }
  }

  // Initial calculations and view setup
  updateScheduleCalculations();
  showStep(1);
});
