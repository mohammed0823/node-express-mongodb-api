# API Documentation

## Overview
This project is a RESTful API that allows CRUD operations to manage items. The API is built using **Node.js**, **Express**, and **MongoDB**.

## API Endpoints

The following endpoints are available:

### 1. **GET /items**
- **Description**: Retrieves a list of all items.
- **Response**: An array of item objects.

### 2. **GET /items/id**
- **Description**: Retrieves a single item by its ID.
- **Response**: The item object.

### 3. **POST /items**
- **Description**: Creates a new item.
- **Request Body**:
  ```json
  {
    "name": "New Item",
    "description": "This is a new item"
  }
  ```
- **Response**: The created item object.

### 4. **PUT /items/id**
- **Description**: Updates an existing item by its ID.
- **Request Body**:
  ```json
  {
    "name": "Updated Item Name"
  }
  ```
- **Response**: The updated item object.

### 5. **DELETE /items/id**
- **Description**: Deletes an item by its ID.
- **Response**: A message indicating the item was deleted.

## Running the API Locally

To run the API locally on your machine, follow these steps:

### Prerequisites
Make sure you have the following installed:
- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

### 1. **Clone the Repository**

Clone this repository to your local machine:

```bash
git clone https://github.com/mohammed0823/node-express-mongodb-api.git
```

### 2. **Install Dependencies**

Navigate to the project folder and install the required dependencies:

```bash
cd <project-folder>
npm install
```

### 3. **Start MongoDB**

If you have MongoDB installed locally, start the MongoDB server by running:

```bash
mongod
```

This will run MongoDB on its default port 27017.

### 4. **Run the API**

Start the server by running the following command in your project directory:

```bash
npm start
```

The API will be running at http://localhost:3000.

### 5. **Testing the API**

You can test the API using Postman. The API is structured with several endpoints for CRUD operations (Create, Read, Update, Delete) for items.

- **GET /items**: Retrieves a list of all items.
- **GET /items/id**: Retrieves a specific item by ID.
- **POST /items**: Creates a new item.
- **PUT /items/id**: Updates an existing item by ID.
- **DELETE /items/id**: Deletes an item by ID.

You can import the Postman collection from this project and run the tests for each endpoint.

## API Documentation Access

For detailed API documentation, including request parameters, response formats, and examples, visit the Swagger UI.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
