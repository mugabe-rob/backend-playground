# PostgreSQL Express Backend

A Node.js backend playground using Express, Sequelize ORM, and PostgreSQL.

## Project Structure

```
postgresql/
│
├── src/
│   ├── app.js                  # Main Express app
│   ├── test-connection.js      # Script to test DB connection
│   ├── models/
│   │   ├── index.js            # Sequelize initialization and model loader
│   │   └── user.js             # User model definition
│   ├── migrations/
│   │   └── 20250525144824-create-user.js  # Migration for users table
│   ├── seeders/
│   │   └── (your-seeder-files.js)         # Seeder files (if any)
│   └── config/
│       └── config.json         # Sequelize config
├── package.json                # Project metadata and scripts
└── .sequelizerc                # Sequelize CLI config
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mugabe-rob/backend-playground.git
   cd backend-playground
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure your database:**
   - Edit `src/config/config.json` with your PostgreSQL credentials.

4. **Run migrations:**
   ```sh
   npx sequelize db:migrate
   ```

5. **(Optional) Run seeders:**
   ```sh
   npx sequelize db:seed:all
   ```

6. **Start the server:**
   ```sh
   npm run dev
   ```
   or
   ```sh
   nodemon src/app.js
   ```

## Usage

- The API runs on `http://localhost:3000` by default.
- Example endpoints:
  - `POST /users` — Create a new user
  - `GET /users` — Get all users
  - `GET /users/:id` or `GET /users/:uuid` — Get a user by id/uuid
  - `PUT /users/:id` or `PUT /users/:uuid` — Update a user
  - `DELETE /users/:id` or `DELETE /users/:uuid` — Delete a user

## Scripts

- `npm run dev` — Start server with nodemon
- `npm start` — Start server with node

## Sequelize CLI

- `npx sequelize db:migrate` — Run migrations
- `npx sequelize db:seed:all` — Run all seeders

## License

MIT

---

**Happy coding!**
