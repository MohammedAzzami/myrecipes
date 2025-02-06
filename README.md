# MERN Recipe App

A full-stack web application that allows users to save, create, and view recipes. Built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Introduction

This project is a recipe app where users can create and save their favorite recipes. The app consists of two main parts:

- **Backend**: The server is built using Express.js, which connects to a MongoDB database where users' recipes are stored.
- **Frontend**: The client-side is built with React.js, providing an interactive UI for users to create, view, and save recipes.

## Technologies Used

- **Frontend**:
  - React.js
  - React Router
  - Material-UI (or custom styling)
  - TailwindCSS
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Other**:
  - dotenv for environment variables
  - CORS for cross-origin requests
  - JWT (json web token)

## Features

- User authentication (login and signup).
- Ability to create and save recipes.
- View saved recipes.
- Responsive layout.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/<your-username>/MERN-Recipe.git


2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server/src/` folder and add your MongoDB connection string:

   ```bash
   MONGO_URI=your-mongodb-connection-string
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The backend server should now be running on port `3001`.

### Frontend Installation

1. Navigate to the `client` folder:

   ```bash
   cd client
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend should now be running on port `3001`.

   
