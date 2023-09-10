//2
const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');

const app = express();

//http://localhost:3001/api/notes
app.use('/notes', notesRouter);

//exporting every use of app
module.exports = app;
