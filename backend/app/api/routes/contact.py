from fastapi import APIRouter, Depends, Request
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.database import get_db
from app.models.contact import ContactSubmission
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.email_service import send_email

router = APIRouter(tags=["contact"])


@router.post("/api/contact", response_model=ContactResponse)
async def submit_contact(
    data: ContactCreate,
    request: Request,
    db: AsyncSession = Depends(get_db),
):
    submission = ContactSubmission(
        name=data.name,
        email=data.email,
        subject=data.subject,
        message=data.message,
        ip_address=request.client.host if request.client else None,
    )
    db.add(submission)
    await db.flush()
    await db.refresh(submission)

    admin_body = (
        f"New contact form submission:\n\n"
        f"Name: {data.name}\n"
        f"Email: {data.email}\n"
        f"Subject: {data.subject}\n"
        f"Message:\n{data.message}\n"
        f"IP: {request.client.host if request.client else 'Unknown'}"
    )
    send_email(
        to_email=settings.CONTACT_EMAIL,
        subject=f"New Contact: {data.subject}",
        body=admin_body,
    )

    return ContactResponse(success=True, id=str(submission.id))
