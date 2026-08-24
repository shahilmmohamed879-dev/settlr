import json
import os
import subprocess
import sys


PROGRAM_DIR = "/workspace/program"
OUTPUT_FILE = "/workspace/test-data/output.txt"


def find_program():
    supported_extensions = {
        ".py",
        ".js",
        ".java",
        ".c",
        ".cpp"
    }

    programs = []

    for filename in os.listdir(PROGRAM_DIR):
        path = os.path.join(PROGRAM_DIR, filename)

        if os.path.isfile(path):
            extension = os.path.splitext(filename)[1].lower()

            if extension in supported_extensions:
                programs.append(path)

    if not programs:
        raise RuntimeError(
            "No supported program found in /workspace/program"
        )

    if len(programs) > 1:
        raise RuntimeError(
            "Multiple programs found. "
            "Only one program should be tested at a time."
        )

    return programs[0]


def build_command(program):
    extension = os.path.splitext(program)[1].lower()

    if extension == ".py":
        return ["python3", program]

    if extension == ".js":
        return ["node", program]

    if extension == ".java":
        subprocess.run(
            ["javac", program],
            check=True
        )

        class_name = os.path.splitext(
            os.path.basename(program)
        )[0]

        return [
            "java",
            "-cp",
            PROGRAM_DIR,
            class_name
        ]

    if extension == ".c":
        executable = "/tmp/program"

        subprocess.run(
            ["gcc", program, "-o", executable],
            check=True
        )

        return [executable]

    if extension == ".cpp":
        executable = "/tmp/program"

        subprocess.run(
            ["g++", program, "-o", executable],
            check=True
        )

        return [executable]

    raise RuntimeError(
        f"Unsupported file type: {extension}"
    )


def main():

    # ---------------------------------------------------------
    # Receive test case from test_manager.py
    # ---------------------------------------------------------

    try:
        test_data = json.loads(
            sys.stdin.read()
        )
    except json.JSONDecodeError:
        print("ERROR: Invalid test data received.")
        sys.exit(2)

    test_input = str(
        test_data.get("input", "")
    )

    expected_output = str(
        test_data.get("expected_output", "")
    )

    # ---------------------------------------------------------
    # Find program
    # ---------------------------------------------------------

    try:
        program = find_program()

    except Exception as error:
        print(f"ERROR: {error}")
        sys.exit(2)

    print(
        f"Program: {os.path.basename(program)}"
    )

    # ---------------------------------------------------------
    # Build / compile program
    # ---------------------------------------------------------

    try:
        command = build_command(program)

    except subprocess.CalledProcessError:
        print("COMPILE_ERROR")
        sys.exit(3)

    except Exception as error:
        print(f"ERROR: {error}")
        sys.exit(3)

    # ---------------------------------------------------------
    # Run program
    # ---------------------------------------------------------

    try:

        result = subprocess.run(
            command,
            input=test_input,
            capture_output=True,
            text=True,
            timeout=10
        )

    except subprocess.TimeoutExpired:

        print("TIMEOUT")
        sys.exit(4)

    # ---------------------------------------------------------
    # Get actual output
    # ---------------------------------------------------------

    actual_output = result.stdout

    # Save actual output
    os.makedirs(
        os.path.dirname(OUTPUT_FILE),
        exist_ok=True
    )

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(actual_output)

    # ---------------------------------------------------------
    # Runtime error
    # ---------------------------------------------------------

    if result.returncode != 0:

        print("RUNTIME_ERROR")

        if result.stderr:
            print(result.stderr)

        sys.exit(5)

    # ---------------------------------------------------------
    # Compare output
    # ---------------------------------------------------------

    actual = actual_output.strip()
    expected = expected_output.strip()

    print(f"Expected: {expected}")
    print(f"Received: {actual}")

    if actual == expected:

        print("PASS")
        sys.exit(0)

    else:

        print("FAIL")
        sys.exit(1)


if __name__ == "__main__":
    main()