<<<<<<< HEAD
This project is a React-based web application that implements Firebase authentication, including sign-in mechanisms via email/password and Google OAuth. 
It utilizes Material-UI for the user interface components to ensure a responsive and modern design. 
This README provides setup instructions and additional information to help all team members get started with development in Visual Studio Code.

Project Structure
/
├── src/
│   ├── components/           # Shared React components
│   │   └── LoginForm.js      # LoginForm component for user authentication
│   ├── firebase/             # Firebase configurations and initializations
│   │   └── firebase.js       # Firebase configuration file
│   ├── App.css               # Main CSS file for global styles
│   ├── SignIn.js             # SignIn component for handling authentication
│   └── App.js                # Root React component
├── public/
│   └── index.html            # Entry point HTML file
└── package.json              # npm dependencies and scripts


Setup Instructions
Prerequisites
Node.js and npm installed.
Visual Studio Code (recommended).

Open the project in Visual Studio Code:
Launch Visual Studio Code.
Select File > Open Folder... and choose the project directory.
Install dependencies:
bash
Copy code
npm install
Set up Firebase:
Ensure that src/firebase/firebase.js is configured with your Firebase project credentials.
Start the development server:
bash
Copy code
npm start
This will run the app in the development mode on http://localhost:3000.

Development Best Practices
Use the integrated terminal in Visual Studio Code for running scripts.
Utilize the built-in Git support in VS Code for version control.
Configure the workspace settings in .vscode/settings.json for consistent coding styles.
=======
# Comp680FSWeb

File Sharing Website

# Description

## Project Description

This project is designed to be a File Sharing Website (FSWeb) that allows users to:
- upload documents to an online storage
- we intend to add compression options based on the file type being uploaded
- download documents from the same online storage (we will be decompressing the data upon download request)

> [!Note]
> The data uploaded is visible by ANY authenticated user.
> This is not a private data storage service.

## Tech Stack

We are utilizing the MERN stack:

- MongoDB for the database
- Express.JS for the backend
- React.JS for the frontend
- Node.JS for the backend

A future development is to make the website serverless (hosted on the cloud).

# Structure

## File Structure

```
.
├──client
│   ├──...
│   └──...
├──Documentation
│   ├──Sample
│   │   ├──Images
│   │   └──sample.tex
│   ├──Sprint1
│   │   ├──Images
│   │   └──sample.tex
│   └──Sprint2
│       ├──Images
│       └──sample.tex
├──Presentations
│   └──Presentation1.pptx
├──server
│   ├──...
│   └──...
└──Readme.md
```

The "client" folder runs the frontend of the app

The "server" folder runs the backend of the app

# Installation
## NPM
run the following commands in order to set up the client and server properly.

## For client:
```
cd ./client
npm install
```

## For server:
```
cd ./server
npm install
```

Additionally, you will need to connect the server to a mongoDB database using the `.env` file.
To be more specific, you will need the `.env` to contain the variable `MONGO_URI` configured to your database with associated Username and Password.

## Docker
Install docker, add the `.env` file as mentioned before, and run
``` shell
docker compose up -d
```
This brings up containers.

# Legal

The content stored in the database is not representative of the ideas of the developers. They are also not legally binding to us as developers. We offer a service and are not legally responsible if users abuse it.
>>>>>>> main
