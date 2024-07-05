import sqlite3
import random

def insertar(planta):
    # Conectar a la base de datos
    conn = sqlite3.connect('enterprise2.db')
    cursor = conn.cursor()

# Insertar datos en la tabla 'personas'
#nuevo_usuario = ("peter", 'coating',"peter@example.com",90063)

    value=''
    #target=''

    for i in range(0,14):
        if i<13:
            value+=str(0)+','
            #target+=str(round(random.uniform(0,100),3))+','
        else:
            value+=str(0)
            #target+=str(round(random.uniform(0,100),3))

    in0=in1=in2=in3=in4=in5=in6=in7=in8=in9=in10=in11=in12=in13=in14=in15=in16=in17=in18=in19=in20=in21=in22=in23=in24=in25=in26=value

    # Utilizamos placeholders '?' en la consulta SQL para evitar SQL injection
    #cursor.execute('INSERT INTO personas (nombre, area, email, id_empleado) VALUES (?, ?,?,?)', nuevo_usuario)
    
    cursor.execute('INSERT INTO KPIS_RES (planta,in0,in1,in2,in3,in4,in5,in6,in7,in8,in9,in10,in11,in12,in13,in14,in15,in16,in17,in18,in19,in20,in21,in22,in23,in24,in25,in26) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', (planta,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value,value))

    # Utiliza la declaración SQL UPDATE
    #cursor.execute("UPDATE chart SET nombre = ? WHERE id = ?", ('test', 1))

    # Guardar los cambios y cerrar la conexión
    conn.commit()
    conn.close()

    print("Datos insertados exitosamente.")
    
for i in range(0,4):
    plantas=['ETO','ELM','ECO I','ECO II']
    insertar(plantas[i])
