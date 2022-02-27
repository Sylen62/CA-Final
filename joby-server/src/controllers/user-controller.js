const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const { hashPasswordAsync, comparePasswordsAsync } = require('../helpers/hash');

const getUser = async (_, res) => {
  const userDocs = await UserModel.find();
  const users = userDocs.map((userDoc) => new UserViewModel(userDoc));
  res.status(200).json({ users });
};

const getCandidates = async (_, res) => {
  const userDocs = await UserModel.find({ role: 'CANDIDATE' });
  const users = userDocs.map((userDoc) => new UserViewModel(userDoc));
  res.status(200).json({ users });
};

const updateUser = async (req, res) => {
  const { email, employerName, newPassword } = req.body;
  console.log(req.body);

  const password = await hashPasswordAsync(newPassword);
  // ? for old password
  // const userDoc = await UserModel.findOne({ email });
  // console.log(userDoc.password);
  // const passwordsAreEqual = await comparePasswordsAsync(newPassword, userDoc.password);
  // console.log(passwordsAreEqual);
  // ? for old password

  const expectedProps = { email, employerName, password };

  const props = Object.entries(expectedProps).reduce((result, [name, value]) => {
    console.log(Object.entries(expectedProps));
    if (value !== undefined) {
      result[name] = value;
    }
    return result;
  }, {});

  try {
    await UserModel.findOneAndUpdate({ email: req.user.email }, props, { new: false });

    const updatedUserDoc = await UserModel.findOne({ email });
    const user = new UserViewModel(updatedUserDoc);
    console.log(user);

    res.status(200).json({
      message: 'User updated',
      user,
    });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

const updateUserImage = async (req, res) => {
  const { filename } = req.file;
  const { email } = req.user;
  try {
    const userDoc = await UserModel.findOneAndUpdate(
      { email }, // Pagal ką surasti
      { image: filename }, // Ką atnaujinti
      { new: false } // sulaukti keičiamo dokumento
    );
    res.status(200).send({
      message: 'Profile picture successfully updated',
      user: new UserViewModel(userDoc),
    });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

const updateEmployerDescription = async (req, res) => {
  const { t } = req.body;
  console.log(t);
  const props = { employerDescription: t };
  try {
    const userDoc = await UserModel.findOneAndUpdate({ email: req.user.email }, props, {
      new: false,
    });

    res.status(200).json({
      message: 'User updated',
      user: new UserViewModel(userDoc),
    });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
};

module.exports = {
  getUser,
  updateUser,
  updateUserImage,
  updateEmployerDescription,
  getCandidates,
};
