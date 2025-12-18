# Fittrack

Fittrack is a full-stack fitness tracking application that allows users to monitor their workouts, track progress, and manage their fitness goals. The app features user authentication, a personalized dashboard, workout logging, and data visualization through charts and statistics.

## Features

- **User Authentication**: Secure sign-up and sign-in with JWT tokens.
- **Dashboard**: Overview of user stats, recent workouts, and progress charts.
- **Workout Management**: Add, view, and manage workouts with categories and details.
- **Data Visualization**: Interactive charts for workout categories, weekly stats, and counts.
- **Responsive Design**: Built with Material-UI for a modern, mobile-friendly interface.
- **State Management**: Redux for efficient state handling across the app.

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For secure authentication.
- **bcrypt**: For password hashing.
- **CORS**: For handling cross-origin requests.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Material-UI (MUI)**: Component library for UI elements.
- **Redux Toolkit**: For state management.
- **Axios**: For making HTTP requests.
- **React Router**: For client-side routing.
- **Styled Components**: For custom styling.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:
   ```
   npm start
   ```
   The server will run on `http://localhost:8080`.

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   The app will run on `http://localhost:5173` (default Vite port).

## Usage

1. Open your browser and go to `http://localhost:5173`.
2. Sign up for a new account or sign in if you already have one.
3. Access the dashboard to view your stats and recent workouts.
4. Navigate to the Workouts page to add new workouts or view existing ones.
5. Use the charts and cards to track your fitness progress.

## API Endpoints

### User Routes
- `POST /api/user/signup`: Register a new user.
- `POST /api/user/signin`: Authenticate and log in a user.
- `GET /api/user/`: Get user details (requires authentication).

### Workout Routes
- `GET /api/workouts`: Get all workouts for the authenticated user.
- `POST /api/workouts`: Add a new workout.
- `PUT /api/workouts/:id`: Update a workout.
- `DELETE /api/workouts/:id`: Delete a workout.

## Project Structure

```
Fittrack/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── index.html
│   ├── package.json
│   └── ...
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact the maintainers.
