const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate');

const jobOfferSchema = new Mongoose.Schema(
  {
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    offerName: {
      type: 'string',
      required: true,
    },
    salaryFrom: {
      type: 'Number',
      required: true,
    },
    salaryTo: {
      type: 'Number',
      required: true,
    },
    salaryType: {
      type: 'string',
      required: true,
    },
    activeFrom: {
      type: 'string',
      required: true,
    },
    activeUntill: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

jobOfferSchema.plugin(mongoosePaginate);
jobOfferSchema.plugin(uniqueValidator);

const JobOfferModel = Mongoose.model('JobOffer', jobOfferSchema);

module.exports = JobOfferModel;
