const JobOfferModel = require('../models/job-offer-model');
const JobOfferViewModel = require('../view-models/job-offer-view-model');

const getEmployerJobOffers = async (req, res) => {
  const { id } = req.params;
  const { tablePage, rowsPerPage, field, order } = req.query;
  try {
    const jobOffers = await JobOfferModel.paginate(
      { user: id },
      { page: tablePage, limit: rowsPerPage, sort: { [field]: order } }
    );
    const offers = jobOffers.docs.map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
    res.status(200).json({ success: true, offers, offerCount: jobOffers.total });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const createEmployerJobOffer = async (req, res) => {
  const data = req.body;
  try {
    await JobOfferModel.create({ ...data });
    res.status(201).json({ success: true, message: 'Job offer created' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getEmployerJobOfferById = async (req, res) => {
  const { id } = req.params;
  try {
    const jobOfferDoc = await JobOfferModel.findById(id);
    const offer = new JobOfferViewModel(jobOfferDoc);
    res.status(200).json({ offer });
  } catch ({ message }) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUsedProps = (expectedProps) => {
  const usedProps = Object.entries(expectedProps).reduce((result, [name, value]) => {
    if (name !== 'repeatNewPassword' && value !== undefined && value !== '') {
      result[name] = value;
    }
    return result;
  }, {});
  return usedProps;
};

const updateEmployerJobOffer = async (req, res) => {
  const { id } = req.params;
  const props = getUsedProps(req.body);
  try {
    await JobOfferModel.findByIdAndUpdate(id, props, { new: false });
    res.status(200).json({
      success: true,
      message: 'Job offer successfully updated',
    });
  } catch ({ message }) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteEmployerJobOffer = async (req, res) => {
  const { id } = req.params;
  try {
    await JobOfferModel.findByIdAndDelete({ _id: id });
    res.status(201).json({ success: true, message: 'Job offer deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getEmployerJobOffers,
  getEmployerJobOfferById,
  createEmployerJobOffer,
  updateEmployerJobOffer,
  deleteEmployerJobOffer,
};
