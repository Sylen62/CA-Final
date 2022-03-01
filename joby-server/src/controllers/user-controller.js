const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const { hashPasswordAsync } = require('../helpers/hash');

const getUsedProps = (expectedProps) => {
  const usedProps = Object.entries(expectedProps).reduce((result, [name, value]) => {
    if (name !== 'repeatNewPassword' && value !== undefined && value !== '') {
      if (name === 'newPassword') result['password'] = value;
      else result[name] = value;
    }
    return result;
  }, {});
  return usedProps;
};

// const getUser = async (_, res) => {
//   const userDocs = await UserModel.find();
//   const users = userDocs.map((userDoc) => new UserViewModel(userDoc));
//   res.status(200).json({ users });
// };

// const getCandidates = async (_, res) => {
//   const userDocs = await UserModel.find({ role: 'CANDIDATE' });
//   const users = userDocs.map((userDoc) => new UserViewModel(userDoc));
//   res.status(200).json({ users });
// };

const updateUser = async (req, res) => {
  const { email } = req.user;
  const props = getUsedProps(req.body);

  if (props.password) {
    props.password = await hashPasswordAsync(props.password);
  }

  try {
    await UserModel.findOneAndUpdate({ email }, props, { new: false });

    const updatedUserDoc = await UserModel.findOne({ email });
    const user = new UserViewModel(updatedUserDoc);

    res.status(200).json({
      success: true,
      message: 'Profile successfully updated',
      user,
    });
  } catch ({ message }) {
    res.status(404).send({
      success: false,
      message,
    });
  }
};

const updateUserImage = async (req, res) => {
  const { filename } = req.file;
  const { email } = req.user;
  try {
    await UserModel.findOneAndUpdate(
      { email }, // Pagal ką surasti
      { image: filename }, // Ką atnaujinti
      { new: false } // sulaukti keičiamo dokumento
    );

    const updatedUserDoc = await UserModel.findOne({ email });
    const user = new UserViewModel(updatedUserDoc);

    res.status(200).send({
      success: true,
      message: 'Profile picture successfully updated',
      user,
    });
  } catch ({ message }) {
    res.status(404).send({
      success: false,
      message,
    });
  }
};

// const updateCandidateSocials = async (req, res) => {
//   const { user, linkedIn, facebook, twitter, instagram } = req.body;

//   const expectedProps = { linkedIn, facebook, twitter, instagram };

//   const props = Object.entries(expectedProps).reduce((result, [name, value]) => {
//     if (value !== undefined) {
//       result[name] = value;
//     }
//     return result;
//   }, {});
//   try {
//     await UserModel.findOneAndUpdate({ email: user.email }, props, { new: false });

//     const updatedUserDoc = await UserModel.findOne({ email: user.email });
//     const updatedUser = new UserViewModel(updatedUserDoc);

//     res.status(200).json({
//       success: true,
//       message: 'Profile successfully updated',
//       user: updatedUser,
//     });
//   } catch ({ message }) {
//     res.status(404).send({
//       success: false,
//       message,
//     });
//   }
// };

const updateEmployerDescription = async (req, res) => {
  const { email } = req.user;
  console.log(req.user);
  const { description } = req.body;
  const props = { employerDescription: description };
  try {
    await UserModel.findOneAndUpdate({ email }, props, { new: false });

    const updatedUserDoc = await UserModel.findOne({ email });
    const user = new UserViewModel(updatedUserDoc);

    res.status(200).json({
      success: true,
      message: 'Profile description successfully updated',
      user,
    });
  } catch ({ message }) {
    res.status(404).send({
      success: false,
      message,
    });
  }
};

module.exports = {
  updateUser,
  // updateCandidateSocials,
  updateUserImage,
  // updateEmployerDescription,
  // getCandidates,
};
