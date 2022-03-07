import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { login } from '../../../store/auth';
import AuthService from '../../../services/auth-service';
import AuthForm from '../../../components/auth-form';
import routes from '../../../routing/routes';
import SignUpTabContainer from './sign-up-tab-container';

const validationSchema = yup.object({
  name: yup.string().when('role', {
    is: (role) => role === 'CANDIDATE',
    then: yup.string()
      .required('Is required')
      .min(2, 'At least 2 letters')
      .max(32, 'Most 32 letters'),
  }),
  employerName: yup.string().when('role', {
    is: (role) => role === 'EMPLOYER',
    then: yup.string()
      .required('Is required')
      .min(2, 'At least 2 letters')
      .max(32, 'Most 32 letters'),
  }),
  surname: yup.string().when('role', {
    is: (role) => role === 'CANDIDATE',
    then: yup.string()
      .required('Is required')
      .min(2, 'At least 2 letters')
      .max(32, 'Most 32 letters'),
  }),
  email: yup.string()
    .required('Is required')
    .email('Is not valid email')
    .test('email-validator', 'Email unavailable', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;
      return emailAvailable;
    }),
  password: yup.string()
    .required('Is required')
    .min(8, 'At least 8 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number'),
  passwordConfirmation: yup.string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
  role: yup.string().oneOf(['CANDIDATE', 'EMPLOYER']),
});

let initialValues = {
  role: 'CANDIDATE',
  name: '',
  employerName: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const onSubmit = async ({
    role, email, employerName, name, surname, password, passwordConfirmation,
  }) => {
    const user = await AuthService.register({
      role,
      email,
      employerName,
      name,
      surname,
      password,
      repeatPassword: passwordConfirmation,
    });
    dispatch(login({ user }));
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    setValues,
    resetForm,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          setEmailCheckLoading(true);
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailChecked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndornment;
  if (emailCheckLoading) {
    emailEndornment = (
      <CircularProgress
        sx={(theme) => ({ color: theme.palette.common.white })}
        size={24}
      />
    );
  } else if (!values.emailChecked) {
    emailEndornment = null;
  } else if (values.emailAvailable) {
    emailEndornment = <CheckCircleIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />;
  } else {
    emailEndornment = <ErrorIcon color="error" />;
  }

  const handleResetForm = (selectedRole) => {
    resetForm({
      values: {
        ...initialValues,
        role: selectedRole,
      },
    });
    initialValues = {
      ...initialValues,
      role: selectedRole,
    };
  };
  return (
    <AuthForm
      title="Sign Up"
      linkTo={routes.SignInPage}
      linkTitle="Already have an account? Sign In here"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
      loading={isSubmitting}
    >
      <SignUpTabContainer
        handleResetForm={handleResetForm}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        touched={touched}
        errors={errors}
        handleEmailChange={handleEmailChange}
        handleEmailBlur={handleEmailBlur}
        emailEndornment={emailEndornment}
      />
    </AuthForm>
  );
};

export default SignUpPage;
