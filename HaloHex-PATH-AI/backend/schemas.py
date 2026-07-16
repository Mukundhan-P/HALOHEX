"""
schemas.py
----------
Pydantic models used to validate incoming requests and shape
outgoing responses for the FastAPI endpoints.
"""

from pydantic import BaseModel, Field


class RoadmapRequest(BaseModel):
    """What the frontend sends when the user submits the form."""

    name: str = Field(..., min_length=1, example="Priya")
    goal: str = Field(..., min_length=1, example="Machine Learning Engineer")
    skill_level: str = Field(..., example="Beginner")  # Beginner / Intermediate / Advanced
    daily_hours: int = Field(..., gt=0, le=24, example=2)
    duration: int = Field(..., gt=0, le=36, example=6)  # months


class RoadmapResponse(BaseModel):
    """What we send back to the frontend after generating a roadmap."""

    id: int
    name: str
    goal: str
    skill_level: str
    daily_hours: int
    duration: int
    roadmap: dict
    created_at: str
