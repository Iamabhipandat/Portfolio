from pydantic import BaseModel, EmailStr, Field

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(default="", max_length=150)
    message: str = Field(..., min_length=10, max_length=3000)
    honeypot: str = Field(default="", max_length=50)

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
    timestamp: str
