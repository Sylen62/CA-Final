const express = require('express');
const { getOffers, createOffer } = require('../controllers/job-offer-controller');

const router = express.Router();

router.get('/', getOffers);

router.post('/create', createOffer);

module.exports = router;
