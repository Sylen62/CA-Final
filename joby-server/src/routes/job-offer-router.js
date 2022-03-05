const express = require('express');
const {
  getEmployerJobOffers,
  getEmployerJobOfferById,
  createEmployerJobOffer,
  updateEmployerJobOffer,
  deleteEmployerJobOffer,
} = require('../controllers/job-offer-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const employerMiddleware = require('../middlewares/employer-middleware');

const router = express.Router();

router.use(authMiddleware, employerMiddleware);

router.get('/employer/:id', getEmployerJobOffers);

router.get('/employer/offer/:id', getEmployerJobOfferById);

router.post('/create', createEmployerJobOffer);

router.patch('/employer/offer/:id', updateEmployerJobOffer);

router.delete('/:id', deleteEmployerJobOffer);

module.exports = router;
