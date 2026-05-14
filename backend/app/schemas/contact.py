from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    success: bool = True
    id: str

    class Config:
        from_attributes = True


class ContactOut(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    ip_address: str | None = None
    created_at: datetime
    is_read: bool

    class Config:
        from_attributes = True
