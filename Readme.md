# Mongoose CRUD Application

This project is a simple CRUD (Create, Read, Update, Delete) application built using Node.js and Mongoose. It provides a RESTful API for managing user data.

## Features

- Create a new user
- Retrieve user information
- Update existing user details
- Delete a user

## Technologies Used

- Node.js
- Express.js
- Mongoose
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:
   ```bash
   npm install express body-parser dotenv mongoose
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

## Usage

To start the application, run the following command:
```bash
nodemon app.js
```

The server will start on `http://localhost:9000`.

## API Endpoints

### Users

- **Create User**
  - `POST /create`
  - Request body: `{ "name": "User Name", "email": "user@example.com", "city": "example city"}`

- **Get All Users**
  - `GET /users`

- **Get User by ID**
  - `GET /update/:id`

- **Update User**
  - `PUT /users/:id`
  - Request body: `{ "name": "Updated Name", "email": "updated@example.com", "city": "updated city" }`

- **Delete User**
  - `DELETE /user/delete/:id`

## Contributing

Feel free to submit a pull request or open an issue if you have suggestions or improvements.


