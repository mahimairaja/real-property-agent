FROM python:3.11-slim

COPY --from=ghcr.io/astral-sh/uv:0.8.4 /uv /uvx /bin/

WORKDIR /code

COPY pyproject.toml uv.lock ./

RUN uv sync --locked

COPY . .

ENTRYPOINT ["uv", "run", "fastapi", "run", "--port", "8080"]
