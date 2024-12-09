const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World REST API',
            version: '1.0.0',
            description: 'A simple API that responds with Hello World REST API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./index.js'], // Informs Swagger to look for annotations in index.js
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;