import os

import redis
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
r = redis.Redis.from_url(
    os.getenv("REDIS_URL", "redis://redis:6379"), decode_responses=True
)


class Ping(BaseModel):
    message: str = "pong"


@app.get("/ping", response_model=Ping)
def ping():
    # simple redis round-trip to prove connectivity
    r.set("last_ping", "ok")
    return {"message": "pong"}


@app.get("/health")
def health():
    return {"status": "ok"}
