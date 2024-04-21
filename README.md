# Job Portal Application Using MVC Pattern 🌐

## Overview
This MVC-based Job Portal Application provides a comprehensive platform for both recruiters and job seekers. Built using Node.js, Express.js, and MongoDB, the app offers a streamlined and efficient hiring process.

## Features 🚀
- **User Authentication:** Secure user authentication using express-session and bcrypt.
- **Validation:** Robust input validation with express-validator for enhanced data integrity.
- **File Upload:** Utilizes Multer for handling file uploads, such as resumes.
- **Email Notifications:** Nodemailer integration for sending email notifications.
- **Dynamic Data Rendering:** Component-based project structure for seamless rendering of dynamic data.

## Installation 🛠️
1. Clone the repository: `git clone https://github.com/DhareppaHalli310807/Job_Portal_Application_Using_ExpressJs.git`
2. Install dependencies (make sure you are in correct directory): `npm install`
3. Run this command in terminal: `nodemon server.js`


## Usage 🖥️
1. Start the server: `npm run dev`
2. Visit `http://localhost:9090` in your browser to access the application.

## Project Structure 📂
- **src:**
  - Source code directory containing the main application logic.

  - **controllers:**
    - Contains controller logic for handling HTTP requests.

  - **middlewares:**
    - Centralized location for middleware functions like authentication, validation, and email sending.

  - **models:**
    - Defines data models for MongoDB, encapsulating the application's data structure.

  - **public:**
    - Publicly accessible files and directories.

    - **html:**
      - Stores HTML templates.

    - **images:**
      - Houses image assets used in the application.

    - **resumes:**
      - Location for storing uploaded resumes.

    - **scripts:**
      - Holds client-side JavaScript files.

    - **styles:**
      - Stores CSS stylesheets for styling the application.

  - **routes:**
    - Defines routes and their corresponding logic for the application.

  - **views:**
    - EJS templates for rendering dynamic content.

  - **package.json:**
    - Manifest file that describes the project and its dependencies.

  - **server.js:**
    - Entry point for the application, configuring and starting the Express server.


## Dependencies 📦
- **cookie-parser:** Simplifies handling cookies in the application.
- **ejs:** Embedded JavaScript templates for dynamic content rendering.
- **express:** Fast, unopinionated, minimalist web framework for Node.js.
- **express-ejs-layouts:** Layout support for EJS templates in Express.
- **express-session:** Session middleware for Express.js.
- **express-validator:** Middleware for request validation in Express applications.
- **multer:** Middleware for handling multipart/form-data, primarily used for file uploads.
- **nodemailer:** Module for sending emails from Node.js applications.
- **uuid:** Generates unique identifiers for creating unique IDs.

## Contributing 🤝
Contributions are welcome! Please submit any issues or pull requests.

