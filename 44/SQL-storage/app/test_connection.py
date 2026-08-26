import psycopg2

try:
    conn = psycopg2.connect(
        host="127.0.0.1",
        port=5433,
        database="settlr",
        user="settlr",
        password="settlr_password"
    )

    print("PostgreSQL connection SUCCESS!")

    cursor = conn.cursor()
    cursor.execute("SELECT current_user, current_database();")

    print(cursor.fetchone())

    cursor.close()
    conn.close()

except Exception as e:
    print("PostgreSQL connection FAILED!")
    print(e)