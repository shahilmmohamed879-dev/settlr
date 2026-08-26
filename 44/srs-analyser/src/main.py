import json
import os

from src.srs_reader import extract_text
from src.test_generator import generate_test_cases


# ============================================================
# PATHS
# ============================================================

# srs-analyser/
# ├── input/
# ├── src/
# └── ...
#
# This gets the srs-analyser directory.
BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

# SRS input file
PDF_FILE = os.path.join(
    BASE_DIR,
    "input",
    "srs.pdf"
)

# Program tester directory
PROGRAM_TESTER_DIR = os.path.join(
    os.path.dirname(BASE_DIR),
    "program-tester"
)

# Final test case file
OUTPUT_FILE = os.path.join(
    PROGRAM_TESTER_DIR,
    "test-data",
    "test_cases.json"
)


# ============================================================
# MAIN
# ============================================================

def main():

    print("=" * 60)
    print("           SRS TEST CASE GENERATOR")
    print("=" * 60)

    # --------------------------------------------------------
    # Check SRS file
    # --------------------------------------------------------

    if not os.path.exists(PDF_FILE):
        print("\nERROR: SRS file not found.")
        print(f"Expected location:")
        print(PDF_FILE)
        return

    print("\n[1/3] Reading SRS...")
    print(f"File: {PDF_FILE}")

    # --------------------------------------------------------
    # Extract SRS text
    # --------------------------------------------------------

    srs_text = extract_text(PDF_FILE)

    if not srs_text.strip():
        print("\nERROR: No text could be extracted from the SRS.")
        return

    print(f"Successfully extracted {len(srs_text)} characters.")

    # --------------------------------------------------------
    # Generate test cases using Gemini
    # --------------------------------------------------------

    print("\n[2/3] Generating test cases with Gemini...")
    print("Please wait...")

    try:
        result = generate_test_cases(srs_text)

    except Exception as error:
        print("\nERROR: Failed to generate test cases.")
        print(error)
        return

    print(
        f"Generated {len(result.test_cases)} test cases."
    )

    # --------------------------------------------------------
    # Convert result to JSON-compatible dictionary
    # --------------------------------------------------------

    data = result.model_dump()

    # --------------------------------------------------------
    # Make sure Program Tester test-data exists
    # --------------------------------------------------------

    test_data_directory = os.path.dirname(
        OUTPUT_FILE
    )

    os.makedirs(
        test_data_directory,
        exist_ok=True
    )

    # --------------------------------------------------------
    # Save test cases
    # --------------------------------------------------------

    print("\n[3/3] Saving test cases...")

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            data,
            file,
            indent=2,
            ensure_ascii=False
        )

    # --------------------------------------------------------
    # Finished
    # --------------------------------------------------------

    print("\n" + "=" * 60)
    print("SUCCESS")
    print("=" * 60)

    print("\nTest cases generated:")
    print(OUTPUT_FILE)

    print(
        f"\nTotal test cases: {len(result.test_cases)}"
    )


# ============================================================
# PROGRAM ENTRY POINT
# ============================================================

if __name__ == "__main__":
    main()