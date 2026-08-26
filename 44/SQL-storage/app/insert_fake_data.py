from .database import SessionLocal
from .models import User, Task, Requirement, TestCase


def insert_fake_data():
    db = SessionLocal()

    try:
        # Find existing fake client
        client = db.query(User).filter(
            User.wallet == "0xFAKECLIENT123"
        ).first()

        # Create client if it doesn't exist
        if client is None:
            client = User(
                wallet="0xFAKECLIENT123",
                role="client"
            )

            db.add(client)
            db.commit()
            db.refresh(client)

        print(f"Using client ID: {client.id}")

        # Create task
        task = Task(
            title="Simple Calculator",
            description="Create a program that supports addition and subtraction.",
            client_id=client.id,
            status="open"
        )

        db.add(task)
        db.commit()
        db.refresh(task)

        # Requirements
        requirements = [
            Requirement(
                task_id=task.id,
                requirement="Program must support addition."
            ),
            Requirement(
                task_id=task.id,
                requirement="Program must support subtraction."
            )
        ]

        db.add_all(requirements)

        # Test cases
        test_cases = [
            TestCase(
                task_id=task.id,
                input="2 + 3",
                expected_output="5"
            ),
            TestCase(
                task_id=task.id,
                input="10 - 4",
                expected_output="6"
            )
        ]

        db.add_all(test_cases)

        db.commit()

        print("Fake data inserted successfully!")
        print(f"Client ID: {client.id}")
        print(f"Task ID: {task.id}")

    except Exception as e:
        db.rollback()
        print("Error inserting fake data:")
        print(e)

    finally:
        db.close()


if __name__ == "__main__":
    insert_fake_data()