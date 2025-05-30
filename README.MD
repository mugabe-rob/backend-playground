# Backend Playground

Welcome to the **Backend Playground**! This project provides a flexible and modular backend architecture tailored for managing products, courses, and books. It's ideal for experimenting, learning, or building upon.

## 📁 Project Structure

```
backend-playground/
├── src/
│   ├── config/                  # Environment and app configurations
│   ├── models/                  # Database schemas/models
│   ├── modules/
│   │   └── books/
│   │       ├── books.controller.js
│   │       ├── books.service.js
│   │       └── index/router.js
│   └── index/moduleRouter.js   # Routes aggregator
├── Server/
│   └── main.js                 # Entry point
├── tests/                      # Unit and integration tests
└── package.json
```

## ✨ Features

- Modular architecture with clear separation of concerns
- Middleware for request logging
- Configurable environments
- CRUD APIs for products, courses, and books

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mugabe-rob/backend-playground.git
cd backend-playground
npm install
```

2. Start the server:

```bash
node server.js
```

## 📦 Usage

- Access the available APIs to perform CRUD operations on books, courses, and products.
- Modify or extend modules as needed to experiment or add new features.

## 🧪 Testing

Place your test files inside the `tests/` directory. Use your preferred testing framework (e.g., Jest, Mocha).

```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo, submit pull requests, or open issues.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
