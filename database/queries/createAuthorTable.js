import { mysqlConnection } from '../dbConnection.js'

(async function() {
    try {
        const conn = await mysqlConnection()
        // await conn.query('DROP TABLE IF EXISTS `authors`;');
        await conn.query(
            'CREATE TABLE `authors` (`id` INT UNSIGNED NOT NULL AUTO_INCREMENT, `first_name` VARCHAR(100), `last_name` VARCHAR(100), `middle_name` VARCHAR(100) NULL, `contact` JSON NULL, `created_at` TIMESTAMP, `updated_at` TIMESTAMP NULL, PRIMARY KEY (`id`));'
        )

    } catch(err) {
        console.log('Creating author table failed', err)
    }

})()