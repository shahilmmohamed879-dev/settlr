import json
import os
import subprocess
import sys


TEST_CASES_FILE = "/workspace/test-data/test_cases.json"
RUNNER_FILE = "/workspace/runner/run.py"


def load_test_cases():

    if not os.path.exists(TEST_CASES_FILE):
        raise FileNotFoundError(
            f"Test case file not found: {TEST_CASES_FILE}"
        )

    with open(
        TEST_CASES_FILE,
        "r",
        encoding="utf-8"
    ) as file:

        data = json.load(file)

    if "test_cases" not in data:
        raise ValueError(
            "test_cases.json must contain a 'test_cases' array."
        )

    test_cases = data["test_cases"]

    if not isinstance(test_cases, list):
        raise ValueError(
            "'test_cases' must be a list."
        )

    return test_cases


def run_test(test_case):

    test_id = test_case.get(
        "id",
        "UNKNOWN"
    )

    test_input = test_case.get(
        "input",
        ""
    )

    expected_output = test_case.get(
        "expected_output",
        ""
    )

    description = test_case.get(
        "description",
        ""
    )

    print("\n" + "=" * 60)
    print(f"TEST CASE: {test_id}")
    print("=" * 60)

    if description:
        print(f"Description: {description}")

    print(f"Input: {test_input}")
    print(f"Expected: {expected_output}")

    # Send test case to run.py
    test_data = json.dumps({
        "input": test_input,
        "expected_output": expected_output
    })

    try:

        result = subprocess.run(
            [
                "python3",
                RUNNER_FILE
            ],
            input=test_data,
            capture_output=True,
            text=True
        )

    except Exception as error:

        print(f"ERROR running test: {error}")

        return {
            "id": test_id,
            "status": "ERROR"
        }

    # Display runner output
    if result.stdout:
        print("\nRunner output:")
        print(result.stdout)

    if result.stderr:
        print("\nRunner errors:")
        print(result.stderr)

    # Determine result
    if result.returncode == 0:

        status = "PASS"

    else:

        status = "FAIL"

    print(f"Result: {status}")

    return {
        "id": test_id,
        "status": status
    }


def main():

    print("=" * 60)
    print("             PROGRAM TESTER")
    print("=" * 60)

    # ---------------------------------------------------------
    # Load test cases
    # ---------------------------------------------------------

    try:

        test_cases = load_test_cases()

    except Exception as error:

        print(
            f"\nERROR loading test cases: {error}"
        )

        sys.exit(1)

    print(
        f"\nLoaded {len(test_cases)} test cases."
    )

    # ---------------------------------------------------------
    # Run tests
    # ---------------------------------------------------------

    results = []

    for test_case in test_cases:

        result = run_test(test_case)

        results.append(result)

    # ---------------------------------------------------------
    # Calculate results
    # ---------------------------------------------------------

    total = len(results)

    passed = sum(
        1
        for result in results
        if result["status"] == "PASS"
    )

    failed = sum(
        1
        for result in results
        if result["status"] == "FAIL"
    )

    errors = sum(
        1
        for result in results
        if result["status"] == "ERROR"
    )

    # ---------------------------------------------------------
    # Final report
    # ---------------------------------------------------------

    print("\n\n")
    print("=" * 60)
    print("                  FINAL RESULTS")
    print("=" * 60)

    print(f"Total tests : {total}")
    print(f"Passed      : {passed}")
    print(f"Failed      : {failed}")
    print(f"Errors      : {errors}")

    print("=" * 60)

    # ---------------------------------------------------------
    # Exit status
    # ---------------------------------------------------------

    if failed > 0 or errors > 0:

        print("TESTING FAILED")
        sys.exit(1)

    print("ALL TESTS PASSED")
    sys.exit(0)


if __name__ == "__main__":
    main()