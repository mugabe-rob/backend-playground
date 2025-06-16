# Backend Playground

Welcome to the **Backend Playground**!  
This project provides a flexible, modular backend and a modern React frontend for managing products and user privileges. It’s ideal for experimenting, learning, or building full-stack applications.

---

## 📁 Project Structure

```
backend-playground/
├── frontend-playground/         # React frontend (user authentication, product browsing)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── src/                        # Backend source code
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── migrations/
│   ├── models/
│   ├── modules/
│   ├── routes/
│   └── tests/
├── server.js                   # Backend entry point
├── package.json                # Backend dependencies
└── README.md
```

---

## ✨ Features

- Modular backend architecture with clear separation of concerns
- Middleware for request logging
- Configurable environments
- CRUD APIs for products, courses, and books
- User authentication with protected routes
- React frontend with modern UI, authentication, and product browsing

---

## 🚀 Getting Started

### Backend

1. **Install dependencies:**
   ```bash
   cd backend-playground
   npm install
   ```

2. **Start the backend server:**
   ```bash
   node server.js
   ```

### Frontend

1. **Install dependencies:**
   ```bash
   cd frontend-playground
   npm install
   ```

2. **Start the frontend dev server:**
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3001](http://localhost:3001) (or your configured port).

---

## 📦 Usage

- Use the frontend to register, login, and browse products.
- Access backend APIs for CRUD operations on books, courses, and products.
- Authentication is required to access protected routes (e.g., products page).

---

## 🧪 Testing

Place your backend test files inside the `tests/` directory. Use your preferred testing framework (e.g., Jest, Mocha):

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo, submit pull requests, or open issues.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---