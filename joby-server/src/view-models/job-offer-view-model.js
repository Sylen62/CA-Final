const UserViewModel = require('./user-view-model');
const moment = require('moment');

class JobOfferViewModel {
  constructor({
    id,
    user,
    offerName,
    salaryFrom,
    salaryTo,
    salaryType,
    activeFrom,
    activeUntill,
    description,
    city,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.user = new UserViewModel(user);
    this.offerName = offerName;
    this.salaryFrom = salaryFrom;
    this.salaryTo = salaryTo;
    this.salaryType = salaryType;
    this.activeFrom = moment(activeFrom).format('YYYY-MM-DD');
    this.activeUntill = moment(activeUntill).format('YYYY-MM-DD');
    this.daysLeft = moment(activeUntill).diff(moment(), 'days');
    this.description = description;
    this.city = city;
    this.createdAt = moment(createdAt).format('YYYY-MM-DD');
    this.updatedAt = updatedAt;
  }
}

module.exports = JobOfferViewModel;
