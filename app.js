const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
const routes = require('./index');

const app = express();
const port = 3000;

// Swagger UI configuration
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Application routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Hello World REST API is running at http://localhost:${port}`);
    console.log(`API documentation available at http://localhost:${port}/api-docs`);
});