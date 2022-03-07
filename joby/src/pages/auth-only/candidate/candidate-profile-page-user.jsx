import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import ButtonUpdate from '../../../components/button/button-update';
import UserProfileForm from '../../../components/form/user-profile-form';
import FormTextField from '../../../components/text-field/form-text-field';
import ProfileService from '../../../services/profile-service';

const CandidateProfilePageUser = ({
  user, submiting, setSubmiting, setInfoSnackbar,
}) => {
  const validationSchema = yup.object({
    name: yup.string()
      .required('Is required')
      .min(2, 'At least 2 letters')
      .max(32, 'Most 32 letters'),
    surname: yup.string()
      .required('Is required')
      .min(2, 'At least 2 letters')
      .max(32, 'Most 32 letters'),
    newPassword: yup.string()
      .min(8, 'At least 8 symbols')
      .max(32, 'Most 32 symbols')
      .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
      .matches(/^.*\d+.*$/, 'Atleast one number'),
    repeatNewPassword: yup.string().when('newPassword', {
      is: (pass) => Boolean(pass),
      then: yup.string()
        .required('Is required')
        .oneOf([yup.ref('newPassword')], 'Passwords must match'),
    }),
  });

  const initialValues = {
    name: user.name,
    surname: user.surname,
    newPassword: '',
    repeatNewPassword: '',
  };

  const onSubmit = async (data) => {
    setSubmiting(true);
    const { success, message } = await ProfileService.updateUser(data);
    setInfoSnackbar({ open: true, success, message });
    setSubmiting(false);
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  useEffect(() => {
    if (isSubmitting) return;
    resetForm(initialValues);
  }, [isSubmitting]);

  return (
    <UserProfileForm onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ pt: { xs: '1rem', md: '0.5rem' } }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: 'grid', gridAutoFlow: 'row', gridRowGap: '1rem', alignContent: 'start',
          }}
        >
          <FormTextField
            name="name"
            label="Name"
            fullWidth
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <FormTextField
            name="surname"
            label="Surname"
            fullWidth
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
          />
          <FormTextField
            name="email"
            label="Email"
            fullWidth
            size="medium"
            value={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: 'grid', gridAutoFlow: 'row', gridRowGap: '1rem', alignContent: 'start',
          }}
        >
          <FormTextField
            name="newPassword"
            label="New password"
            fullWidth
            size="medium"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.newPassword}
            error={touched.newPassword && Boolean(errors.newPassword)}
            helperText={touched.newPassword && errors.newPassword}
          />
          <FormTextField
            name="repeatNewPassword"
            label="Repeat new password"
            fullWidth
            size="medium"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.repeatNewPassword}
            error={touched.repeatNewPassword && Boolean(errors.repeatNewPassword)}
            helperText={touched.repeatNewPassword && errors.repeatNewPassword}
          />
          <ButtonUpdate loading={isSubmitting || submiting} type="submit" btnText="Update account" sx={{ mt: 0, height: { sm: '56px' } }} />
        </Grid>
      </Grid>
    </UserProfileForm>
  );
};

export default CandidateProfilePageUser;
