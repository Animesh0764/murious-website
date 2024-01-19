# Murious Event Website

Welcome to the Murious Event Website repository! This website is built using React, Vite, TypeScript, and Firebase to provide an interactive and engaging platform for the Murious event.

## Table of Contents

- [Description](#description)
- [Installation and Usage](#installation-and-usage)
- [File Structure](#file-structure)
- [Database](#database)
- [Contributing](#contributing)

## Description

**Murious** is a three-day tech extravaganza that marks the annual tech fest of Jaypee University of Information Technology (JUIT). This dynamic event brings together tech enthusiasts, students, and professionals for a series of engaging and innovative tech-related and fun events. From coding competitions to workshops, guest lectures, and entertainment, Murious offers a diverse range of activities that cater to the interests of the tech community.

The Murious Event Website serves as the central hub for event information, schedules, speakers, and more, providing a seamless experience for participants and attendees. Leveraging the latest technologies such as React, Vite, TypeScript, and Firebase, the website ensures an interactive and enjoyable journey throughout the extravaganza.

The Murious Event Website leverages the power of Firebase for real-time data synchronization and authentication services, enhancing the overall user experience.

## Installation and Usage

### 1. Install Node.js

Before getting started, make sure you have Node.js installed. You can download it from [here](https://nodejs.org/en/download).

### 2. Clone the repository:

   - Open GitHub Desktop.
   - Click on "File" in the top menu and select "Clone Repository."
   - Choose the "URL" tab and enter `https://github.com/your-username/murious-website.git`.
   - Click "Clone."

### 3. Open the project in your code editor:

   - After cloning, click on "Current Repository" at the top and select "Open in Visual Studio Code" (or your preferred code editor).

### 4. Install dependencies:

   - Open a terminal in your code editor.
   - Run the following command:
     ```bash
     npm install
     ```

### 5. Run the development server:

   - Return to GitHub Desktop.
   - Click on "Repository" in the top menu and select "Open in Command Prompt" (or "Open in Terminal").
   - Run the following command:
     ```bash
     npm run dev
     ```
   - The website will be accessible at `http://localhost:5173`.

### 6. Build for production:

   - In the terminal, run:
     ```bash
     npm run build
     ```
   - The optimized production build will be available in the `dist` directory.

## File Structure

The project has the following structure:

- **`src/`**: Contains the source code for the Murious Event Website.
  - **`components/`**: Reusable React components.
  - **`pages/`**: Individual pages of the website.
  - **`styles/`**: CSS or styling files.
  - **`...`**: Other source code files.

- **`public/`**: Static assets and HTML template.

- **`vite.config.js`**: Configuration file for Vite.

- **`...`**: Other configuration files, documentation, etc.

## Database

The Murious Event Website utilizes Firebase for handling the database. Firebase provides real-time data synchronization and authentication services, enhancing the overall user experience.

To set up Firebase:

1. **Create a Firebase project:**
   - Visit the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add Project" and follow the setup instructions.

2. **Get Firebase configuration:**
   - In the Firebase Console, navigate to Project settings.
   - Under the "General" tab, find the "Your apps" section.
   - Copy the Firebase configuration object.

3. **Configure the website with Firebase:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```
   - Replace the placeholders with the corresponding values from your Firebase configuration.

## Contributing

We welcome contributions to the Murious Event Website! If you'd like to contribute, please follow these steps:

1. **Fork the repository:**
   - Click the "Star" button, followed by the "Fork" button at the top right of the GitHub page.

2. **Clone your fork:**
   - In GitHub Desktop, click on "Repository" and select "Clone Repository."
   - Choose your fork from the list.
   - Click "Clone."

3. **Create a new branch:**
   - Click on "Current Branch" at the top.
   - Type a new branch name and click "Create Branch."

4. **Make your changes and commit:**
   - Make your changes in your code editor.
   - Return to GitHub Desktop, review your changes, add a summary, and click "Commit."

5. **Push your changes to your fork:**
   - Click "Repository" and select "Push."

6. **Create a Pull Request:**
   - On GitHub, navigate to your fork.
   - Click "Pull Request" and explain your changes.
   - Click "Create Pull Request."

Thank you for contributing to the Murious Event Website! 🚀
