const express = require('express');
const app = express();
const morgan = require('morgan'); // Import d'un logger
const towns_routes = require('./src/routes/towns.js');

app.listen(5000, () => {
    console.log('This server is listening on port 5000.');
});

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Préfix des routes
app.use('/api', towns_routes);