class UserViewModel {
  constructor({
    _id,
    email,
    role,
    employerName,
    name,
    surname,
    image,
    shortDescription,
    fullDescription,
    linkedIn,
    facebook,
    twitter,
    instagram,
    createdAt,
    updatedAt,
  }) {
    const { SERVER_PORT, SERVER_DOMAIN, IMG_FOLDER_NAME } = process.env;
    this.id = _id;
    this.email = email;
    this.role = role;
    if (employerName) {
      this.employerName = employerName;
    }
    if (name) {
      this.name = name;
    }
    if (surname) {
      this.surname = surname;
    }
    if (image) {
      this.image = `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${image}`;
    }
    if (shortDescription) {
      this.shortDescription = shortDescription;
    }
    if (fullDescription) {
      this.fullDescription = fullDescription;
    }
    if (linkedIn) {
      this.linkedIn = linkedIn;
    }
    if (facebook) {
      this.facebook = facebook;
    }
    if (twitter) {
      this.twitter = twitter;
    }
    if (instagram) {
      this.instagram = instagram;
    }
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
