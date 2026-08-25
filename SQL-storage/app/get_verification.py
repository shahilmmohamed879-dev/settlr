from .database import SessionLocal
from .models import VerificationResult


def get_verification_for_submission(submission_id: int):

    db = SessionLocal()

    try:
        verification = (
            db.query(VerificationResult)
            .filter(
                VerificationResult.submission_id == submission_id
            )
            .order_by(
                VerificationResult.id.desc()
            )
            .first()
        )

        return verification

    finally:
        db.close()
        