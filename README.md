# Grocery Booking API

A Grocery Booking API built using Node.js, TypeScript, Express, and MongoDB. This API allows admin users to manage grocery items (add, update, delete, view), while allowing regular users to view available groceries and place orders.

## Features

### Admin Features:
- Add new grocery items to the system
- View all groceries
- Update existing grocery item details
- Delete groceries

### User Features:
- View available grocery items
- Book groceries by placing an order

---

## Requirements

- **Docker** (for containerization)
- **Node.js** (for development)
- **MongoDB** (used as the database)

---

## Technologies

- **Node.js**: JavaScript runtime for server-side code
- **TypeScript**: A superset of JavaScript that adds type safety
- **Express**: A web framework for Node.js
- **MongoDB**: NoSQL database for storing groceries and orders
- **Docker**: Containerization tool for deploying and scaling the app

---

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/grocery-booking-api.git
cd grocery-booking-api
```

### 2. Install Dependencies

To install the necessary packages, run:

```bash
npm install
```

This will install all the dependencies listed in the `package.json` file.

### 3. Create Environment Variables

Create a `.env` file in the root directory with the following content:

```env
MONGO_URI=mongodb://localhost:27017/grocery-booking
PORT=3000
```

Make sure to update `MONGO_URI` with your MongoDB connection string if you're not using Docker for MongoDB.

### 4. Build the TypeScript Files

To compile TypeScript files into JavaScript, you can run:

```bash
npx tsc
```

This will compile the `.ts` files in the `src` directory into `.js` files in the `dist` directory.

Alternatively, you can set up TypeScript to watch files for changes:

```bash
npx tsc --watch
```

---

## Running the Application with Docker 1

### 1. Build the Docker Image

Run the following command to build the Docker image:

```bash
docker build -t grocery-booking-api .
```

### 2. Run MongoDB Container (if using Docker for MongoDB)

If you’re using Docker for MongoDB, start the MongoDB container first:

```bash
docker run -d --name mongo -p 27017:27017 mongo
```

This will start a MongoDB container and expose it on port 27017.

### 3. Run the Grocery Booking API Container

Now, start the API container:

```bash
docker run -d -p 3000:3000 --name grocery-booking-api grocery-booking-api
```

This will run the Grocery Booking API container and expose it on port 3000.

### 4. Access the API

Once the Docker containers are running, you can access the API at:

```bash
http://localhost:3000
```




## Running the Application with Docker  Atlernative

### 1. Build the Docker Image

Run the following command to build the Docker image:

```bash
docker compose up.
```

### 2. Run command

```bash
docker ps
```

This will run the Grocery Booking API container and expose it on port 3000.

### 4. Access the API

Once the Docker containers are running, you can access the API at:

```bash
http://localhost:3000
```

### 6. Atlernative  Start Application Using NPM(Another alternative)

You can also start the application locally without Docker by using the following commands:

- For development mode:

  ```bash
  npm run dev
  ```

- For production mode:

  ```bash
  npm start
  ```

This will start the application and make it accessible at `http://localhost:3000`.

---

## Testing the API Endpoints

### Admin Routes:

- **Add a new grocery item (POST)**: `/admin/groceries`
- **Get all groceries (GET)**: `/admin/groceries`
- **Update a grocery item (PUT)**: `/admin/groceries/:id`
- **Delete a grocery item (DELETE)**: `/admin/groceries/:id`

### User Routes:

- **View available groceries (GET)**: `/user/groceries`
- **Book groceries (POST)**: `/user/orders`

Use Postman or any API testing tool to interact with the API.
