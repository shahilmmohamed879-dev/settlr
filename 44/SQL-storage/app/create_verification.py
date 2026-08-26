from .database import SessionLocal
from .models import Submission, VerificationResult


def create_verification(
    submission_id: int,
    status: str,
    total_tests: int,
    passed_tests: int,
    failed_tests: int,
    result_hash: str | None = None
):
    db = SessionLocal()

    try:
        # Find the submission
        submission = (
            db.query(Submission)
            .filter(Submission.id == submission_id)
            .first()
        )

        if submission is None:
            return None, "submission_not_found"

        # Create verification result
        verification = VerificationResult(
            submission_id=submission.id,
            status=status,
            total_tests=total_tests,
            passed_tests=passed_tests,
            failed_tests=failed_tests,
            result_hash=result_hash
        )

        db.add(verification)
        db.commit()
        db.refresh(verification)

        return verification, None

    except Exception as e:
        db.rollback()

        print("Error creating verification:")
        print(e)

        return None, "database_error"

    finally:
        db.close()