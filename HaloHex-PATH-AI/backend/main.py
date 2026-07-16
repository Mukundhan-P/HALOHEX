"""
main.py
-------
The FastAPI application entry point.

Run with:
    uvicorn main:app --reload

Exposes:
    POST /generate-roadmap   -> generates & saves a personalized roadmap
    GET  /history            -> lists previously generated roadmaps
    GET  /                   -> serves the frontend (index.html)
"""

import json

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
from database import engine, get_db
from ai import generate_roadmap

# Create the database tables on startup if they don't already exist.
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="HaloHex PATH AI", description="AI-Powered Personalized Learning Path Generator")

# Allow the frontend (served from anywhere, e.g. a different port) to call the API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate-roadmap", response_model=schemas.RoadmapResponse)
def create_roadmap(request: schemas.RoadmapRequest, db: Session = Depends(get_db)):
    """Generates a personalized roadmap using AI and stores it in the database."""

    valid_levels = {"Beginner", "Intermediate", "Advanced"}
    if request.skill_level not in valid_levels:
        raise HTTPException(status_code=400, detail="skill_level must be Beginner, Intermediate, or Advanced")

    roadmap_data = generate_roadmap(
        name=request.name,
        goal=request.goal,
        skill_level=request.skill_level,
        daily_hours=request.daily_hours,
        duration=request.duration,
    )

    db_user = models.User(
        name=request.name,
        goal=request.goal,
        skill_level=request.skill_level,
        daily_hours=request.daily_hours,
        duration=request.duration,
        generated_roadmap=json.dumps(roadmap_data),
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return schemas.RoadmapResponse(
        id=db_user.id,
        name=db_user.name,
        goal=db_user.goal,
        skill_level=db_user.skill_level,
        daily_hours=db_user.daily_hours,
        duration=db_user.duration,
        roadmap=roadmap_data,
        created_at=str(db_user.created_at),
    )


@app.get("/history")
def get_history(db: Session = Depends(get_db)):
    """Returns all previously generated roadmaps, most recent first."""
    users = db.query(models.User).order_by(models.User.id.desc()).all()
    return [
        {
            "id": u.id,
            "name": u.name,
            "goal": u.goal,
            "skill_level": u.skill_level,
            "daily_hours": u.daily_hours,
            "duration": u.duration,
            "roadmap": json.loads(u.generated_roadmap),
            "created_at": str(u.created_at),
        }
        for u in users
    ]


@app.get("/")
def health_check():
    """Simple health check. Open frontend/index.html in your browser to use the app."""
    return {"status": "HaloHex PATH AI backend is running", "docs": "/docs"}
