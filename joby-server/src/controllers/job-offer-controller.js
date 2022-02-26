const JobOfferModel = require('../models/job-offer-model');
const JobOfferViewModel = require('../view-models/job-offer-view-model');

const getOffers = async (_, res) => {
  const jobOfferDocs = await JobOfferModel.find().populate('user');
  const offers = jobOfferDocs.map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
  res.status(200).json({ offers });
};

const getEmployerOffers = async (req, res) => {
  const { employerId } = req.params;
  const jobOfferDocs = await JobOfferModel.find({ user: employerId });
  const offers = jobOfferDocs.map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
  res.status(200).json({ offers });
};

const getOffer = async (req, res) => {
  const jobOfferDocs = await JobOfferModel.find().populate('user');
  const offers = jobOfferDocs.map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
  res.status(200).json({ offers });
};

const createOffer = async (req, res) => {
  const {
    user,
    offerName,
    salaryFrom,
    salaryTo,
    salaryType,
    activeFrom,
    activeUntill,
    description,
  } = req.body;
  console.log(req.body);
  try {
    await JobOfferModel.create({
      user,
      offerName,
      salaryFrom,
      salaryTo,
      salaryType,
      activeFrom,
      activeUntill,
      description,
    });

    res.status(201).json({ message: 'Offer created' });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getOffers,
  getEmployerOffers,
  getOffer,
  createOffer,
};
