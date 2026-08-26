import fitz


def extract_text(pdf_path):
    document = fitz.open(pdf_path)

    text = ""

    for page in document:
        text += page.get_text()
        text += "\n"

    document.close()

    return text