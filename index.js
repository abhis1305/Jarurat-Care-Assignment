const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const services = require('./routes/service');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Healthcare Services API');
});

// Services routes
app.use('/api/services', services);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
