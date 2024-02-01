// Get the client
import mysql from 'mysql2/promise';

export const mysqlConnection = async () => {
        return await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'book_api_no_framework'
        })
}

