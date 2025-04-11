import mysql.connector
from mysql.connector import Error

def get_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='Rohan@#5828',  
        database='train_ticket'
    )