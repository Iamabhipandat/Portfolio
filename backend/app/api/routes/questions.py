from fastapi import APIRouter
from app.schemas.question import QuestionEvaluateRequest, QuestionEvaluateResponse
from app.services.dedup_service import DeduplicationService
from app.core.config import settings

router = APIRouter(prefix="/questions", tags=["Questions"])

@router.post("/dedup", response_model=QuestionEvaluateResponse)
async def evaluate_question(payload: QuestionEvaluateRequest):
    threshold = payload.custom_threshold if payload.custom_threshold is not None else settings.SIMILARITY_THRESHOLD
    is_dup, matched_q, score = DeduplicationService.evaluate(
        new_question=payload.new_question,
        existing_questions=payload.existing_questions,
        threshold=threshold
    )
    
    return QuestionEvaluateResponse(
        is_duplicate=is_dup,
        matched_question=matched_q,
        similarity_score=score,
        threshold_applied=threshold,
        classification="DUPLICATE" if is_dup else "UNIQUE"
    )
