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

## API Functionality

- Google Authentication
- ...

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


# Legal

The content stored in the database is not representative of the ideas of the developers. They are also not legally binding to us as developers. We offer a service and are not legally responsible if users abuse it.
