import os
from dotenv import load_dotenv
from google import genai
from pydantic import BaseModel


# ============================================================
# LOAD ENVIRONMENT
# ============================================================

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
ANALYSER_DIR = os.path.dirname(CURRENT_DIR)
ENV_FILE = os.path.join(ANALYSER_DIR, ".env")

load_dotenv(ENV_FILE)

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise RuntimeError(
        f"GEMINI_API_KEY not found.\n"
        f"Expected .env file at:\n{ENV_FILE}"
    )


# ============================================================
# GEMINI CLIENT
# ============================================================

client = genai.Client(api_key=API_KEY)


# ============================================================
# RESPONSE SCHEMA
# ============================================================

class TestCase(BaseModel):
    id: str
    requirement_id: str
    test_type: str
    description: str
    input: str
    expected_output: str


class TestCaseList(BaseModel):
    test_cases: list[TestCase]


# ============================================================
# GENERATE TEST CASES
# ============================================================

def generate_test_cases(srs_text: str) -> TestCaseList:

    if not srs_text.strip():
        raise ValueError("SRS text is empty.")

    prompt = f"""
You are the automated testing engine for the SETTLR platform.

Read the following Software Requirements Specification.

Your job is to generate executable-oriented test cases from ONLY
the requirements explicitly present in the SRS.

Do NOT invent functionality.

For every relevant functional requirement, generate appropriate:

- Positive test cases
- Negative test cases
- Boundary cases
- Edge cases
- Invalid input cases

Each test case MUST contain:

- id
- requirement_id
- test_type
- description
- input
- expected_output

Rules:

1. IDs must be unique.
2. requirement_id must identify the requirement being tested.
3. expected_output must be concrete and testable.
4. Do not add explanations outside the JSON structure.
5. Do not invent requirements.
6. Prefer deterministic inputs and outputs.
7. Generate enough tests to meaningfully cover the SRS.

SRS DOCUMENT
============

{srs_text}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "response_schema": TestCaseList,
        },
    )

    if response.parsed is None:
        raise RuntimeError(
            "Gemini returned no structured test-case response."
        )

    return response.parsed