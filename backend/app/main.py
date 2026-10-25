from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.logging import setup_logging
from app.api.routes import health, questions, contact

setup_logging()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Python FastAPI backend powering VisionMeet AI question analysis and portfolio telemetry."
)

# CORS Middleware Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Include Routers under API_V1_STR
app.include_router(health.router, prefix=settings.API_V1_STR)
app.include_router(questions.router, prefix=settings.API_V1_STR)
app.include_router(contact.router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {
        "title": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "ONLINE",
        "docs_url": "/docs"
    }
