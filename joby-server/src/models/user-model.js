const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const userSchema = new Mongoose.Schema(
  {
    email: {
      type: 'string',
      required: true,
      validate: {
        validator: isEmail,
        message: 'Incorrect email format',
      },
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
      validate: [
        { validator: (value) => value.length >= 8, message: 'Min 8 characters' },
        { validator: (value) => value.length <= 32, message: 'Max 32 characters' },
        { validator: (value) => /^.*[0-9].*$/.test(value), message: 'At least one number' },
        {
          validator: (value) => /^.*[A-ZĄČĘĖĮŠŲŪŽ].*$/.test(value),
          message: 'At least one capital letter',
        },
      ],
    },
    role: {
      type: 'string',
      enum: ['CANDIDATE', 'EMPLOYER'],
      default: 'CANDIDATE',
    },
    employerName: {
      type: 'string',
      required: false,
    },
    name: {
      type: 'string',
      required: false,
    },
    surname: {
      type: 'string',
      required: false,
    },
    // image
    image: {
      type: 'string',
      required: false,
    },
    // user info
    shortDescription: {
      type: 'string',
      required: false,
    },
    fullDescription: {
      type: 'string',
      required: false,
    },
    linkedIn: {
      type: 'string',
      required: false,
    },
    facebook: {
      type: 'string',
      required: false,
    },
    twitter: {
      type: 'string',
      required: false,
    },
    instagram: {
      type: 'string',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator);

const UserModel = Mongoose.model('User', userSchema);

module.exports = UserModel;
