# Backend Playground

Welcome to the Backend Playground! This project is designed to provide a flexible and modular backend architecture for managing products and courses, along with a simple book management system. 

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Modular architecture with separate controllers, models, and routes.
- Middleware for logging requests.
- Configurable settings for different environments.
- Basic CRUD operations for products, courses, and books.

## Project Structure

The project is organized as follows:
backend-playground/
│
├── controllers/
│   └── product.controller.js
│   └── CourseController.js
│
├── models/
│   └── courseModel.js
│   └── product.model.js
│
├── routes/          
│   └── courseRoutes.js
│   └── product.route.js
│  
│
├── middleware/
│   └── logger.js
│
│
│
├── Server/
│    └── main.js    
│
├── config/
│         └── config.js
│         └── index.js
│
├── src/
│           └── books/
│                      └── books.controller.js
│                      └── books.service.js
│                      └── index.js
│            
│           └──config/
│                     └── config.json
│
│           └──models/
│                    └──index.js
│                    └──user.js
│
│           └──modules/
│                   └──user.js                         
│           └──app.js
│           └──test-connection.js
│
│ 
├── tests/
│  
│
├── server.js   
├── package.json
├── .gitignore
└── .gitignore.bak
└── package-lock.json


## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mugabe-rob/backend-playground.git
   cd backend-playground

   npm install
   node server.js

##usage
To start the server, run:

node server.js

## License

This project is licensed under the MIT License.

## Testing
To run tests, you can use your preferred testing framework. Ensure that you have the necessary test files in the tests/ directory.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
