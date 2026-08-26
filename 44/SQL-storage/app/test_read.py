from sqlalchemy.orm import Session

from .database import engine
from .models import User, Task, Requirement, TestCase


with Session(engine) as session:

    # Get all tasks
    tasks = session.query(Task).all()

    for task in tasks:

        print("\n==============================")
        print(f"Task ID: {task.id}")
        print(f"Title: {task.title}")
        print(f"Description: {task.description}")
        print(f"Status: {task.status}")

        # Get requirements
        requirements = (
            session.query(Requirement)
            .filter(Requirement.task_id == task.id)
            .all()
        )

        print("\nRequirements:")

        for requirement in requirements:
            print(f"  - {requirement.requirement}")

        # Get test cases
        test_cases = (
            session.query(TestCase)
            .filter(TestCase.task_id == task.id)
            .all()
        )

        print("\nTest Cases:")

        for test_case in test_cases:
            print(f"  Input: {test_case.input}")
            print(f"  Expected: {test_case.expected_output}")

        print("==============================")