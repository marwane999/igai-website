from datetime import datetime

from pydantic import BaseModel, EmailStr


class NewsletterCreate(BaseModel):
    email: EmailStr


class NewsletterResponse(BaseModel):
    success: bool = True
    message: str = "Successfully subscribed to newsletter"

    class Config:
        from_attributes = True


class NewsletterOut(BaseModel):
    id: str
    email: str
    subscribed_at: datetime
    is_active: bool
    unsubscribed_at: datetime | None = None

    class Config:
        from_attributes = True
