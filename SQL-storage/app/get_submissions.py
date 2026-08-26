from sqlalchemy.orm import selectinload

from .database import SessionLocal
from .models import Submission


def get_submissions_for_task(task_id: int):
    db = SessionLocal()

    try:
        submissions = (
            db.query(Submission)
            .options(
                selectinload(Submission.freelancer)
            )
            .filter(
                Submission.task_id == task_id
            )
            .order_by(Submission.id)
            .all()
        )

        return submissions

    finally:
        db.close()


def get_submission(submission_id: int):
    db = SessionLocal()

    try:
        submission = (
            db.query(Submission)
            .options(
                selectinload(Submission.freelancer),
                selectinload(Submission.task),
                selectinload(Submission.verification_results)
            )
            .filter(
                Submission.id == submission_id
            )
            .first()
        )

        return submission

    finally:
        db.close()