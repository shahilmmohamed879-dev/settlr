import hashlib
import os
import shutil

from .database import SessionLocal
from .models import User, Task, Submission


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

    try:

        # -------------------------------------------------
        # 1. Find the task
        # -------------------------------------------------

        task = (
            db.query(Task)
            .filter(Task.id == task_id)
            .first()
        )

        if task is None:
            return None, "task_not_found"

        # -------------------------------------------------
        # 2. Find the freelancer
        # -------------------------------------------------

        freelancer = (
            db.query(User)
            .filter(User.wallet == wallet)
            .first()
        )

        # -------------------------------------------------
        # 3. Create freelancer if they don't exist
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
        # 4. Create pending submission directory
        # -------------------------------------------------

        temporary_dir = os.path.join(
            SUBMISSIONS_DIR,
            "pending"
        )

        os.makedirs(
            temporary_dir,
            exist_ok=True
        )

        # -------------------------------------------------
        # 5. Get filename
        # -------------------------------------------------

        filename = os.path.basename(
            uploaded_file.filename
        )

        if not filename:
            return None, "invalid_filename"

        # -------------------------------------------------
        # 6. Save uploaded file temporarily
        # -------------------------------------------------

        temporary_path = os.path.join(
            temporary_dir,
            filename
        )

        with open(
            temporary_path,
            "wb"
        ) as file:

            shutil.copyfileobj(
                uploaded_file.file,
                file
            )

        # -------------------------------------------------
        # 7. Calculate SHA-256 hash
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
        # 8. Create submission database record
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
        # 9. Create submission-specific directory
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
        # 10. Move file to permanent location
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
        # 11. Update database with final path
        # -------------------------------------------------

        submission.file_path = final_path

        db.commit()

        db.refresh(submission)

        # -------------------------------------------------
        # 12. Print result
        # -------------------------------------------------

        print("=" * 60)
        print("SUBMISSION CREATED SUCCESSFULLY")
        print("=" * 60)
        print(f"Submission ID : {submission.id}")
        print(f"Task ID       : {submission.task_id}")
        print(f"Freelancer ID : {submission.freelancer_id}")
        print(f"File          : {submission.file_path}")
        print(f"SHA-256       : {submission.file_hash}")
        print("=" * 60)

        return submission, None

    # -----------------------------------------------------
    # Error handling
    # -----------------------------------------------------

    except Exception as error:

        db.rollback()

        print("=" * 60)
        print("ERROR CREATING SUBMISSION")
        print("=" * 60)
        print(error)
        print("=" * 60)

        return None, "database_error"

    # -----------------------------------------------------
    # Always close database connection
    # -----------------------------------------------------

    finally:

        db.close()