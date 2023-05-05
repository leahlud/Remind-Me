import mysql.connector

remind_db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="reminddatabase"
)

mycursor = remind_db.cursor(buffered=True)

mycursor.execute("SHOW DATABASES")
print(mycursor.fetchall())

mycursor.execute("SHOW TABLES")
print(mycursor.fetchall())

sql = "INSERT INTO schedule (student, class, time) VALUES (%s, %s, %s)"
val = [('Bob', 'CS124', '9:00 AM'), ('Kate', 'MATH257', '2:00 PM'), ('Peter', 'PHYS212', '1:00 PM'), ('Peter', 'CS222', '9:00 PM')]
mycursor.executemany(sql, val)

mycursor.execute("SELECT * FROM schedule")
print(mycursor.fetchall())

remind_db.commit()