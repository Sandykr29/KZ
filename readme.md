# KZ Backend - Task Management System

This is a backend application built with Node.js, Express, TypeScript, and MongoDB. It provides a RESTful API for managing tasks and user authentication. The application allows users to register, log in, create tasks, update tasks, mark tasks as completed or pending, delete tasks, and perform advanced searches and filtering.

**Project Completed By**: Sandeep Kumar  
**Live API URL**: [KZ Backend Live](https://kz-w1l6.onrender.com)

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Environment Variables](#environment-variables)
5. [API Endpoints](#api-endpoints)
6. [Folder Structure](#folder-structure)
7. [Running the Application](#running-the-application)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

- **User Authentication**:
  - Register a new user.
  - Log in with an existing user and receive a JWT token.
- **Task Management**:
  - Create a new task.
  - Retrieve all tasks for the logged-in user.
  - Update task details (title, description, completion status).
  - Mark a task as completed or pending.
  - Delete a task.
- **Task Filtering & Search**:
  - Retrieve completed tasks.
  - Retrieve pending tasks.
  - Search tasks by title or description.
  - Combine filters to get specific results.
- **Protected Routes**:
  - All task-related routes are protected and require a valid JWT token for access.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - TypeScript
- **Database**:
  - MongoDB (with Mongoose ODM)
- **Authentication**:
  - JSON Web Tokens (JWT)
  - bcryptjs for password hashing
- **Validation**:
  - Joi for request body validation
- **Dev Tools**:
  - Nodemon for hot-reloading during development
  - ts-node for running TypeScript files directly
- **Other Libraries**:
  - cors for enabling Cross-Origin Resource Sharing
  - dotenv for managing environment variables

---

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sandykr29/KZ.git
   cd kz-backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=8000
     ```
4. **Run the application**:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run build
     npm start
     ```

---

## Environment Variables

The following environment variables are required to run the application:

| Variable   | Description                         | Example Value |
|------------|-------------------------------------|---------------|
| MONGO_URI  | MongoDB connection string          | `mongodb+srv://user:password@cluster0.mongodb.net` |
| JWT_SECRET | Secret key for signing JWT tokens  | `your_jwt_secret_key` |
| PORT       | Port on which the server will run  | `8000` |

---

## API Endpoints

### Authentication

#### **POST** `/api/auth/register`
Register a new user.

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### **POST** `/api/auth/login`
Log in with an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here"
}
```

### Tasks (Protected Routes)

#### **POST** `/api/tasks`
Create a new task.

**Request Body:**
```json
{
  "title": "Complete project",
  "description": "Finish the backend and frontend"
}
```

#### **GET** `/api/tasks`
Retrieve all tasks for the logged-in user.

#### **PUT** `/api/tasks/:taskId`
Update a task's details.

**Request Body:**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}
```

#### **DELETE** `/api/tasks/:taskId`
Delete a task.

#### **PATCH** `/api/tasks/:taskId/completed`
Mark a task as completed.

#### **PATCH** `/api/tasks/:taskId/pending`
Mark a task as pending.

#### **GET** `/api/tasks/task`
Retrieve all tasks.

#### **GET** `/api/tasks?status=completed`
Retrieve all completed tasks.

#### **GET** `/api/tasks?status=pending`
Retrieve all pending tasks.

#### **GET** `/api/tasks?search=meeting`
Search for tasks containing "meeting" in the title or description.

#### **GET** `/api/tasks?status=completed&search=report`
Retrieve all completed tasks containing "report" in the title or description.

---

## Folder Structure

```
kz-backend/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── taskController.ts
│   ├── middlewares/
│   │   └── authMiddleware.ts
│   ├── models/
│   │   ├── Task.ts
│   │   └── User.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   └── taskRoutes.ts
│   ├── utils/
│   │   └── validateInput.ts
│   └── server.ts
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## Running the Application

### Development Mode:
Start the server with hot-reloading:
```bash
npm run dev
```

### Production Mode:
Build the TypeScript files:
```bash
npm run build
```
Start the server:
```bash
npm start
```

---

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

**Project Completed By**: Sandeep Kumar

