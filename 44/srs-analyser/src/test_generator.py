import os
import json

from dotenv import load_dotenv
from google import genai
from pydantic import BaseModel


load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env")


client = genai.Client(api_key=API_KEY)


class TestCase(BaseModel):
    id: str
    requirement_id: str
    test_type: str
    description: str
    input: str
    expected_output: str


class TestCaseList(BaseModel):
    test_cases: list[TestCase]


def generate_test_cases(srs_text):

    prompt = f"""
You are a software testing expert.

Analyze the following Software Requirements Specification (SRS).

Identify the functional requirements and generate useful test cases
for each requirement.

Include, where applicable:
- Positive test cases
- Negative test cases
- Boundary cases
- Edge cases
- Invalid input cases

Do NOT invent requirements that are not present in the SRS.

Each test case must contain:
- A unique ID
- The requirement it tests
- Test type
- Description
- Input
- Expected output

SRS DOCUMENT:

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

    return response.parsed