// Get the client
import mysql from 'mysql2/promise';

export const mysqlConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'book_api_no_framework'
        })

        console.log('db connected')
        

    } catch(err) {
        console.log('error connecting to db', err)
    }
}

mysqlConnection()