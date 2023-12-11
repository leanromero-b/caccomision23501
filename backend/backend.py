# import mysql.connector
# import datetime


# class Mensaje:
#     def __init__(self, host, user, password, database):
#         self.conn = mysql.connector.connect(
#             host=host,
#             user=user,
#             password=password
#         )
#         self.cursor = self.conn.cursor()
        
#         try:
#             self.cursor.execute(f"USE {database}")
#         except mysql.connector.Error as err:

#             if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
#                 self.cursor.execute(f"CREATE DATABASE {database}")
#                 self.conn.database = database
#             else:
#                 raise err
            
#         self.cursor.execute('''CREATE TABLE IF NOT EXISTS mensajes (
#             id int(11) NOT NULL AUTO_INCREMENT,
#             nombre varchar(30) NOT NULL,
#             apellido varchar(30) NOT NULL,
#             ciudad varchar(30) NOT NULL,
#             telefono varchar(10) NOT NULL,
#             email varchar(60) NOT NULL,
#             descripcion varchar(500) NOT NULL,
#             fecha_envio datetime NOT NULL,
#             leido tinyint(1) NOT NULL,
#             gestion varchar(500) DEFAULT NULL,
#             fecha_gestion datetime DEFAULT NULL,
#             PRIMARY KEY(`id`)
#             ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
#             ''')
#         self.conn.commit()
#         self.cursor.close()
#         self.cursor = self.conn.cursor(dictionary=True)
        
        
#     def enviar_mensaje(self, nombre, apellido, ciudad, telefono, email, descripcion):
#         sql = "INSERT INTO mensajes(nombre, apellido, ciudad, telefono, email, descripcion, fecha_envio) VALUES (%s, %s, %s, %s, %s, %s, %s)"
#         fecha_envio = datetime.datetime.now()
#         valores = (nombre, apellido, ciudad, telefono, email, descripcion, fecha_envio)
#         self.cursor.execute(sql, valores)        
#         self.conn.commit()
#         # self.cursor.close()
#         return True
    
    
#     def listar_mensajes(self):
#         self.cursor.execute("SELECT * FROM mensajes")
#         mensajes = self.cursor.fetchall()
#         return mensajes

    
#     def responder_mensaje(self, id, gestion):
#         fecha_gestion = datetime.datetime.now()
#         sql = "UPDATE mensajes SET leido = 1, gestion = %s, fecha_gestion = %s WHERE id = %s"
#         valores = (gestion, fecha_gestion, id)
#         self.cursor.execute(sql, valores)
#         self.conn.commit()
#         return self.cursor.rowcount > 0

    
#     def eliminar_mensaje(self, id):
#         self.cursor.execute(f"DELETE FROM mensajes WHERE id = {id}")
#         self.conn.commit()
#         return self.cursor.rowcount > 0

    
#     def mostrar_mensaje(self, id):
#          sql = f"SELECT id, nombre, apellido, ciudad, telefono, email, descripcion, fecha_envio, leido, gestion, fecha_gestion FROM mensajes WHERE id = {id}"
#          self.cursor.execute(sql)
#          return self.cursor.fetchone()        
        
        
        
# mensaje = Mensaje("localhost", "root", "", "contactos")
# # mensaje.enviar_mensaje("Julian", "Alvarez", "Manchester", "7894151324", "araña@hmail.com", "spiderman!" )
# # mensaje.enviar_mensaje("Enzo", "Fernandez", "Londres", "9876543126", "enzo@caboom.com", "goool!" )
# # print(mensaje.listar_mensajes())
# # mensaje.eliminar_mensaje(4)
# mensaje.responder_mensaje(3,"Ya me enviaste ese mensaje")