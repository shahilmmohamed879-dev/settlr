import json
import subprocess
import sys

TEST_CASES_FILE = "/workspace/test-data/test_cases.json"
RUNNER = "/workspace/runner/run.py"


def load_test_cases():
    with open(TEST_CASES_FILE, "r", encoding="utf-8") as file:
        data = json.load(file)

    if "test_cases" not in data:
        raise ValueError("test_cases.json must contain 'test_cases'")

    return data["test_cases"]


def run_test(test_case):
    test_id = test_case["id"]
    test_input = test_case.get("input", "")
    expected_output = test_case.get("expected_output", "")

    print(f"\n{'=' * 50}")
    print(f"Running {test_id}")
    print(f"{'=' * 50}")

    result = subprocess.run(
        ["python3", RUNNER],
        input=json.dumps({
            "input": test_input,
            "expected_output": expected_output
        }),
        capture_output=True,
        text=True
    )

    print(result.stdout)

    if result.stderr:
        print("ERROR:")
        print(result.stderr)

    return {
        "id": test_id,
        "status": "PASS" if result.returncode == 0 else "FAIL",
        "output": result.stdout
    }


def main():
    try:
        test_cases = load_test_cases()
    except Exception as error:
        print(f"ERROR loading test cases: {error}")
        sys.exit(1)

    print(f"Loaded {len(test_cases)} test cases.")

    results = []

    for test_case in test_cases:
        result = run_test(test_case)
        results.append(result)

    passed = sum(
        1 for result in results
        if result["status"] == "PASS"
    )

    failed = len(results) - passed

    print("\n")
    print("=" * 50)
    print("FINAL TEST RESULTS")
    print("=" * 50)
    print(f"Total : {len(results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")

    if failed > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()