const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Import JSON data
const myData = require('./data/data.json');

// Middleware to serve static files
app.use(express.static('public'));

// Route to send JSON data
app.get('/api/data', (req, res) => {
    res.json(myData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

