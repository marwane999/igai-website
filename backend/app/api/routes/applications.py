from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.database import get_db
from app.models.application import Application
from app.schemas.application import ApplicationCreate, ApplicationResponse
from app.services.email_service import send_email

router = APIRouter(tags=["applications"])


@router.post("/api/applications", response_model=ApplicationResponse)
async def submit_application(
    data: ApplicationCreate,
    request: Request,
    db: AsyncSession = Depends(get_db),
):
    application = Application(
        first_name=data.first_name,
        last_name=data.last_name,
        date_of_birth=data.date_of_birth,
        email=data.email,
        gender=data.gender,
        marital_status=data.marital_status,
        nationality=data.nationality,
        occupation=data.occupation,
        address=data.address,
        permanent_address=data.permanent_address,
        phone=data.phone,
        passport_number=data.passport_number,
        emergency_contact=data.emergency_contact,
        familiar_with_script=data.familiar_with_script,
        studied_before=data.studied_before,
        previous_study=[ps.model_dump() for ps in data.previous_study],
        spoken_level=data.spoken_level,
        reading_level=data.reading_level,
        writing_level=data.writing_level,
        aural_level=data.aural_level,
        english_level=data.english_level,
        french_level=data.french_level,
        been_to_arab_country=data.been_to_arab_country,
        been_to_morocco=data.been_to_morocco,
        needs_housing=data.needs_housing,
        housing_preference=data.housing_preference,
        term_preference=data.term_preference,
        special_needs=data.special_needs,
        personal_statement=data.personal_statement,
        ip_address=request.client.host if request.client else None,
    )
    db.add(application)
    await db.flush()
    await db.refresh(application)

    auto_reply_body = (
        f"Dear {data.first_name},\n\n"
        f"Thank you for your application to {settings.APP_NAME}.\n"
        f"We have received your application and will review it shortly.\n"
        f"Your application ID is: {application.id}\n\n"
        f"Best regards,\nThe Admissions Team"
    )
    send_email(
        to_email=data.email,
        subject=f"Application Received - {settings.APP_NAME}",
        body=auto_reply_body,
    )

    admin_body = (
        f"New application submitted:\n\n"
        f"Name: {data.first_name} {data.last_name}\n"
        f"Email: {data.email}\n"
        f"Nationality: {data.nationality}\n"
        f"Term: {data.term_preference}\n"
        f"Applied on: {application.created_at}\n"
        f"IP: {request.client.host if request.client else 'Unknown'}"
    )
    send_email(
        to_email=settings.CONTACT_EMAIL,
        subject=f"New Application: {data.first_name} {data.last_name}",
        body=admin_body,
    )

    return ApplicationResponse(success=True, id=str(application.id))
