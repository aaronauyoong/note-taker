// Dependencies
const express = require('express');
const path = require('path');

// Tells node that we are creating an "express" server
// // Sets up the Express App
const app = express();
// Running on port 3050
const PORT = 3050;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define routes
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.


// Checking if server is created and listening
app.listen(PORT, () => {
    console.log(`Note Taker app is currently listening on PORT: ${PORT}`);
});
