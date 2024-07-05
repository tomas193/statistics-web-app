import sqlite3

conn = sqlite3.connect('enterprise2.db')

cursor = conn.cursor()

conn.commit()

cursor.execute("SELECT * FROM KPIS_INPUT")
rows = cursor.fetchall()
for row in rows[1]:
    print(row)

conn.close()