from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.newsletter import NewsletterSubscriber
from app.schemas.newsletter import NewsletterCreate, NewsletterResponse

router = APIRouter(tags=["newsletter"])


@router.post("/api/newsletter", response_model=NewsletterResponse)
async def subscribe_newsletter(
    data: NewsletterCreate,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(NewsletterSubscriber).where(NewsletterSubscriber.email == data.email)
    )
    subscriber = result.scalar_one_or_none()

    if subscriber:
        if not subscriber.is_active:
            subscriber.is_active = True
            subscriber.subscribed_at = datetime.now(timezone.utc)
            subscriber.unsubscribed_at = None
            await db.flush()
            return NewsletterResponse(success=True, message="Successfully re-subscribed to newsletter")
        return NewsletterResponse(success=True, message="Email is already subscribed")

    subscriber = NewsletterSubscriber(email=data.email)
    db.add(subscriber)
    await db.flush()

    return NewsletterResponse(success=True, message="Successfully subscribed to newsletter")
