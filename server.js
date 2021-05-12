const express = require('express');
const path = require('path');
const notes = require('./routes/notes');
const app = express();
const PORT = 5050;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/notes', notes);
app.use(express.static('public', {
    extensions: ['html']
}));

// 404 Route 
app.use(function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Note Taker app is currently listening on PORT: ${PORT}`);
});
