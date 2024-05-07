# Vehicle REST API
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mocha](https://img.shields.io/badge/-Mocha-8D6748?style=flat-square&logo=mocha&logoColor=white)](https://mochajs.org/) [![apidoc](https://img.shields.io/badge/-apidoc-000000?style=flat-square&logo=apidoc&logoColor=white)](https://apidocjs.com/)[![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)




This project provides a REST API for managing vehicles. It allows users to perform CRUD (Create, Read, Update, Delete) operations on vehicle data.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](```sh
```
#contributing)
- [License](#license)

## Introduction

This REST API is built using Node.js, Express.js, and MongoDB, providing a simple yet efficient way to manage vehicle information. It includes features such as creating, retrieving, updating, and deleting vehicles.

## Requirements

To run this project, you need to have the following software installed on your system:

- Node.js: The project is built using Node.js. You can download and install Node.js from the official website. Ensure that you have at least Node.js version 14 or higher installed.
- Docker Compose: Docker Compose is used to manage the database service required for running tests. You can install Docker Compose by following the instructions on the Docker documentation.
- Operating System: The system was primarily developed and tested on Linux, specifically Ubuntu. While it may work on other operating systems, it's recommended to use Ubuntu Linux for the best compatibility.

Ensure that you have all the dependencies installed and properly configured before running the project.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd vehicle`
3. Install dependencies: `npm install`
4. RunDB: `docker compose up -d`

### Start

Description: This command starts the application by running the node . command, which executes the main file of the project.

```sh
npm start
```
Purpose: It is typically used to start the server or run the application.

### Test

Description: This command runs tests using Mocha, a testing framework for Node.js applications. It executes test files matching the pattern 'src/**/*.spec.js' recursively.
```sh
npm test
```
Purpose: It's used to ensure that the application behaves as expected and to catch any regressions when making changes.

### Docs

Description: This command generates API documentation using the apidoc tool, and then converts it into Markdown format using apidoc-markdown. It generates documentation from the src directory and outputs it to the docs directory.
```sh
npm run docs
```
Purpose: It's used to automatically generate API documentation for the project, making it easier for developers to understand how to use the API.

### Postdocs

Description: This command opens the generated API documentation in the default browser using the open-cli tool. It opens the index.html file located in the docs directory.
```sh
npm run postdocs
```
Purpose: It provides a convenient way for developers to quickly view the API documentation in their browser after generating it.

### Dev

Description: This command starts the application in development mode using Nodemon. Nodemon monitors for any changes in the project files, excluding files with a .test.js extension, and automatically restarts the server when changes are detected.
```sh
npm run dev
```
Purpose: It's used during development to automatically reload the server whenever changes are made, making the development process more efficient.

### Lint

Description: This command checks the project files for code style and potential errors using ESLint, a popular JavaScript linter. It lints all files in the project directory.
```sh
npm run lint
```
Purpose: It helps maintain code quality and consistency by identifying issues and enforcing coding standards.

### Lint:fix

Description: This command automatically fixes code style and potential errors in the project files using ESLint. It applies fixes to all files in the project directory.
```sh
npm run lint:fix
```
Purpose: It's used to quickly fix code style issues and potential errors without manually editing each file.

### Pretest

Description: This command starts a Docker container with a database service in the background using Docker Compose before running tests. It ensures that the required database service is available for running tests.
```sh
npm run pretest
```
Purpose: It prepares the environment for running tests by starting the required services.

### Posttest

Description: This command stops the Docker container running the database service and removes it using Docker Compose after running tests. It cleans up the environment after tests have finished running.
```sh
npm run posttest
```
Purpose: It cleans up resources and ensures that the environment is restored to its original state after running tests.

## Usage

Once the server is running, you can interact with the API using tools like Postman or curl. The API endpoints are documented below.

## API Endpoints

The following endpoints are available:

- [Create a new vehicle](#create-a-new-vehicle)
- [Delete a vehicle](#delete-a-vehicle)
- [Retrieve a single vehicle](#retrieve-a-single-vehicle)
- [Retrieve all vehicles](#retrieve-all-vehicles)
- [Update a vehicle](#update-a-vehicle)

### Create a new vehicle

POST /vehicles
Creates a new vehicle with the provided information.
```sh
curl -X POST \
  http://localhost:3000/vehicles \
  -H 'Content-Type: application/json' \
  -d '{
    "placa": "ABC1234",
    "chassi": "12345678901234567",
    "renavam": 12345678901,
    "modelo": "Sedan",
    "marca": "Toyota",
    "ano": 2022
}'

```

### Delete a vehicle

DELETE /vehicles/:id
Deletes a vehicle with the specified ID.
```sh
curl -X DELETE http://localhost:3000/vehicles/<vehicle_id>
```

### Retrieve a single vehicle

GET /vehicles/:id
Retrieves details of a vehicle with the specified ID.
```sh
curl -X GET http://localhost:3000/vehicles/<vehicle_id>
```

### Retrieve all vehicles

GET /vehicles
Retrieves a list of all vehicles.
```sh
curl -X GET http://localhost:3000/vehicles
```

### Update a vehicle

PATCH /vehicles/:id
Updates the information of a vehicle with the specified ID.
```sh
curl -X PATCH \
  http://localhost:3000/vehicles/<vehicle_id> \
  -H 'Content-Type: application/json' \
  -d '{
    "placa": "XYZ5678"
}'

```

## Contributing

Contributions are welcome! Feel free to open issues or pull requests to improve the project.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
