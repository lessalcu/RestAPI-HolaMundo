# REST API Hello World - JavaScript

This is a **"Hello World"** project that implements a REST API server in **JavaScript** using **Express.js**. The project includes automatically generated interactive documentation with **Swagger UI**.

## Features

- Implementation of a REST API server with **Express.js**.
- Interactive API documentation with **Swagger UI**.
- Exposure of a basic `GET /` endpoint that returns a "Hello, World!" message.
- Docker container configured to easily run the application.

## Requirements

- Node.js 14 or higher.
- Docker (optional, for containerized execution).

## Installation

1. Clone the repository:
```bash
git clone https://github.com/lessalcu/RestAPI-HolaMundo.git
cd rest-api-hello-world
```

2. Install the dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

4. The application will be available at `http://localhost:3000`. You can access the Swagger documentation at `http://localhost:3000/api-docs`.

## Usage

### Main endpoint
**GET /**

- Returns a "Hello, World!" message.
- Sample response:
```json
{
"message": "Hello, World!"
}
```

### Interactive documentation
Swagger documentation is available at:
```
http://localhost:3000/api-docs
```

This interface allows you to view and test the API directly from your browser.

## Docker

### Download the image from Docker Hub

1. To download the image from Docker Hub:
```tap
docker pull lssalas/hello-world-restapi:last
```

2. To run the image:
```tap
docker run -p 3000:3000 --name hello-world-restapi-container lssalas/hello-world-restapi:latest
```

## Notes

This project serves as a basic introduction to learning how to implement a REST API server in **JavaScript** using **Express.js**. Integration with **Swagger UI** provides a convenient tool to explore and test exposed endpoints.