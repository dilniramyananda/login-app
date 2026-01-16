# Internal Login System

A secure, internal authentication application designed for employee access management. This project demonstrates a full-stack login flow using Node.js, Express, and MongoDB with server-side rendering via EJS.

## 📋 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features & Interaction Flow](#features--interaction-flow)
- [Assumptions](#assumptions)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)

## 📖 Overview
This system ensures that users (regular employees and new hires) understand the system boundaries. It handles session management, credential validation, and secure access to internal content.

## 🛠 Tech Stack
* **Frontend:** HTML5, CSS3, EJS (Embedded JavaScript Templating)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** Custom Session Handling

## 📂 Project Structure
Based on the current development build:

```text
LOGIN/
├── node_modules/       # Project dependencies
├── public/
│   └── style.css       # Static stylesheets
├── src/
│   ├── config.js       # Database configuration and connection logic
│   └── index.js        # Main application entry point & server setup
├── views/
│   ├── home.ejs        # Dashboard view (Protected route)
│   ├── login.ejs       # Login interface
│   └── signup.ejs      # Account creation view
├── .gitignore          # Git exclusion rules
├── package-lock.json   # Dependency tree lock file
└── package.json        # Project metadata and scripts

🔄 Features & Interaction Flow

Entry: System checks for an active session upon URL access. If no session exists, the user is routed to the Login Screen.

Input & Validation:
  -Validates user credentials (email/password).
  -Prevents submission if fields are empty.
  -Provides clear, non-confusing error messages for incorrect entries.
  -Success State: Redirects to the home.ejs view upon successful authentication.
  -Active State: The dashboard clearly displays the logged-in user's profile/name.
  -Exit: A visible "Log Out" button clears the session and redirects to the login screen, blocking back-navigation.

📝 Assumptions & Priorities

Internal Use: This is strictly an internal system for employees.
Credentials: Employees typically have pre-assigned credentials.
Session: Users remain logged in until they explicitly log out.
Scope: No public account creation or external password reset flows are currently active in the production logic (though templates exist).
Priority: The main focus is user clarity, smooth flow, and security.

🚀 Getting Started
Clone the repository:

Bash

git clone [https://github.com/your-username/internal-login.git](https://github.com/your-username/internal-login.git)
Install dependencies:

Bash

npm install
Configure Database:

Ensure MongoDB is running locally or update src/config.js with your connection string.

Run the application:

Bash

node src/index.js
(Or npm start if defined in package.json)

🔮 Future Improvements

UI/UX: Enhanced interface design.
Security: Implementation of JWT (JSON Web Tokens) for stateless authentication.
Session Management: Auto-logout after a specific time duration.
Features:
  -"Remember Me" functionality.
  -"Forgot Password" flow.
  -"Contact Administrator" support for new hires.
