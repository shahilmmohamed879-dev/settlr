from datetime import datetime

from sqlalchemy import (
    String,
    Integer,
    DateTime,
    ForeignKey,
    Text
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship
)

from .database import Base


# ==================================================
# USER
# ==================================================

class User(Base):

    __tablename__ = "users"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    wallet: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False
    )

    role: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    client_tasks: Mapped[list["Task"]] = relationship(
        "Task",
        foreign_keys="Task.client_id",
        back_populates="client"
    )

    freelancer_tasks: Mapped[list["Task"]] = relationship(
        "Task",
        foreign_keys="Task.freelancer_id",
        back_populates="freelancer"
    )

    submissions: Mapped[list["Submission"]] = relationship(
        "Submission",
        back_populates="freelancer"
    )


# ==================================================
# TASK
# ==================================================

class Task(Base):

    __tablename__ = "tasks"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    title: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    description: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    client_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False
    )

    freelancer_id: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
        nullable=True
    )

    status: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )

    deadline: Mapped[datetime | None] = mapped_column(
        DateTime,
        nullable=True
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    client: Mapped["User"] = relationship(
        "User",
        foreign_keys=[client_id],
        back_populates="client_tasks"
    )

    freelancer: Mapped["User | None"] = relationship(
        "User",
        foreign_keys=[freelancer_id],
        back_populates="freelancer_tasks"
    )

    requirements: Mapped[list["Requirement"]] = relationship(
        "Requirement",
        back_populates="task",
        cascade="all, delete-orphan"
    )

    test_cases: Mapped[list["TestCase"]] = relationship(
        "TestCase",
        back_populates="task",
        cascade="all, delete-orphan"
    )

    submissions: Mapped[list["Submission"]] = relationship(
        "Submission",
        back_populates="task",
        cascade="all, delete-orphan"
    )

    payments: Mapped[list["Payment"]] = relationship(
        "Payment",
        back_populates="task",
        cascade="all, delete-orphan"
    )


# ==================================================
# REQUIREMENT
# ==================================================

class Requirement(Base):

    __tablename__ = "requirements"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    task_id: Mapped[int] = mapped_column(
        ForeignKey("tasks.id"),
        nullable=False
    )

    requirement: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    task: Mapped["Task"] = relationship(
        "Task",
        back_populates="requirements"
    )


# ==================================================
# TEST CASE
# ==================================================

class TestCase(Base):

    __tablename__ = "test_cases"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    task_id: Mapped[int] = mapped_column(
        ForeignKey("tasks.id"),
        nullable=False
    )

    input: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    expected_output: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    task: Mapped["Task"] = relationship(
        "Task",
        back_populates="test_cases"
    )


# ==================================================
# SUBMISSION
# ==================================================

class Submission(Base):

    __tablename__ = "submissions"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    task_id: Mapped[int] = mapped_column(
        ForeignKey("tasks.id"),
        nullable=False
    )

    freelancer_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False
    )

    file_hash: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    file_path: Mapped[str] = mapped_column(
        String(500),
        nullable=False
    )

    submitted_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    task: Mapped["Task"] = relationship(
        "Task",
        back_populates="submissions"
    )

    freelancer: Mapped["User"] = relationship(
        "User",
        back_populates="submissions"
    )

    verification_results: Mapped[list["VerificationResult"]] = relationship(
        "VerificationResult",
        back_populates="submission",
        cascade="all, delete-orphan"
    )


# ==================================================
# VERIFICATION RESULT
# ==================================================

class VerificationResult(Base):

    __tablename__ = "verification_results"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    submission_id: Mapped[int] = mapped_column(
        ForeignKey("submissions.id"),
        nullable=False
    )

    status: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )

    total_tests: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )

    passed_tests: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )

    failed_tests: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )

    result_hash: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    submission: Mapped["Submission"] = relationship(
        "Submission",
        back_populates="verification_results"
    )


# ==================================================
# PAYMENT
# ==================================================

class Payment(Base):

    __tablename__ = "payments"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    task_id: Mapped[int] = mapped_column(
        ForeignKey("tasks.id"),
        nullable=False
    )

    amount: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    status: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )

    transaction_hash: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    task: Mapped["Task"] = relationship(
        "Task",
        back_populates="payments"
    )