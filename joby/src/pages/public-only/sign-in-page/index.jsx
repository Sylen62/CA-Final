import React, { useState } from 'react';
import { Alert, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import routes from '../../../routing/routes';
import { login } from '../../../store/auth';
import AuthForm from '../../../components/auth-form';
import AuthService from '../../../services/auth-service';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  '& label.Mui-focused': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  '& input': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    // borderColor: theme.palette.secondary.main,
    borderColor: theme.palette.common.white,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline .Mui-Error': {
    // borderColor: 'orange',
    borderColor: theme.palette.common.white,
    // Kazkodel isvis nerodo tada
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    // border: `2px solid ${theme.palette.secondary.main}`,
    border: `2px solid ${theme.palette.common.white}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    // borderColor: theme.palette.secondary.main,
    borderColor: theme.palette.common.white,
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.main} inset`,
    // WebkitTextFillColor: theme.palette.secondary.main,
    WebkitTextFillColor: theme.palette.common.white,
  },
}));

const StyledAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: '2px groove red',
  color: 'red',
  '& .MuiAlert-icon': {
    color: 'red',
  },
}));

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
      <StyledAlert severity="error" sx={{ mb: 4, display: error ? 'flex' : 'none' }}>
        {error}
      </StyledAlert>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <StyledTextField
            name="email"
            variant="outlined"
            label="El. paštas"
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
            autoComplete="email"
            // autoFocus
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <StyledTextField
            name="password"
            variant="outlined"
            label="Slaptažodis"
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
