const JobOfferModel = require('../models/job-offer-model');
const JobOfferViewModel = require('../view-models/job-offer-view-model');

const getOffers = async (_, res) => {
  const jobOfferDocs = await JobOfferModel.find().populate('user');
  const offers = jobOfferDocs.map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
  res.status(200).json({ offers });
};

const getEmployerOffers = async (req, res) => {
  const { id } = req.params;
  const { tablePage, rowsPerPage, field, order } = req.query;
  const jobOffers = await JobOfferModel.paginate(
    { user: id },
    { page: tablePage, limit: rowsPerPage, sort: { [field]: order } }
  );
  // const jobOfferDocs = await JobOfferModel.find({ user: id }, null, {
  //   sort: { [field]: order },
  // });
  const offers = jobOffers.docs.map((jobOfferDoc) => new JobOfferViewModel(jobOfferDoc));
  res.status(200).json({ offers, offerCount: jobOffers.total });
};

const createOffer = async (req, res) => {
  const data = req.body;
  try {
    await JobOfferModel.create({ ...data });
    res.status(201).json({ message: 'Offer created' });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getJobOfferById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  try {
    const jobOfferDoc = await JobOfferModel.findById(id);
    const offer = new JobOfferViewModel(jobOfferDoc);
    res.status(200).json({ offer });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
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

const updateOffer = async (req, res) => {
  const { id } = req.params;
  const props = getUsedProps(req.body);
  console.log(props);
  try {
    await JobOfferModel.findByIdAndUpdate(id, props, { new: false });

    // const updatedUserDoc = await UserModel.findOne({ email });
    // const user = new UserViewModel(updatedUserDoc);

    res.status(200).json({
      success: true,
      message: 'Profile successfully updated',
    });
  } catch ({ message }) {
    res.status(404).send({
      success: false,
      message,
    });
  }
  // const { email } = req.user;
  // const props = getUsedProps(req.body);

  // try {
  //   await JobOfferModel.findOneAndUpdate({ email }, props, { new: false });

  //   const updatedUserDoc = await UserModel.findOne({ email });
  //   const user = new UserViewModel(updatedUserDoc);

  //   res.status(200).json({
  //     success: true,
  //     message: 'Profile successfully updated',
  //     user,
  //   });
  // } catch ({ message }) {
  //   res.status(404).send({
  //     success: false,
  //     message,
  //   });
  // }
};

const deleteOffer = async (req, res) => {
  const { id } = req.params;
  try {
    await JobOfferModel.findByIdAndDelete({ _id: id });
    res.status(201).json({ message: 'Offer deleted' });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getOffers,
  getEmployerOffers,
  getJobOfferById,
  createOffer,
  updateOffer,
  deleteOffer,
};
