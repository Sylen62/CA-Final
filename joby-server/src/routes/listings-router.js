const express = require('express');
const {
  getCandidates,
  getLatestCandidates,
  getJobOffers,
  getLatestJobOffers,
} = require('../controllers/listings-controller');

const router = express.Router();

router.get('/candidates', getCandidates);

router.get('/latest/candidates', getLatestCandidates);

router.get('/jobOffers', getJobOffers);

router.get('/latest/jobOffers', getLatestJobOffers);

module.exports = router;
