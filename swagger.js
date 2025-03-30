const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Order System API',
      version: '1.0.0',
      description: 'A RESTful API for an order system',
    },
    servers: [
      {
        url: 'http://localhost:5500',
      },
    ],
    components: {
      schemas: {
        Item: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
          },
        },
      },
    },    
  },
  apis: ['./routes/items.js'], // path to the route files (corrected)
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
