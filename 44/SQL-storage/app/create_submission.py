import hashlib
import os
import shutil

from .database import SessionLocal
from .models import User, Task, Submission
from .run_verification import run_verification
from .create_verification import create_verification


# ==================================================
# SUBMISSION STORAGE
# ==================================================

SUBMISSIONS_DIR = "submissions"


# ==================================================
# CREATE SUBMISSION
# ==================================================

def create_submission(
    task_id: int,
    wallet: str,
    uploaded_file
):
    db = SessionLocal()

    temporary_path = None
    final_path = None

    try:

        # -------------------------------------------------
        # 1. Find task
        # -------------------------------------------------

        task = (
            db.query(Task)
            .filter(Task.id == task_id)
            .first()
        )

        if task is None:
            return None, "task_not_found"

        # -------------------------------------------------
        # 2. Find freelancer
        # -------------------------------------------------

        freelancer = (
            db.query(User)
            .filter(User.wallet == wallet)
            .first()
        )

        # -------------------------------------------------
        # 3. Create freelancer if needed
        # -------------------------------------------------

        if freelancer is None:

            freelancer = User(
                wallet=wallet,
                role="freelancer"
            )

            db.add(freelancer)
            db.commit()
            db.refresh(freelancer)

        # -------------------------------------------------
        # 4. Validate uploaded file
        # -------------------------------------------------

        if uploaded_file is None:
            return None, "file_missing"

        if not uploaded_file.filename:
            return None, "invalid_filename"

        filename = os.path.basename(
            uploaded_file.filename
        )

        if not filename:
            return None, "invalid_filename"

        # -------------------------------------------------
        # 5. Temporary directory
        # -------------------------------------------------

        temporary_dir = os.path.join(
            SUBMISSIONS_DIR,
            "pending"
        )

        os.makedirs(
            temporary_dir,
            exist_ok=True
        )

        temporary_path = os.path.join(
            temporary_dir,
            filename
        )

        # -------------------------------------------------
        # 6. Save uploaded file
        # -------------------------------------------------

        with open(
            temporary_path,
            "wb"
        ) as file:

            shutil.copyfileobj(
                uploaded_file.file,
                file
            )

        # -------------------------------------------------
        # 7. Calculate SHA-256
        # -------------------------------------------------

        sha256 = hashlib.sha256()

        with open(
            temporary_path,
            "rb"
        ) as file:

            while True:

                chunk = file.read(8192)

                if not chunk:
                    break

                sha256.update(chunk)

        file_hash = sha256.hexdigest()

        # -------------------------------------------------
        # 8. Create submission record
        # -------------------------------------------------

        submission = Submission(
            task_id=task.id,
            freelancer_id=freelancer.id,
            file_hash=file_hash,
            file_path=temporary_path
        )

        db.add(submission)

        db.commit()

        db.refresh(submission)

        # -------------------------------------------------
        # 9. Create permanent directory
        # -------------------------------------------------

        final_dir = os.path.join(
            SUBMISSIONS_DIR,
            f"submission_{submission.id}"
        )

        os.makedirs(
            final_dir,
            exist_ok=True
        )

        # -------------------------------------------------
        # 10. Move uploaded file
        # -------------------------------------------------

        final_path = os.path.join(
            final_dir,
            filename
        )

        shutil.move(
            temporary_path,
            final_path
        )

        # -------------------------------------------------
        # 11. Update submission path
        # -------------------------------------------------

        submission.file_path = final_path

        db.commit()

        db.refresh(submission)

        # -------------------------------------------------
        # 12. Prepare test cases
        # -------------------------------------------------

        test_cases = []

        for test_case in task.test_cases:

            test_cases.append({
                "id": str(test_case.id),
                "input": test_case.input,
                "expected_output": test_case.expected_output
            })

        # -------------------------------------------------
        # 13. Run verification
        # -------------------------------------------------

        verification_result, verification_error = (
            run_verification(
                submission_id=submission.id,
                submission_file_path=final_path,
                test_cases=test_cases
            )
        )

        # -------------------------------------------------
        # 14. Save verification result
        # -------------------------------------------------

        if verification_result is not None:

            status = verification_result.get(
                "status",
                "ERROR"
            )

            total_tests = verification_result.get(
                "total_tests",
                0
            )

            passed_tests = verification_result.get(
                "passed_tests",
                0
            )

            failed_tests = verification_result.get(
                "failed_tests",
                0
            )

            verification, verification_db_error = (
                create_verification(
                    submission_id=submission.id,
                    status=status,
                    total_tests=total_tests,
                    passed_tests=passed_tests,
                    failed_tests=failed_tests,
                    result_hash=None
                )
            )

            if verification_db_error:

                print(
                    "Warning: verification result "
                    f"could not be saved: "
                    f"{verification_db_error}"
                )

        else:

            print(
                "Verification failed:"
                f" {verification_error}"
            )

        # -------------------------------------------------
        # 15. Print success
        # -------------------------------------------------

        print("=" * 60)
        print("SUBMISSION CREATED SUCCESSFULLY")
        print("=" * 60)

        print(
            f"Submission ID : {submission.id}"
        )

        print(
            f"Task ID       : {submission.task_id}"
        )

        print(
            f"Freelancer ID : {submission.freelancer_id}"
        )

        print(
            f"File          : {submission.file_path}"
        )

        print(
            f"SHA-256       : {submission.file_hash}"
        )

        if verification_result:

            print(
                "Verification  : "
                f"{verification_result.get('status')}"
            )

            print(
                "Tests         : "
                f"{verification_result.get('passed_tests', 0)}"
                "/"
                f"{verification_result.get('total_tests', 0)}"
            )

        else:

            print(
                "Verification  : FAILED"
            )

        print("=" * 60)

        return submission, None

    except Exception as error:

        db.rollback()

        print("=" * 60)
        print("ERROR CREATING SUBMISSION")
        print("=" * 60)

        print(
            f"Error type: {type(error).__name__}"
        )

        print(
            f"Error: {error}"
        )

        print("=" * 60)

        import traceback

        traceback.print_exc()

        # -------------------------------------------------
        # Remove temporary file
        # -------------------------------------------------

        if (
            temporary_path
            and os.path.exists(temporary_path)
        ):

            try:

                os.remove(
                    temporary_path
                )

            except Exception:

                pass

        return None, "database_error"

    finally:

        db.close()