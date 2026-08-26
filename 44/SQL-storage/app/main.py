from fastapi import (
    FastAPI,
    HTTPException,
    UploadFile,
    File,
    Form
)

from .create_task import create_task
from .create_submission import create_submission
from .create_verification import create_verification

from .get_tasks import (
    get_all_tasks,
    get_task
)

from .get_submissions import (
    get_submissions_for_task,
    get_submission
)

from .get_verification import (
    get_verification_for_submission
)

from .schemas import (
    TaskCreate,
    TaskResponse,
    SubmissionResponse,
    SubmissionDetailResponse,
    VerificationResponse
)


# ==================================================
# FASTAPI APPLICATION
# ==================================================

app = FastAPI(
    title="Settlr API",
    description="Settlr task, submission and verification backend",
    version="1.0.0"
)


# ==================================================
# HOME
# ==================================================

@app.get("/")
def home():

    return {
        "message": "Settlr API running"
    }


# ==================================================
# CREATE TASK
# ==================================================

@app.post("/tasks")
def add_task(
    data: TaskCreate
):

    task_id = create_task(
        wallet=data.wallet,
        title=data.title,
        description=data.description,
        requirements=data.requirements,
        test_cases=[
            {
                "input": test.input,
                "expected_output": test.expected_output
            }
            for test in data.test_cases
        ]
    )

    if task_id is None:

        raise HTTPException(
            status_code=500,
            detail="Failed to create task"
        )

    return {
        "success": True,
        "task_id": task_id
    }


# ==================================================
# GET ALL TASKS
# ==================================================

@app.get("/tasks")
def read_tasks():

    tasks = get_all_tasks()

    return tasks


# ==================================================
# GET SINGLE TASK
# ==================================================

@app.get(
    "/tasks/{task_id}",
    response_model=TaskResponse
)
def read_task(
    task_id: int
):

    task = get_task(task_id)

    if task is None:

        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    return task


# ==================================================
# CREATE SUBMISSION
# ==================================================

@app.post(
    "/tasks/{task_id}/submissions",
    response_model=SubmissionResponse
)
def submit_task(
    task_id: int,
    wallet: str = Form(...),
    file: UploadFile = File(...)
):

    submission, error = create_submission(
        task_id=task_id,
        wallet=wallet,
        uploaded_file=file
    )

    # -------------------------------------------------
    # Task doesn't exist
    # -------------------------------------------------

    if error == "task_not_found":

        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    # -------------------------------------------------
    # Invalid filename
    # -------------------------------------------------

    if error == "invalid_filename":

        raise HTTPException(
            status_code=400,
            detail="Invalid filename"
        )

    # -------------------------------------------------
    # Other error
    # -------------------------------------------------

    if error:

        raise HTTPException(
            status_code=500,
            detail="Failed to create submission"
        )

    return submission


# ==================================================
# GET TASK SUBMISSIONS
# ==================================================

@app.get(
    "/tasks/{task_id}/submissions",
    response_model=list[SubmissionResponse]
)
def read_task_submissions(
    task_id: int
):

    submissions = get_submissions_for_task(
        task_id
    )

    return submissions


# ==================================================
# GET SINGLE SUBMISSION
# ==================================================

@app.get(
    "/submissions/{submission_id}",
    response_model=SubmissionDetailResponse
)
def read_submission(
    submission_id: int
):

    submission = get_submission(
        submission_id
    )

    if submission is None:

        raise HTTPException(
            status_code=404,
            detail="Submission not found"
        )

    return submission


# ==================================================
# CREATE VERIFICATION RESULT
# ==================================================

@app.post(
    "/submissions/{submission_id}/verification",
    response_model=VerificationResponse
)
def verify_submission(
    submission_id: int,
    data: dict
):

    verification, error = create_verification(
        submission_id=submission_id,
        status=data["status"],
        total_tests=data["total_tests"],
        passed_tests=data["passed_tests"],
        failed_tests=data["failed_tests"],
        result_hash=data.get("result_hash")
    )

    if error == "submission_not_found":

        raise HTTPException(
            status_code=404,
            detail="Submission not found"
        )

    if error:

        raise HTTPException(
            status_code=500,
            detail="Failed to create verification"
        )

    return verification


# ==================================================
# GET VERIFICATION RESULT
# ==================================================

@app.get(
    "/submissions/{submission_id}/verification",
    response_model=VerificationResponse
)
def get_submission_verification(
    submission_id: int
):

    verification = get_verification_for_submission(
        submission_id
    )

    if verification is None:

        raise HTTPException(
            status_code=404,
            detail="Verification result not found"
        )

    return verification