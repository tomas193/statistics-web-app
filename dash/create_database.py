import sqlite3

# Conectar a la base de datos (se creará si no existe)
conn = sqlite3.connect('enterprise2.db')

# Crear un cursor para interactuar con la base de datos
cursor = conn.cursor()


cursor.execute('''
    CREATE TABLE IF NOT EXISTS PDCA (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        value TEXT NOT NULL,
        target TEXT NOT NULL,
        flag INTEGER NOT NULL,
        flag1 INTEGER NOT NULL,
        flag2 INTEGER NOT NULL,
        flag3 INTEGER NOT NULL,
        flag4 INTEGER NOT NULL
    )
''')

cursor.execute('''
        CREATE TABLE IF NOT EXISTS KPIS_INPUT(
        id INTEGER PRIMARY KEY,
        planta TEXT NOT NULL,
        past TEXT NOT NULL,
        jan TEXT NOT NULL,
        feb TEXT NOT NULL,
        mar TEXT NOT NULL,
        apr TEXT NOT NULL,
        may TEXT NOT NULL,
        jun TEXT NOT NULL,
        jul TEXT NOT NULL,
        aug TEXT NOT NULL,
        sep TEXT NOT NULL,
        oct TEXT NOT NULL,
        nov TEXT NOT NULL,
        dec TEXT NOT NULL,
        ytd TEXT NOT NULL
    )
''')

cursor.execute('''
    DROP TABLE KPIS_RES
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS KPIS_RES(
        id INTEGER PRIMARY KEY,
        planta TEXT NOT NULL,
        in0 TEXT NOT NULL,
        in1 TEXT NOT NULL,
        in2 TEXT NOT NULL,
        in3 TEXT NOT NULL,
        in4 TEXT NOT NULL,
        in5 TEXT NOT NULL,
        in6 TEXT NOT NULL,
        in7 TEXT NOT NULL,
        in8 TEXT NOT NULL,
        in9 TEXT NOT NULL,
        in10 TEXT NOT NULL,
        in11 TEXT NOT NULL,
        in12 TEXT NOT NULL,
        in13 TEXT NOT NULL,
        in14 TEXT NOT NULL,
        in15 TEXT NOT NULL,
        in16 TEXT NOT NULL,
        in17 TEXT NOT NULL,
        in18 TEXT NOT NULL,
        in19 TEXT NOT NULL,
        in20 TEXT NOT NULL,
        in21 TEXT NOT NULL,
        in22 TEXT NOT NULL,
        in23 TEXT NOT NULL,
        in24 TEXT NOT NULL,
        in25 TEXT NOT NULL,
        in26 TEXT NOT NULL
    )
''')

# Guardar los cambios y cerrar la conexión
conn.commit()
conn.close()

print("Base de datos creada exitosamente.")

