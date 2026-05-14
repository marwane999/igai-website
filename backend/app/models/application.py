import uuid
from datetime import datetime, timezone

from sqlalchemy import Boolean, CheckConstraint, Column, Date, DateTime, String, Text
from sqlalchemy.dialects.postgresql import JSONB, UUID

from app.core.database import Base


class Application(Base):
    __tablename__ = "applications"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, server_default="gen_random_uuid()")

    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    date_of_birth = Column(Date, nullable=False)
    email = Column(String(255), nullable=False)
    gender = Column(String(10), nullable=False)
    marital_status = Column(String(10), nullable=False)
    nationality = Column(String(100), nullable=False)
    occupation = Column(Text, nullable=False)
    address = Column(Text, nullable=False)
    permanent_address = Column(Text, nullable=True)
    phone = Column(String(50), nullable=False)
    passport_number = Column(String(50), nullable=True)
    emergency_contact = Column(Text, nullable=False)

    familiar_with_script = Column(Boolean, nullable=False)
    studied_before = Column(Boolean, nullable=False)
    previous_study = Column(JSONB, default=[], server_default="'[]'::jsonb")
    spoken_level = Column(String(10), nullable=False)
    reading_level = Column(String(10), nullable=False)
    writing_level = Column(String(10), nullable=False)
    aural_level = Column(String(10), nullable=False)
    english_level = Column(String(10), nullable=False)
    french_level = Column(String(10), nullable=False)

    been_to_arab_country = Column(Boolean, nullable=False)
    been_to_morocco = Column(Boolean, nullable=True)
    needs_housing = Column(Boolean, nullable=False)
    housing_preference = Column(String(20), nullable=False)
    term_preference = Column(String(20), nullable=False)
    special_needs = Column(Text, nullable=True)

    personal_statement = Column(Text, nullable=False)

    ip_address = Column(String(45), nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), server_default="NOW()")
    status = Column(String(20), default="pending", server_default="'pending'")

    __table_args__ = (
        CheckConstraint("gender IN ('male', 'female')", name="ck_application_gender"),
        CheckConstraint("marital_status IN ('single', 'married')", name="ck_application_marital_status"),
        CheckConstraint("housing_preference IN ('igai-residence', 'homestay')", name="ck_application_housing_preference"),
        CheckConstraint("status IN ('pending', 'reviewed', 'accepted', 'rejected')", name="ck_application_status"),
    )
