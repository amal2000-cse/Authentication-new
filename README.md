# Authentication



## Project setup

1. Start the server: `nodemon index.js`
2. Visit the app: `http://localhost:10000`


# Project Name

**Project Description:** Briefly describe the purpose and functionality of your website.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### Sign Up

- Users can register for an account by providing necessary information.
- The data is stored in MongoDB using Mongoose for data modeling.

### Sign In

- Registered users can log in using their credentials.
- Authentication is managed through Passport.

### Google Authentication

- Users have the option to log in using their Google accounts.
- Google OAuth is implemented for secure and convenient authentication.

### Password Reset

- Users can reset their passwords if they forget them.
- Password reset functionality is securely implemented.

### Logout

- Users can log out of their accounts to end their session.

## Technologies Used

- Node.js: JavaScript runtime
- Express: Web application framework for Node.js
- MongoDB: NoSQL database for storing user data
- Mongoose: MongoDB object modeling for Node.js
- Passport: Authentication middleware for Node.js
- EJS (Embedded JavaScript): Templating language for dynamic content

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and update the connection details in your application.
4. Configure Google OAuth credentials if using Google authentication.

## Usage

1. Run the application using `node index.js`.
2. Access the website through your browser.

## Contributing

Feel free to contribute to the project. Follow the standard GitHub flow:

1. Fork the project.
2. Create a new branch.
3. Make changes and commit them.
4. Open a pull request.

