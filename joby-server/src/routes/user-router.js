const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadSingleMiddleware } = require('../middlewares/upload-middleware');
const { updateUser, updateUserImage } = require('../controllers/user-controller');

const router = express.Router();

router.use(authMiddleware);

router.patch('/profile', updateUser);

router.patch('/profile/image', uploadSingleMiddleware('files'), updateUserImage);

module.exports = router;
