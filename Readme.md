IRCTC Login and Booking System
This project is a complete IRCTC-like login and booking system built using Node.js and React.js. The application allows users to register, log in, search for available trains, and book seats. It consists of two main parts: Frontend (React.js) and Backend (Node.js with Express.js and MySQL).

Table of Contents
1.Project Overview
2.Frontend Setup
   2.1 Folder Structure
   2.2 How to Run
3.Backend Setup
   3.1Folder Structure
   3.2How to Run
4.Technologies Used
5.Environment Variables

Project Overview
This project simulates the booking system for Indian Railways like IRCTC, where users can:

1.Register an account.
2,Login to their account.
3.Search for available trains based on source and destination.
4.Book train seats if available.
5.View booking details.
The system also has an Admin panel where an administrator can add new trains and manage the seat availability.

Frontend Setup
The frontend is built with React.js and communicates with the backend using RESTful API calls.

Frontend Folder Structure


![backend1](https://github.com/HarshitGoyal12/booking_system/blob/main/assets/backend1.png)





How to Run Frontend

1.Install Dependencies: Navigate to the frontend directory and install the necessary dependencies:
cd frontend
npm install

2.Set Up Environment Variables: Create a .env file in the frontend directory and add the following variables:
REACT_APP_API_URL=http://localhost:3000/api

3.Run the React Development Server:
npm start

<------------------------------------------------------------------------------------------------------------------------------------------------->



Backend Setup
The backend is built using Node.js, Express.js, and MySQL. It provides the necessary APIs for user registration, login, train search, and booking functionalities.

Backend Folder Structure
backend/
├── config/
│   └── db.js                # MySQL database connection setup
├── controllers/
│   ├── authController.js    # Handles user registration and login logic
│   ├── trainController.js   # Manages train CRUD operations
│   ├── bookingController.js # Manages booking operations
├── models/
│   ├── User.js              # User model for database
│   ├── Train.js             # Train model for database
│   └── Booking.js           # Booking model for database
├── routes/
│   ├── authRoutes.js        # Routes for user authentication
│   ├── trainRoutes.js       # Routes for train management
│   └── bookingRoutes.js     # Routes for booking operations
├── middlewares/
│   └── authMiddleware.js    # JWT authentication middleware
├── server.js                # Main server setup (Express)
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation



Technologies Used
Frontend: React.js, React Router, Axios (for API calls)
Backend: Node.js, Express.js, MySQL, JWT (for authentication)
Authentication: JSON Web Token (JWT)
Styling: Basic CSS/HTML (or you can integrate Bootstrap or Material-UI)
Environment Management: dotenv for managing environment variables





Environment Variables
The project requires a .env file to store sensitive information for both the frontend and backend:

Frontend:
REACT_APP_API_URL: The backend API URL (e.g., http://localhost:3000/api).

Backend:
DB_HOST: MySQL host (usually localhost).
DB_USER: MySQL username.
DB_PASSWORD: MySQL password.
DB_NAME: MySQL database name.
JWT_SECRET: Secret key for JWT.
PORT: The port on which the backend server will run (e.g., 5000).




Conclusion
This IRCTC-like login and booking system allows users to register, log in, search trains, book tickets, and view booking details. The system has an admin panel for train management and a user interface for booking tickets. This full-stack application demonstrates the integration of React.js for the frontend, Node.js and Express.js for the backend, and MySQL as the database.



