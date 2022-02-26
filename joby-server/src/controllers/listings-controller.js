const moment = require('moment');
const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const JobOfferModel = require('../models/job-offer-model');
const JobOfferViewModel = require('../view-models/job-offer-view-model');

const getCandidates = async (_, res) => {
  try {
    const userDocs = await UserModel.find({ role: 'CANDIDATE' }).sort({ createdAt: -1 });
    const users = userDocs.map((userDoc) => new UserViewModel(userDoc));
    res.status(200).json({ candidates: users });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

const getLatestCandidates = async (_, res) => {
  try {
    const userDocs = await UserModel.find({ role: 'CANDIDATE' }).sort({ createdAt: -1 }).limit(8);
    const users = userDocs.map((userDoc) => new UserViewModel(userDoc));
    res.status(200).json({ candidates: users });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

const getJobOffers = async (_, res) => {
  try {
    const jobOfferDocs = await JobOfferModel.find().sort({ createdAt: -1 }).populate('user');
    const offers = jobOfferDocs
      .filter(({ activeUntill }) => moment(activeUntill).diff(moment(), 'days') >= 0)
      .map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
    res.status(200).json({ offers });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

const getLatestJobOffers = async (_, res) => {
  try {
    const jobOfferDocs = await JobOfferModel.find()
      .sort({ createdAt: -1 })
      .limit(8)
      .populate('user');
    const offers = jobOfferDocs
      .filter(({ activeUntill }) => moment(activeUntill).diff(moment(), 'days') >= 0)
      .map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
    res.status(200).json({ offers });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

const getJobOfferById = async (req, res) => {
  const { id } = req.query;
  console.log(req.query.id);
  try {
    const jobOfferDoc = await JobOfferModel.findById(id).populate('user');
    const offer = new JobOfferViewModel(jobOfferDoc);
    res.status(200).json({ offer });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

module.exports = {
  getCandidates,
  getLatestCandidates,
  getJobOffers,
  getLatestJobOffers,
  getJobOfferById,
};
