from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Ibn Ghazi Arabic Institute"
    DATABASE_URL: str = "postgresql+asyncpg://user:password@localhost:5432/igai_db"
    DATABASE_URL_SYNC: str = "postgresql://user:password@localhost:5432/igai_db"
    CORS_ORIGINS: str = "http://localhost:3000"
    SECRET_KEY: str = "change-this-to-random-string"
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    CONTACT_EMAIL: str = "igai.fez@gmail.com"
    RATE_LIMIT_ENABLED: bool = True

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",") if origin.strip()]

    class Config:
        env_file = ".env"


settings = Settings()
