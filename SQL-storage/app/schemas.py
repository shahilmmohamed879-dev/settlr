from datetime import datetime

from pydantic import BaseModel


# ==================================================
# TASK
# ==================================================

class TestCaseCreate(BaseModel):
    input: str
    expected_output: str


class TaskCreate(BaseModel):
    wallet: str
    title: str
    description: str
    requirements: list[str]
    test_cases: list[TestCaseCreate] = []


class TaskResponse(BaseModel):
    id: int
    title: str
    description: str
    client_id: int
    freelancer_id: int | None
    status: str
    deadline: datetime | None
    created_at: datetime

    class Config:
        from_attributes = True


# ==================================================
# SUBMISSION
# ==================================================

class SubmissionCreate(BaseModel):
    wallet: str


class SubmissionResponse(BaseModel):
    id: int
    task_id: int
    freelancer_id: int
    file_hash: str
    file_path: str
    submitted_at: datetime

    class Config:
        from_attributes = True


class SubmissionDetailResponse(SubmissionResponse):
    pass


# ==================================================
# VERIFICATION
# ==================================================

class VerificationResponse(BaseModel):
    id: int
    submission_id: int
    status: str
    total_tests: int
    passed_tests: int
    failed_tests: int
    result_hash: str | None
    created_at: datetime

    class Config:
        from_attributes = True