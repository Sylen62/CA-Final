const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const jobOfferRouter = require('./routes/job-offer-router');
const listingsRouter = require('./routes/listings-router');

const server = express();
const { SERVER_PORT, DB_CONNECTION, SERVER_DOMAIN, PUBLIC_PATH } = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.static(PUBLIC_PATH));

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/job-offers', jobOfferRouter);
server.use('/api/listings', listingsRouter);

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
