import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Box, Grid, Typography } from '@mui/material';
import ButtonUpdate from '../../../components/button/button-update';
import UserProfileForm from '../../../components/form/user-profile-form';
import CandidateDescriptionTextArea from '../../../components/text-area/candidate-description-text-area';
import ProfileService from '../../../services/profile-service';

const CandidateProfilePageUserDescription = ({
  user, setSubmiting, submiting, setInfoSnackbar,
}) => {
  const initialValues = {
    shortDescription: user.shortDescription ?? '',
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
    values,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues,
    onSubmit,
    enableReinitialize: true,
  });

  useEffect(() => {
    if (isSubmitting) return;
    resetForm(initialValues);
  }, [isSubmitting]);

  return (
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', mt: '1rem' }}>
      <Typography component="h3" variant="h5" textAlign="center">What kind of job are you looking for?</Typography>
      <Typography component="h3" variant="subtitle2" textAlign="center">Maximum of 300 characters</Typography>
      <UserProfileForm onSubmit={handleSubmit}>
        <CandidateDescriptionTextArea
          name="shortDescription"
          onChange={handleChange}
          value={values.shortDescription}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonUpdate loading={isSubmitting || submiting} type="submit" btnText="Update description" sx={{ maxWidth: { sm: '400px' } }} />
        </Box>
      </UserProfileForm>
    </Grid>
  );
};

export default CandidateProfilePageUserDescription;
