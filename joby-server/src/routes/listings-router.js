const express = require('express');
const {
  getCandidates,
  getLatestCandidates,
  getJobOffers,
  getLatestJobOffers,
  getJobOfferById,
} = require('../controllers/listings-controller');

const router = express.Router();

router.get('/candidates', getCandidates);

router.get('/latest/candidates', getLatestCandidates);

router.get('/jobOffers', getJobOffers);

router.get('/latest/jobOffers', getLatestJobOffers);

router.get('/jobOffers/offer', getJobOfferById);

module.exports = router;
