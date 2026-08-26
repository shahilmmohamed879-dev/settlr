FROM python:3.12-slim

WORKDIR /workspace

RUN apt-get update && \
    apt-get install -y \
    nodejs \
    npm \
    gcc \
    g++ \
    default-jdk \
    && rm -rf /var/lib/apt/lists/*

CMD ["python3", "/workspace/runner/test_manager.py"]