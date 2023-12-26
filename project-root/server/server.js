const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
// If using MongoDB, require Mongoose
// const mongoose = require('mongoose');
// const db = require('./database');

app.use(cors());
app.use(express.json());

// Serve static files from the frontend (html, css, js)
app.use(express.static('../'));

// Potential routes go here
app.get('/api/leaderboard', (req, res) => {
    // Use db module to get leaderboard data
    db.getLeaderboard().then(leaderboard => {
        res.json(leaderboard);
    }).catch(error => {
        console.error('Database error:', error);
        res.status(500).send('Internal Server Error');
    });
});

app.post('/api/submit-name', (req, res) => {
    // Get name from request body
    const { name } = req.body;

    // Use db module to save the name
    db.saveName(name).then(() => {
        res.status(200).send('Name saved');
    }).catch(error => {
        console.error('Error saving name:', error);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    // If using MongoDB, uncomment the following line
    // db.connect(); // Establish database connection
});