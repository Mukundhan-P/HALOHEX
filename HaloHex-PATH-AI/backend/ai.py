"""
ai.py
-----
Handles all communication with the Google Gemini API.

We ask Gemini to return a single, clean JSON object containing the
full personalized learning roadmap, and we parse that JSON so the
rest of the app can work with a normal Python dictionary.

If no GEMINI_API_KEY is configured (or the call fails for any reason),
we fall back to a locally generated demo roadmap so the app still works
end-to-end for demos / hackathon judging without any API key.
"""

import os
import json
import re

from google import genai

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")

_client = genai.Client(api_key=GEMINI_API_KEY) if GEMINI_API_KEY else None


def build_prompt(name: str, goal: str, skill_level: str, daily_hours: int, duration: int) -> str:
    """Builds the instruction prompt we send to Gemini."""
    return f"""
You are an expert career mentor and curriculum designer.

Create a personalized learning roadmap for the following student:

Name: {name}
Career Goal: {goal}
Current Skill Level: {skill_level}
Daily Study Hours Available: {daily_hours}
Target Duration: {duration} months

Return ONLY a valid JSON object (no markdown fences, no extra text) with
EXACTLY this structure:

{{
  "roadmap": [
    {{"week": 1, "topics": ["topic1", "topic2"]}},
    {{"week": 2, "topics": ["topic1"]}}
  ],
  "weekly_plan_summary": "A short paragraph describing how the weeks are organized and why the order was chosen.",
  "resources": {{
    "documentation": ["..."],
    "youtube_channels": ["..."],
    "practice_websites": ["..."],
    "courses": ["..."]
  }},
  "projects": {{
    "beginner": ["..."],
    "intermediate": ["..."],
    "final_capstone": "One clearly described final project"
  }},
  "estimated_completion": "A specific estimated completion date or timeframe description",
  "motivation_message": "A short, encouraging motivational message personalized with the student's name and goal"
}}

Make sure:
- Topics are ordered by prerequisite (fundamentals first).
- The number of weeks matches roughly {duration * 4} weeks (duration in months x 4).
- The plan matches the {daily_hours} hours/day pace and {skill_level} level.
- The JSON is syntactically valid and nothing else is written outside the JSON object.
"""


def _extract_json(text: str) -> dict:
    """Gemini sometimes wraps JSON in ```json fences - strip those if present."""
    cleaned = text.strip()
    cleaned = re.sub(r"^```json\s*|^```\s*|```$", "", cleaned, flags=re.MULTILINE).strip()
    return json.loads(cleaned)


def _fallback_roadmap(name: str, goal: str, skill_level: str, daily_hours: int, duration: int) -> dict:
    """
    A safe, always-available demo roadmap used when GEMINI_API_KEY is not
    set or the API call fails. This keeps the app fully functional for
    demos without requiring any external setup.
    """
    total_weeks = max(duration * 4, 4)
    sample_topics = [
        ["Fundamentals & Environment Setup"],
        ["Core Syntax & Basics"],
        ["Data Structures"],
        ["Functions & Problem Solving"],
        ["Intermediate Concepts"],
        ["Hands-on Mini Project 1"],
        ["Frameworks / Libraries for " + goal],
        ["Hands-on Mini Project 2"],
        ["Advanced Topics"],
        ["Real-world Case Studies"],
        ["Capstone Planning"],
        ["Capstone Build & Polish"],
    ]
    roadmap = []
    for i in range(total_weeks):
        topics = sample_topics[i % len(sample_topics)]
        roadmap.append({"week": i + 1, "topics": topics})

    return {
        "roadmap": roadmap,
        "weekly_plan_summary": (
            f"This {duration}-month plan is paced for {daily_hours} hour(s) of daily study, "
            f"starting from a {skill_level.lower()} level and moving from fundamentals "
            f"toward job-ready {goal} skills, in prerequisite order."
        ),
        "resources": {
            "documentation": ["Official docs for your chosen language/framework"],
            "youtube_channels": ["freeCodeCamp", "Traversy Media", "CS Dojo"],
            "practice_websites": ["LeetCode", "HackerRank", "Kaggle"],
            "courses": ["Coursera", "Udemy", "freeCodeCamp Curriculum"],
        },
        "projects": {
            "beginner": ["Calculator App", "To-Do List App"],
            "intermediate": ["Student Management System", "Weather Dashboard"],
            "final_capstone": f"Build a complete end-to-end project relevant to {goal} "
                               f"that showcases everything learned in this roadmap.",
        },
        "estimated_completion": f"Approximately {duration} months at {daily_hours} hour(s)/day.",
        "motivation_message": (
            f"{name}, every expert was once a beginner. Stay consistent with your "
            f"{daily_hours} hour(s) a day and in {duration} months you'll be ready "
            f"to work as a {goal}. You've got this!"
        ),
        "note": "Demo roadmap (GEMINI_API_KEY not configured or API call failed).",
    }


def generate_roadmap(name: str, goal: str, skill_level: str, daily_hours: int, duration: int) -> dict:
    """
    Main entry point used by the FastAPI route.
    Tries Gemini first, falls back to a local demo roadmap on any failure.
    """
    if not _client:
        return _fallback_roadmap(name, goal, skill_level, daily_hours, duration)

    try:
        prompt = build_prompt(name, goal, skill_level, daily_hours, duration)
        response = _client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )
        return _extract_json(response.text)
    except Exception as error:  # noqa: BLE001 - we want any failure to fall back gracefully
        fallback = _fallback_roadmap(name, goal, skill_level, daily_hours, duration)
        fallback["note"] = f"Falling back to demo roadmap because Gemini call failed: {error}"
        return fallback
