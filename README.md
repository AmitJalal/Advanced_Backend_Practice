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