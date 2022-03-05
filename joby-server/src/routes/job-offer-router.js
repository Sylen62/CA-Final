const express = require('express');
const {
  getOffers,
  getEmployerOffers,
  getJobOfferById,
  createOffer,
  updateOffer,
  deleteOffer,
} = require('../controllers/job-offer-controller');

const router = express.Router();

router.get('/', getOffers);

router.get('/employer/:id', getEmployerOffers);

router.get('/employer/offer/:id', getJobOfferById);

router.post('/create', createOffer);

router.patch('/employer/offer/:id', updateOffer);

router.delete('/:id', deleteOffer);

module.exports = router;
