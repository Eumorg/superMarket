// const React = require('react');
require('dotenv').config();
const userRoute = require('./routes/userRoute')
const session = require('express-session');
const FileStore = require('session-file-store')(session); 
const path = require('path');
const cors = require('cors')

const express = require ('express');
const app = express();

const morgan=require('morgan');

const PORT = process.env.PORT || 4001;

app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: [
    'http://localhost:3000',
  ],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, // we send cookies
};

app.use(session({
  store: new FileStore(),
  name: 'sid',
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
}));

app.use(cors(corsOptions));

app.use('/log', userRoute)


app.listen(PORT, async () => {
  console.log(`Server starting on PORT: ${PORT}`);
  try {
    console.log('DB STATUS - CONNECTED');
  } catch (error) {
    console.log(error);
  }
});