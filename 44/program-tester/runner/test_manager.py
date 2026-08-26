import json
import os
import subprocess
import sys
import hashlib


# ============================================================
# PATHS
# ============================================================

BASE_DIR = "/workspace"

TEST_CASES_FILE = os.path.join(
    BASE_DIR,
    "test-data",
    "test_cases.json"
)

RECEIPT_FILE = os.path.join(
    BASE_DIR,
    "test-data",
    "receipt.json"
)

RUNNER_FILE = os.path.join(
    BASE_DIR,
    "runner",
    "run.py"
)


# ============================================================
# LOAD TEST CASES
# ============================================================

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


# ============================================================
# RUN ONE TEST
# ============================================================

def run_test(test_case):

    test_id = test_case.get(
        "id",
        "UNKNOWN"
    )

    test_input = str(
        test_case.get(
            "input",
            ""
        )
    )

    expected_output = str(
        test_case.get(
            "expected_output",
            ""
        )
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

    if result.stdout:

        print("\nRunner output:")
        print(result.stdout)

    if result.stderr:

        print("\nRunner errors:")
        print(result.stderr)

    if result.returncode == 0:

        status = "PASS"

    else:

        status = "FAIL"

    print(f"Result: {status}")

    return {
        "id": test_id,
        "status": status
    }


# ============================================================
# GENERATE VERIFICATION RECEIPT
# ============================================================

def generate_receipt(results):

    # IMPORTANT:
    # The blockchain task ID must be supplied by the caller.
    task_id = os.getenv(
        "TASK_ID",
        "0"
    )

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

    if failed == 0 and errors == 0:
        status = "PASSED"
    else:
        status = "FAILED"

    # Receipt WITHOUT hash.
    # This exact object is what gets hashed.
    receipt = {
        "task_id": task_id,
        "total_tests": total,
        "passed": passed,
        "failed": failed,
        "errors": errors,
        "status": status,
        "results": results
    }

    receipt_json = json.dumps(
        receipt,
        sort_keys=True,
        separators=(",", ":")
    )

    receipt_hash = hashlib.sha256(
        receipt_json.encode("utf-8")
    ).hexdigest()

    receipt["receipt_hash"] = receipt_hash

    # Ensure directory exists.
    os.makedirs(
        os.path.dirname(RECEIPT_FILE),
        exist_ok=True
    )

    # Save receipt.
    with open(
        RECEIPT_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            receipt,
            file,
            indent=2
        )

    print("\n" + "=" * 60)
    print("             VERIFICATION RECEIPT")
    print("=" * 60)

    print(f"Task ID     : {task_id}")
    print(f"Total tests : {total}")
    print(f"Passed      : {passed}")
    print(f"Failed      : {failed}")
    print(f"Errors      : {errors}")
    print(f"Status      : {status}")
    print(f"Receipt hash: {receipt_hash}")
    print(f"Receipt file: {RECEIPT_FILE}")

    print("=" * 60)

    return status


# ============================================================
# MAIN
# ============================================================

def main():

    print("=" * 60)
    print("             PROGRAM TESTER")
    print("=" * 60)

    # --------------------------------------------------------
    # Load test cases
    # --------------------------------------------------------

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

    # --------------------------------------------------------
    # Run tests
    # --------------------------------------------------------

    results = []

    for test_case in test_cases:

        result = run_test(test_case)

        results.append(result)

    # --------------------------------------------------------
    # Generate receipt
    # --------------------------------------------------------

    receipt_status = generate_receipt(
        results
    )

    # --------------------------------------------------------
    # Final result
    # --------------------------------------------------------

    if receipt_status == "FAILED":

        print("\nTESTING FAILED")

        sys.exit(1)

    print("\nALL TESTS PASSED")

    sys.exit(0)


# ============================================================
# ENTRY POINT
# ============================================================

if __name__ == "__main__":
    main()