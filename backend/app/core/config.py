import os
from pydantic import BaseModel

class Settings(BaseModel):
    PROJECT_NAME: str = "AI Backend Portfolio API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # CORS Configuration
    CORS_ORIGINS: list[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "https://abhinav-tiwari.vercel.app"
    ]
    
    # Optional notification email configuration
    CONTACT_RECIPIENT_EMAIL: str = os.getenv("CONTACT_RECIPIENT_EMAIL", "tiwariabhinav164@gmail.com")
    SIMILARITY_THRESHOLD: float = float(os.getenv("SIMILARITY_THRESHOLD", "0.72"))

settings = Settings()
