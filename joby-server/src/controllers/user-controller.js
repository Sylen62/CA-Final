const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const { hashPasswordAsync } = require('../helpers/hash');
const { deleteFile } = require('../helpers/file-helpers');

const getUsedProps = (expectedProps) => {
  const usedProps = Object.entries(expectedProps).reduce((result, [name, value]) => {
    if (name !== 'repeatNewPassword' && value !== undefined) {
      if (name === 'newPassword' && value !== '') result['password'] = value;
      else result[name] = value;
    }
    return result;
  }, {});
  return usedProps;
};

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
    const oldUserDoc = await UserModel.findOne({ email });

    await UserModel.findOneAndUpdate({ email }, { image: filename }, { new: false });

    const { PUBLIC_PATH, IMG_FOLDER_NAME } = process.env;
    const imgPath = `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${oldUserDoc.image}`;
    deleteFile(imgPath);

    const updatedUserDoc = await UserModel.findOne({ email });
    const updatedUser = new UserViewModel(updatedUserDoc);

    res.status(200).send({
      success: true,
      message: 'Profile picture successfully updated',
      user: updatedUser,
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
  updateUserImage,
};
