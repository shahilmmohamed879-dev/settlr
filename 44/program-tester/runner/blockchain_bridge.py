import json
import hashlib
from pathlib import Path


# ============================================================
# PATHS
# ============================================================

BASE_DIR = Path("/workspace")

RECEIPT_FILE = BASE_DIR / "test-data" / "receipt.json"


# ============================================================
# LOAD RECEIPT
# ============================================================

def load_receipt():
    if not RECEIPT_FILE.exists():
        raise FileNotFoundError(
            f"Receipt not found: {RECEIPT_FILE}"
        )

    with open(
        RECEIPT_FILE,
        "r",
        encoding="utf-8"
    ) as file:
        return json.load(file)


# ============================================================
# VERIFY RECEIPT HASH
# ============================================================

def calculate_receipt_hash(receipt):
    receipt_without_hash = dict(receipt)

    receipt_without_hash.pop(
        "receipt_hash",
        None
    )

    receipt_json = json.dumps(
        receipt_without_hash,
        sort_keys=True,
        separators=(",", ":")
    )

    return hashlib.sha256(
        receipt_json.encode("utf-8")
    ).hexdigest()


def verify_receipt_hash(receipt):
    stored_hash = receipt.get(
        "receipt_hash",
        ""
    )

    calculated_hash = calculate_receipt_hash(
        receipt
    )

    return stored_hash == calculated_hash


# ============================================================
# BUILD BLOCKCHAIN PAYLOAD
# ============================================================

def build_blockchain_payload(receipt):

    task_id = int(
        receipt.get(
            "task_id",
            0
        )
    )

    receipt_hash = receipt.get(
        "receipt_hash",
        ""
    )

    if task_id <= 0:
        raise ValueError(
            "Invalid blockchain task ID"
        )

    if not receipt_hash:
        raise ValueError(
            "Receipt hash is missing"
        )

    return {
        "task_id": task_id,
        "receipt_hash": receipt_hash,
        "status": receipt.get(
            "status",
            "UNKNOWN"
        ),
        "passed": receipt.get(
            "passed",
            0
        ),
        "failed": receipt.get(
            "failed",
            0
        ),
        "errors": receipt.get(
            "errors",
            0
        )
    }


# ============================================================
# PREPARE RECEIPT
# ============================================================

def prepare_receipt_for_blockchain():

    receipt = load_receipt()

    print("=" * 60)
    print("             BLOCKCHAIN BRIDGE")
    print("=" * 60)

    print(
        f"Task ID     : {receipt.get('task_id')}"
    )

    print(
        f"Status      : {receipt.get('status')}"
    )

    print(
        f"Tests       : {receipt.get('total_tests')}"
    )

    print(
        f"Passed      : {receipt.get('passed')}"
    )

    print(
        f"Failed      : {receipt.get('failed')}"
    )

    print(
        f"Errors      : {receipt.get('errors')}"
    )

    # --------------------------------------------------------
    # Verify receipt integrity
    # --------------------------------------------------------

    if not verify_receipt_hash(receipt):
        raise ValueError(
            "Receipt hash verification failed"
        )

    print(
        "Receipt hash: VALID"
    )

    # --------------------------------------------------------
    # Build blockchain payload
    # --------------------------------------------------------

    payload = build_blockchain_payload(
        receipt
    )

    print(
        f"Receipt hash: {payload['receipt_hash']}"
    )

    print(
        f"Blockchain task ID: {payload['task_id']}"
    )

    print("=" * 60)
    print(
        "Receipt is ready for ProofRegistry."
    )
    print("=" * 60)

    return payload


# ============================================================
# MAIN
# ============================================================

if __name__ == "__main__":

    try:

        payload = prepare_receipt_for_blockchain()

        print("\nBlockchain payload:")

        print(
            json.dumps(
                payload,
                indent=2
            )
        )

    except Exception as error:

        print(
            f"\nBLOCKCHAIN BRIDGE ERROR: {error}"
        )

        raise SystemExit(1)
