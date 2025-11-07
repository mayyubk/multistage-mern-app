🐳 Dockerized 3-Tier Node.js & React App

A complete 3-tier application built with React, Node.js (Express), and MongoDB, fully containerized with docker-compose and optimized multistage Dockerfiles.

Built With

🏗️ Project Architecture

The application is separated into three distinct tiers that run in their own containers:

Tier 1: 🖥️ Web (Frontend)

A React application built using create-react-app.

Served by a lightweight Nginx server.

Handles all UI logic and forwards API requests to the backend.

Tier 2: ⚙️ API (Backend)

A Node.js and Express server.

Handles business logic and provides a RESTful API.

Connects to the MongoDB database.

Tier 3: 🗃️ Data (Database)

A MongoDB database.

Runs from the official mongo image.

Uses a Docker volume (mongo-data) to persist data.

📁 Folder Structure

my-3-tier-project/
│
├── .gitignore               <-- GitHub ignore file
├── docker-compose.yml       <-- Main file to run all services
│
├── api/                     <-- The Express.js backend (Tier 2)
│   ├── Dockerfile           <-- Builds the API image
│   ├── package.json         <-- Lists 'express' & 'mongoose'
│   └── index.js             <-- Express server code
│
└── web/                     <-- The React frontend (Tier 1)
    ├── Dockerfile           <-- Builds the React app into Nginx
    ├── package.json         <-- Lists 'react' & 'react-scripts'
    ├── nginx.conf           <-- Nginx config to serve the app
    ├── public/
    │   └── index.html       <-- The single HTML page
    └── src/
        ├── App.js           <-- Main React component
        └── index.js         <-- React entry point


🚀 Getting Started

Prerequisites

Make sure you have Docker installed and running on your machine.

1. Clone the Repository

git clone <your-repo-url>
cd my-3-tier-project


2. Build and Run the Application

This single command will build the api and web images, then start all three containers.

docker-compose up --build


The services will be available at the following URLs:

Frontend (React App): http://localhost

Backend (API Server): http://localhost:5000

3. Test the Endpoints

You can verify that all tiers are communicating correctly by testing these URLs in your browser:

React App: http://localhost

You should see: "Hello from the React Web Tier!"

API (Directly): http://localhost:5000/data

You should see a JSON response from the Express server.

API (via Nginx Proxy): http://localhost/api/data

You should see the same JSON response. This proves the web tier is successfully proxying requests to the api tier.

4. Stop the Application

To stop and remove all containers, press Ctrl+C in the terminal and then run:

docker-compose down
