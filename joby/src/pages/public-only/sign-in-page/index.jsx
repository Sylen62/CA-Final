import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import routes from '../../../routing/routes';
import { login } from '../../../store/auth';
import AuthForm from '../../../components/auth-form';
import AuthService from '../../../services/auth-service';
import FormTextField from '../../../components/text-field/form-text-field';
import AuthFormAlert from '../../../components/alerts/auth-form-alert';

const validationSchema = yup.object({
  email: yup.string()
    .required('Is required')
    .email('Is not valid email'),
  password: yup.string()
    .required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onSubmit = async ({ email, password }) => {
    setError(null);
    try {
      const user = await AuthService.login({
        email,
        password,
      });

      const redirectTo = urlSearchParams.get('redirectTo');
      const loginSuccessAction = login({
        user,
        redirectTo,
      });
      dispatch(loginSuccessAction);
    } catch (err) {
      setError(err.message);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      title="Sign In"
      linkTo={routes.SignUpPage}
      linkTitle="Don't have an account yet?  Sign Up here"
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <AuthFormAlert error={error} sx={{ mb: 4, display: error ? 'flex' : 'none' }} />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormTextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <FormTextField
            name="password"
            variant="outlined"
            label="Password"
            type="password"
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default SignInPage;
