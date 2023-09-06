//1
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');


const PORT = process.env.PORT || 3001;

const app = express();

// // Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api URL link starter (can't use without being complete)
//http://localhost:3001/api
app.use('/api', api);

app.use(express.static('public'));

//HTML website link add on
// GET Route for notes page
//http://localhost:3001/notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//HTML URL website link starter
// GET Route for homepage page
//http://localhost:3001/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// // Wildcard route to direct users to a 404 page
// //if path doesn't exit it goes to star path
// //http://localhost:3001/*
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
