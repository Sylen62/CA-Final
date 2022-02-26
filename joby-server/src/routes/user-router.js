const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadSingleMiddleware } = require('../middlewares/upload-middleware');
const {
  getUser,
  updateUser,
  updateUserImage,
  updateEmployerDescription,
  getCandidates,
} = require('../controllers/user-controller');

const router = express.Router();

// middlewares
router.use(authMiddleware);

// router.get('/', adminMiddleware, getUsers);
router.get('/', getUser); // nereikia

router.get('/candidates', getCandidates); // perkelt i candidate listings

router.patch('/employer/profile', updateUser);

router.patch('/employer/profile/description', updateEmployerDescription);

router.patch('/image', uploadSingleMiddleware('files'), updateUserImage);

module.exports = router;
