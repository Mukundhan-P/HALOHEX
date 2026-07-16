"""
models.py
---------
Defines the database table(s) used by the app.

We have a single table called "users" that stores every roadmap
that gets generated, along with the inputs that produced it.
"""

from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    goal = Column(String, nullable=False)
    skill_level = Column(String, nullable=False)
    daily_hours = Column(Integer, nullable=False)
    duration = Column(Integer, nullable=False)  # duration in months

    # The full AI-generated roadmap is stored as a JSON string so we
    # keep the exact structure that was shown to the user.
    generated_roadmap = Column(Text, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
