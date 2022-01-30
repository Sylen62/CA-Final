class UserViewModel {
  constructor({ _id, email, role, employerName, name, surname, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.role = role;
    this.employerName = employerName;
    this.name = name;
    this.surname = surname;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
