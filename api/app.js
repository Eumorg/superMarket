require('dotenv').config();
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const dowRoute = require('./routes/dowRoute')
const catalogDevice = require('./routes/catalogDevice')
const reviews = require('./routes/reviews')
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const cors = require('cors')

const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();

const morgan = require('morgan');
const { application } = require('express');
const { sequelize } = require('./db/models');

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

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false,                     // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  httpOnly: true,
  cookie: {
    // secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
}
app.use(session(sessionConfig))
app.use(cors(corsOptions));
app.use(cookieParser())

app.use('/log', userRoute)
app.use('/catalog', catalogDevice)
app.use('/reviews', reviews)
app.use('/dow', dowRoute)
app.use('/admin', adminRoute)




app.listen(PORT, async () => {
  console.log(`Server starting on PORT: ${PORT}`);
  try {
    await sequelize.authenticate()
    console.log('DB STATUS - CONNECTED');
  } catch (error) {
    console.log(error);
  }
});