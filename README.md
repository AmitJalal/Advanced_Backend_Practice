# Welcome to the project

## Project Setup
- Clone the repo.
- `npm i` or `npm install`.
- Set-up `.env` file to add your environment variables.
    - `PORT = <PORT>`
- Inside the `src/config` folder create a new file `config.json` and then add the following:
```
{
  "development": {
    "username": "<DB_LOGIN_NAME>",
    "password": "<DB_PASSWORD>",
    "database": "<DB_NAME>",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- After this run `npx sequelize db:create`
   - DB will be created, you can check it by `show databases`

- Create model, eg. is shown as following:
  - `npx sequelize model:generate --name City --attributes name:String`.
  - for more refer sequelize docs.
- After creating the model, new file will be created inside the `models` follder and `migrations` folder. After making the changes, hit the command below to reflect the changes to your database:
  - `npx sequelize db:migrate`, this will create the table in your db.

- To check the the tables, follow the following steps :
  - First connect to your db, here we have mysql as our db.
  - `mysql -u root -p`, then enter your password to connect to your mysql server.

- First of all view all databases:
  - mysql> `show databases;`
  ```
  +--------------------+
  | Database           |
  +--------------------+
  | amitdb             |
  | flight_db          |
  | information_schema |
  | mysql              |
  | new_db             |
  | performance_schema |
  | pet_shop           |
  | sys                |
  +--------------------+
  8 rows in set (0.00 sec)

  ```

- To use particular db:
  - mysql> `use flight_db;`
  ``` 
    Database changed
  ```

- Then Select the db:
   - mysql> `select database();`
   ```
    +------------+
    | database() |
    +------------+
    | flight_db  |
    +------------+
    1 row in set (0.00 sec)

   ```

- To view the tables:
   - mysql> `show tables;`
   ```
    +---------------------+
    | Tables_in_flight_db |
    +---------------------+
    | cities              |
    | sequelizemeta       |
    +---------------------+
    2 rows in set (0.01 sec)

   ```

- To view all the columns:
   - mysql> `desc cities;` or mysql> `show columns from cities;`
   ```
    +-----------+--------------+------+-----+---------+----------------+
    | Field     | Type         | Null | Key | Default | Extra          |
    +-----------+--------------+------+-----+---------+----------------+
    | id        | int          | NO   | PRI | NULL    | auto_increment |
    | name      | varchar(255) | YES  |     | NULL    |                |
    | createdAt | datetime     | NO   |     | NULL    |                |
    | updatedAt | datetime     | NO   |     | NULL    |                |
    +-----------+--------------+------+-----+---------+----------------+
    4 rows in set (0.00 sec)

   ```

   - mysql> `desc sequelizemeta;`
   ```
    +-------+--------------+------+-----+---------+-------+
    | Field | Type         | Null | Key | Default | Extra |
    +-------+--------------+------+-----+---------+-------+
    | name  | varchar(255) | NO   | PRI | NULL    |       |
    +-------+--------------+------+-----+---------+-------+
    1 row in set (0.00 sec)

   ```