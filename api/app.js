// const React = require('react');
require('dotenv').config();

// const session = require('express-session');
// const FileStore = require('session-file-store')(session); 
const path = require('path');

const express = require ('express');
const app = express();

const morgan=require('morgan');

const PORT = process.env.PORT || 4001;

app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(session({
//   store: new FileStore(),
//   name: 'sid',
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     httpOnly: true,
//   },
// }));


app.listen(PORT, async () => {
  console.log(`Server starting on PORT: ${PORT}`);
  try {
        console.log('DB STATUS - CONNECTED');
  } catch (error) {
    console.log(error);
  }
});