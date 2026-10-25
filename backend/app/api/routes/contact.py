from fastapi import APIRouter, HTTPException, status
from datetime import datetime, timezone
from app.schemas.contact import ContactMessageCreate, ContactMessageResponse
from app.core.logging import logger

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("", response_model=ContactMessageResponse)
async def submit_contact_message(payload: ContactMessageCreate):
    # Spam honeypot trap
    if payload.honeypot.strip():
        logger.warning("Spam honeypot triggered by submission.")
        # Silently succeed to mislead bots
        return ContactMessageResponse(
            success=True,
            message="Message received successfully.",
            timestamp=datetime.now(timezone.utc).isoformat()
        )

    logger.info("Received valid message from: %s (%s)", payload.name, payload.email)
    
    return ContactMessageResponse(
        success=True,
        message="Message validated and logged for direct review.",
        timestamp=datetime.now(timezone.utc).isoformat()
    )
