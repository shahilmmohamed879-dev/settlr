from .database import engine
from .models import Base, User, Task, Requirement, TestCase
from sqlalchemy.orm import Session


# Make sure tables exist
Base.metadata.create_all(engine)


with Session(engine) as session:

    # Fake user
    client = User(
        wallet="0xFAKECLIENT123",
        role="client"
    )

    session.add(client)
    session.flush()  # Gives client an ID

    # Fake task
    task = Task(
        title="Create a Python Calculator",
        description="Create a calculator that supports addition and subtraction.",
        client_id=client.id,
        status="created"
    )

    session.add(task)
    session.flush()

    # Fake requirements
    requirement1 = Requirement(
        task_id=task.id,
        requirement="Program must support addition."
    )

    requirement2 = Requirement(
        task_id=task.id,
        requirement="Program must support subtraction."
    )

    session.add_all([requirement1, requirement2])

    # Fake test cases
    test1 = TestCase(
        task_id=task.id,
        input="2 + 3",
        expected_output="5"
    )

    test2 = TestCase(
        task_id=task.id,
        input="10 - 4",
        expected_output="6"
    )

    session.add_all([test1, test2])

    session.commit()

    print("Fake data inserted successfully!")
    print("Task ID:", task.id)