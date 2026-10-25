from pydantic import BaseModel, Field

class QuestionEvaluateRequest(BaseModel):
    new_question: str = Field(..., min_length=3, max_length=500)
    existing_questions: list[str] = Field(default_factory=list)
    custom_threshold: float | None = Field(default=None, ge=0.4, le=0.99)

class QuestionEvaluateResponse(BaseModel):
    is_duplicate: bool
    matched_question: str | None = None
    similarity_score: float
    threshold_applied: float
    classification: str
