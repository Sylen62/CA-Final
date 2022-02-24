class UserViewModel {
  constructor({
    _id,
    email,
    role,
    employerName,
    name,
    surname,
    image,
    employerDescription,
    createdAt,
    updatedAt,
  }) {
    const { SERVER_PORT, SERVER_DOMAIN, IMG_FOLDER_NAME } = process.env;
    this.id = _id;
    this.email = email;
    this.role = role;
    this.employerName = employerName;
    this.name = name;
    this.surname = surname;
    if (image) {
      this.image = `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${image}`;
    }
    if (employerDescription) {
      this.employerDescription = employerDescription;
    }
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
