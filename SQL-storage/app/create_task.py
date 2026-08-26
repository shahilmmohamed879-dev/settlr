from .database import SessionLocal
from .models import User, Task, Requirement, TestCase


def create_task(
    wallet: str,
    title: str,
    description: str,
    requirements: list[str],
    test_cases: list[dict],
):
    db = SessionLocal()

    try:
        # Find existing client
        client = db.query(User).filter(
            User.wallet == wallet
        ).first()

        # Create client if they don't exist
        if client is None:
            client = User(
                wallet=wallet,
                role="client"
            )

            db.add(client)
            db.flush()

        # Create task
        task = Task(
            title=title,
            description=description,
            client=client,
            status="created"
        )

        # Add requirements
        for requirement_text in requirements:
            task.requirements.append(
                Requirement(
                    requirement=requirement_text
                )
            )

        # Add test cases
        for test_case in test_cases:
            task.test_cases.append(
                TestCase(
                    input=test_case["input"],
                    expected_output=test_case["expected_output"]
                )
            )

        db.add(task)

        # Save everything in ONE transaction
        db.commit()

        db.refresh(task)

        print("Task created successfully!")
        print(f"Task ID: {task.id}")

        return task.id

    except Exception as e:
        db.rollback()

        print("Error creating task:")
        print(e)

        return None

    finally:
        db.close()