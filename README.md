# Greddiit Web Application (Reddit Clone)

# This repository contains the MERN Stack Website code done in my second year (March 2023).

>## Brief Information
Greddiit is a web application that is similar to Reddit. The goal of this project is to become familiar with the MERN Stack and dockerize the app. The app is built using ReactJS for frontend and NodeJS for backend. The backend is connected to MongoDB Atlas Database. The app is dockerized using Docker Compose.

### *Run on Ubuntu 22.04.1 LTS*  


## Build

- run `npm i` in the frontend and backend folders
- run `npm start` in the both the frontend and backend folders
- open `localhost:3000` and the website should be visible
- start by writing `docker compose up -d --build`
- stop by writing `docker compose down`

---


>## File Structure
```
|-- backend  
|-- frontend  
|-- nginx
|-- docker-compose.yml  
|-- README.md
```

- The `BACKEND` folder uses ExpressJS for middleware and NodeJs for backend API calls.
    - Node needs to be installed.
    - An account needs to be made in MongoDB Atlas to create a new database.
    - Get the connection URL of the database from MongoDB atlas and store it in the .env file under DB_URL.
    - Store the JWT secret key as well in the .env file under JWT_KEY. This can be a random string.
    - This is run on port 5000 of the localhost.
    - Steps to create a backend folder:
    ```
    $ mkdir backend
    $ cd backend
    $ npm install axios
    $ npm install nodemon
    ...
    keep installing all the dependencies in a similar way
    ```

- The `FRONTEND` folder uses ReactJS for frontend and is made using create-react app.
    - Node needs to be installed.
    - This is run on port 3000 of the localhost.
    - Steps to create a React App:
    ```
    npx create-react-app frontend
    cd frontend
    npm start
    ```
    - Changes to the package.json file:
        - `"proxy": http://localhost:3000` added so that the frontend listens to the backend requests on port 3000.

 
