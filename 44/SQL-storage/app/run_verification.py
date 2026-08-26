import json
import os
import shutil
import subprocess
import tempfile


# =========================================================
# CONFIGURATION
# =========================================================

PROGRAM_TESTER_DIR = r"E:\Hackathon\program-tester"

DOCKER_COMPOSE_FILE = os.path.join(
    PROGRAM_TESTER_DIR,
    "docker",
    "docker-compose.yml"
)


# =========================================================
# RUN VERIFICATION
# =========================================================

def run_verification(
    submission_id: int,
    submission_file_path: str,
    test_cases: list
):

    print("=" * 60)
    print("STARTING PROGRAM VERIFICATION")
    print("=" * 60)

    print(f"Submission ID : {submission_id}")
    print(f"Program       : {submission_file_path}")
    print(f"Test cases    : {len(test_cases)}")

    workspace = None

    try:

        # -------------------------------------------------
        # 1. Validate submission
        # -------------------------------------------------

        if not os.path.isfile(submission_file_path):

            print(
                f"Submission file not found: "
                f"{submission_file_path}"
            )

            return None, "submission_file_not_found"

        # -------------------------------------------------
        # 2. Validate tester
        # -------------------------------------------------

        if not os.path.isfile(DOCKER_COMPOSE_FILE):

            print(
                f"Docker compose file not found: "
                f"{DOCKER_COMPOSE_FILE}"
            )

            return None, "tester_not_found"

        # -------------------------------------------------
        # 3. Create isolated workspace
        # -------------------------------------------------

        workspace = tempfile.mkdtemp(
            prefix=f"submission_{submission_id}_"
        )

        program_dir = os.path.join(
            workspace,
            "program"
        )

        test_data_dir = os.path.join(
            workspace,
            "test-data"
        )

        runner_dir = os.path.join(
            workspace,
            "runner"
        )

        os.makedirs(program_dir)
        os.makedirs(test_data_dir)

        # -------------------------------------------------
        # 4. Copy runner files
        # -------------------------------------------------

        original_runner_dir = os.path.join(
            PROGRAM_TESTER_DIR,
            "runner"
        )

        shutil.copytree(
            original_runner_dir,
            runner_dir
        )

        # -------------------------------------------------
        # 5. Copy submitted program
        # -------------------------------------------------

        filename = os.path.basename(
            submission_file_path
        )

        destination = os.path.join(
            program_dir,
            filename
        )

        shutil.copy2(
            submission_file_path,
            destination
        )

        print(
            f"Program copied to: {destination}"
        )

        # -------------------------------------------------
        # 6. Create test cases
        # -------------------------------------------------

        test_cases_file = os.path.join(
            test_data_dir,
            "test_cases.json"
        )

        with open(
            test_cases_file,
            "w",
            encoding="utf-8"
        ) as file:

            json.dump(
                {
                    "test_cases": test_cases
                },
                file,
                indent=2
            )

        # -------------------------------------------------
        # 7. Create result path
        # -------------------------------------------------

        result_file = os.path.join(
            test_data_dir,
            "result.json"
        )

        # -------------------------------------------------
        # 8. Create temporary compose file
        # -------------------------------------------------

        compose_file = os.path.join(
            workspace,
            "docker-compose.yml"
        )

        with open(
            compose_file,
            "w",
            encoding="utf-8"
        ) as file:

            file.write(
                f"""services:
  program-tester:
    build:
      context: {PROGRAM_TESTER_DIR}
      dockerfile: {os.path.join(PROGRAM_TESTER_DIR, "docker", "Dockerfile")}

    working_dir: /workspace

    volumes:
      - {program_dir}:/workspace/program
      - {test_data_dir}:/workspace/test-data
      - {runner_dir}:/workspace/runner

    command: python3 /workspace/runner/test_manager.py
"""
            )

        # -------------------------------------------------
        # 9. Run Docker tester
        # -------------------------------------------------

        print("\nStarting Docker tester...")

        result = subprocess.run(
            [
                "docker",
                "compose",
                "-f",
                compose_file,
                "run",
                "--rm",
                "program-tester"
            ],
            cwd=PROGRAM_TESTER_DIR,
            capture_output=True,
            text=True
        )

        # -------------------------------------------------
        # 10. Print tester output
        # -------------------------------------------------

        if result.stdout:

            print("\nDocker tester output:")
            print(result.stdout)

        if result.stderr:

            print("\nDocker tester errors:")
            print(result.stderr)

        # -------------------------------------------------
        # 11. Check result
        # -------------------------------------------------

        if not os.path.isfile(result_file):

            print(
                "Tester did not create result.json"
            )

            return None, "tester_result_missing"

        # -------------------------------------------------
        # 12. Read result
        # -------------------------------------------------

        with open(
            result_file,
            "r",
            encoding="utf-8"
        ) as file:

            verification_result = json.load(file)

        print("\nVerification result:")
        print(
            json.dumps(
                verification_result,
                indent=2
            )
        )

        return verification_result, None

    except Exception as error:

        print("=" * 60)
        print("VERIFICATION ERROR")
        print("=" * 60)
        print(
            f"{type(error).__name__}: {error}"
        )
        print("=" * 60)

        import traceback
        traceback.print_exc()

        return None, "verification_error"

    finally:

        # -------------------------------------------------
        # Cleanup temporary workspace
        # -------------------------------------------------

        if workspace and os.path.exists(workspace):

            shutil.rmtree(
                workspace,
                ignore_errors=True
            )