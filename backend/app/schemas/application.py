from datetime import date, datetime

from pydantic import BaseModel, EmailStr, Field, field_validator


class PreviousStudy(BaseModel):
    duration: str = ""
    institution: str = ""
    level: str = ""
    books: str = ""
    units: str = ""


class ApplicationCreate(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    date_of_birth: date
    email: EmailStr
    gender: str = Field(..., pattern="^(male|female)$")
    marital_status: str = Field(..., pattern="^(single|married)$")
    nationality: str = Field(..., min_length=1, max_length=100)
    occupation: str = Field(..., min_length=1)
    address: str = Field(..., min_length=1)
    permanent_address: str | None = None
    phone: str = Field(..., min_length=1, max_length=50)
    passport_number: str | None = Field(None, max_length=50)
    emergency_contact: str = Field(..., min_length=1)

    familiar_with_script: bool
    studied_before: bool
    previous_study: list[PreviousStudy] = []
    spoken_level: str = Field(..., pattern="^(poor|fair|good|excellent)$")
    reading_level: str = Field(..., pattern="^(poor|fair|good|excellent)$")
    writing_level: str = Field(..., pattern="^(poor|fair|good|excellent)$")
    aural_level: str = Field(..., pattern="^(poor|fair|good|excellent)$")
    english_level: str = Field(..., pattern="^(poor|fair|good|excellent)$")
    french_level: str = Field(..., pattern="^(poor|fair|good|excellent)$")

    been_to_arab_country: bool
    been_to_morocco: bool | None = None
    needs_housing: bool
    housing_preference: str = Field(..., pattern="^(igai-residence|homestay)$")
    term_preference: str = Field(..., pattern="^(fall|winter|spring|summer|private)$")
    special_needs: str | None = None

    personal_statement: str = Field(..., min_length=100)

    @field_validator("personal_statement")
    @classmethod
    def validate_personal_statement_length(cls, v: str) -> str:
        word_count = len(v.split())
        if word_count < 300 or word_count > 400:
            raise ValueError("Personal statement must be between 300 and 400 words")
        return v


class ApplicationResponse(BaseModel):
    success: bool = True
    id: str

    class Config:
        from_attributes = True


class ApplicationOut(BaseModel):
    id: str
    first_name: str
    last_name: str
    date_of_birth: date
    email: str
    gender: str
    marital_status: str
    nationality: str
    occupation: str
    address: str
    permanent_address: str | None = None
    phone: str
    passport_number: str | None = None
    emergency_contact: str
    familiar_with_script: bool
    studied_before: bool
    previous_study: list[PreviousStudy] = []
    spoken_level: str
    reading_level: str
    writing_level: str
    aural_level: str
    english_level: str
    french_level: str
    been_to_arab_country: bool
    been_to_morocco: bool | None = None
    needs_housing: bool
    housing_preference: str
    term_preference: str
    special_needs: str | None = None
    personal_statement: str
    ip_address: str | None = None
    created_at: datetime
    status: str = "pending"

    class Config:
        from_attributes = True
