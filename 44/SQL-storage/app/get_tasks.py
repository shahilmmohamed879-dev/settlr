from sqlalchemy.orm import selectinload

from .database import SessionLocal
from .models import Task


def get_all_tasks():
    db = SessionLocal()

    try:
        tasks = (
            db.query(Task)
            .options(
                selectinload(Task.requirements),
                selectinload(Task.test_cases)
            )
            .order_by(Task.id)
            .all()
        )

        return tasks

    finally:
        db.close()


def get_task(task_id: int):
    db = SessionLocal()

    try:
        task = (
            db.query(Task)
            .options(
                selectinload(Task.requirements),
                selectinload(Task.test_cases)
            )
            .filter(Task.id == task_id)
            .first()
        )

        return task

    finally:
        db.close()