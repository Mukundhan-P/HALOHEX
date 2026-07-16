"""
database.py
------------
Sets up the SQLite database connection and the SQLAlchemy session
that the rest of the backend uses to talk to the database.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# The database file will be created automatically in the backend folder
# the first time the app runs. No manual setup needed.
SQLALCHEMY_DATABASE_URL = "sqlite:///./database.db"

# `check_same_thread=False` is required only for SQLite so that FastAPI
# (which can use multiple threads) can share the same connection safely.
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# Each instance of SessionLocal is a database session.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class that our models.py file will inherit from.
Base = declarative_base()


def get_db():
    """
    FastAPI dependency that provides a database session for each request
    and makes sure it is closed afterwards, even if an error occurs.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
