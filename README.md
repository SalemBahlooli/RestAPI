# Express.js REST API with MongoDB

This project is a robust REST API built with Express.js and MongoDB. It provides a full-featured backend for user management with database persistence.

## Features

- CRUD operations for user management
- MongoDB integration for data persistence
- Input validation using express-validator
- Error handling middleware
- RESTful routing

## Prerequisites

- Node.js (version 12 or higher recommended)
- npm (comes with Node.js)
- MongoDB (Make sure you have MongoDB installed and running on your machine)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/express-mongodb-api.git
   ```

2. Navigate to the project directory:
   ```
   cd express-mongodb-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   ```
   Replace `your_database_name` with your preferred database name.

## Usage

1. Start the server:
   ```
   npm start
   ```
   For development with auto-restart on file changes:
   ```
   npm run dev
   ```

2. The API will be available at `http://localhost:3000`

## API Endpoints

- GET `/api/users`: Retrieve all users
- GET `/api/users/:id`: Retrieve a specific user
- POST `/api/users`: Create a new user
- PUT `/api/users/:id`: Update an existing user
- DELETE `/api/users/:id`: Delete a user

## Testing the API

You can use cURL commands to test the API:

1. Get all users:
   ```
   curl http://localhost:3000/api/users
   ```

2. Get a specific user (replace `<user_id>` with an actual MongoDB ObjectId):
   ```
   curl http://localhost:3000/api/users/<user_id>
   ```

3. Create a new user:
   ```
   curl -X POST -H "Content-Type: application/json" -d '{"name":"New User","email":"newuser@example.com"}' http://localhost:3000/api/users
   ```

4. Update a user (replace `<user_id>` with an actual MongoDB ObjectId):
   ```
   curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name","email":"updated@example.com"}' http://localhost:3000/api/users/<user_id>
   ```

5. Delete a user (replace `<user_id>` with an actual MongoDB ObjectId):
   ```
   curl -X DELETE http://localhost:3000/api/users/<user_id>
   ```

## Project Structure

- `src/app.js`: Main application file
- `src/server.js`: Server startup script
- `src/config.js`: Configuration settings
- `src/routes/userRoutes.js`: User routes
- `src/controllers/userController.js`: User controller with CRUD operations
- `src/models/userModel.js`: Mongoose model for User
- `src/middleware/validators.js`: Input validation middleware
- `src/middleware/errorHandler.js`: Global error handling middleware
- `src/db.js`: Database connection setup

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
