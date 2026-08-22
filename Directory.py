from pathlib import Path
import os

PROJECT_ROOT = Path(__file__).resolve().parent


def create_file():
    print("\n" + "=" * 60)
    print("Enter file path (example: app\\models\\analysis.py)")
    print("Type 'exit' to quit.")
    print("=" * 60)

    file_path = input("File path: ").strip()

    if file_path.lower() == "exit":
        return False

    if not file_path:
        print("❌ File path cannot be empty.")
        return True

    file_path = file_path.replace("\\", os.sep).replace("/", os.sep)
    path = Path(file_path)

    if path.is_absolute() or ".." in path.parts:
        print("❌ Invalid path. Use a path inside the project.")
        return True

    full_path = PROJECT_ROOT / path

    print("\nPaste your code below.")
    print("When finished, type END on a new line.")
    print("-" * 60)

    lines = []

    while True:
        line = input()

        if line == "END":
            break

        lines.append(line)

    code = "\n".join(lines)

    full_path.parent.mkdir(parents=True, exist_ok=True)
    full_path.write_text(code + "\n", encoding="utf-8")

    print("-" * 60)
    print(f"✅ Saved: {full_path.relative_to(PROJECT_ROOT)}")
    print(f"📦 Size: {full_path.stat().st_size} bytes")

    return True


def main():
    print("""
╔══════════════════════════════════════════════════════════╗
║              Circularity AI File Creator                 ║
╠══════════════════════════════════════════════════════════╣
║  Enter a path, paste the code, then type END.            ║
║  Type 'exit' as the path to quit.                        ║
╚══════════════════════════════════════════════════════════╝
""")

    while create_file():
        pass

    print("\n👋 Done.")


if __name__ == "__main__":
    main()