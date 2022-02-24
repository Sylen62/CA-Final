const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');

const server = express();
const { SERVER_PORT, DB_CONNECTION, SERVER_DOMAIN, PUBLIC_PATH } = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middlewares
server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.static(PUBLIC_PATH));

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant ${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
