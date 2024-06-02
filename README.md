# MERN Stack Job Seeking Web Application

A job-seeking web app built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Browse job listings
- View job details
- Apply for jobs
- User authentication
- Responsive design

## Technologies

- MongoDB
- Express.js
- React.js
- Node.js
- Mongoose
- JWT for authentication

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ranulal2001/MERN_WEB_SEEKING_BACKEND
    cd MERN-Stack-Job-Seeking-Web-Application
    ```

2. Install server dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Install client dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

4. Set up environment variables in `backend/.env`:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

## Running the Application

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

2. Start the frontend server:

    ```bash
    cd ../frontend
    npm start
    ```

3. Open `http://localhost:3000` in your browser.

## API Endpoints

- `GET /api/jobs` - Retrieve all job listings
- `POST /api/jobs` - Create a new job listing (requires auth)
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login and JWT retrieval

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b my-feature-branch`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin my-feature-branch`
5. Submit a pull request

## License

MIT License. See [LICENSE](LICENSE) for details.
