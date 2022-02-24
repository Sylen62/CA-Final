const ImageModel = require('../models/image-model');
const UserModel = require('../models/user-model');
const ImageViewModel = require('../view-models/image-view-model');
const { deleteFile } = require('../helpers/file-helpers');

const uploadImage = async (req, res) => {
  const userDoc = await UserModel.findOne({ email: req.user.email });

  const imgData = { src: req.files[0].filename, user: userDoc.id };

  const imgDocs = await ImageModel.insert(imgData);
  const image = new ImageViewModel(imgDocs);

  res.status(200).send({
    image,
  });
};

// const deleteImage = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const imageDoc = await ImageModel.findById(id);
//     await UserModel.findOneAndUpdate({ mainImg: id }, { mainImg: null });

//     const { PUBLIC_PATH, IMG_FOLDER_NAME } = process.env;
//     const imgPath = `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${imageDoc.src}`;
//     deleteFile(imgPath);

//     await imageDoc.delete();

//     res.status(200).send({
//       message: 'Foto Successfully deleted',
//       id,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(404).send({
//       message: 'Foto not found',
//     });
//   }
// };

module.exports = {
  uploadImage,
  // deleteImage,
};
