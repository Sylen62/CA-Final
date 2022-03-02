const express = require('express');
const {
  getOffers,
  getEmployerOffers,
  getOffer,
  createOffer,
} = require('../controllers/job-offer-controller');

const router = express.Router();

router.get('/', getOffers);

router.get('/employer/:id', getEmployerOffers);

router.get('/:id', getOffer);

router.post('/create', createOffer);

module.exports = router;
