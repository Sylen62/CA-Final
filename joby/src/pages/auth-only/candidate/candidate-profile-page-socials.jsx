import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import UserProfileForm from '../../../components/form/user-profile-form';
import FormTextField from '../../../components/text-field/form-text-field';
import ButtonUpdate from '../../../components/button/button-update';
import ProfileService from '../../../services/profile-service';

const CandidateProfilePageSocials = ({
  user, setSubmiting, setInfoSnackbar, submiting,
}) => {
  const validationSchema = yup.object({
    linkedIn: yup.string()
      .url('Enter valid url'),
    facebook: yup.string()
      .url('Enter valid url'),
    twitter: yup.string()
      .url('Enter valid url'),
    instagram: yup.string()
      .url('Enter valid url'),
  });

  const initialValues = {
    linkedIn: user.linkedIn ?? '',
    facebook: user.facebook ?? '',
    twitter: user.twitter ?? '',
    instagram: user.instagram ?? '',
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
    <UserProfileForm
      onSubmit={handleSubmit}
      sx={{
        display: 'flex', flexDirection: 'column', width: '100%', alignItems: { xs: 'center', md: 'start' }, pt: { sm: '0.5rem', md: 0 },
      }}
    >
      <FormTextField
        name="linkedIn"
        label="LinkedIn"
        fullWidth
        size="small"
        placeholder="Your link"
        InputProps={{
          startAdornment: <LinkedInIcon position="start" sx={{ mr: '5px' }} />,
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.linkedIn}
        error={touched.linkedIn && Boolean(errors.linkedIn)}
        helperText={touched.linkedIn && errors.linkedIn}
      />
      <FormTextField
        name="facebook"
        label="Facebook"
        fullWidth
        size="small"
        placeholder="Your link"
        sx={{ mt: '1rem' }}
        InputProps={{
          startAdornment: <FacebookIcon position="start" sx={{ mr: '5px' }} />,
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.facebook}
        error={touched.facebook && Boolean(errors.facebook)}
        helperText={touched.facebook && errors.facebook}
      />
      <FormTextField
        name="twitter"
        label="Twitter"
        fullWidth
        size="small"
        placeholder="Your link"
        sx={{ mt: '1rem' }}
        InputProps={{
          startAdornment: <TwitterIcon position="start" sx={{ mr: '5px' }} />,
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.twitter}
        error={touched.twitter && Boolean(errors.twitter)}
        helperText={touched.twitter && errors.twitter}
      />
      <FormTextField
        name="instagram"
        label="Instagram"
        fullWidth
        size="small"
        placeholder="Your link"
        sx={{ mt: '1rem' }}
        InputProps={{
          startAdornment: <InstagramIcon position="start" sx={{ mr: '5px' }} />,
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.instagram}
        error={touched.instagram && Boolean(errors.instagram)}
        helperText={touched.instagram && errors.instagram}
      />
      <ButtonUpdate loading={isSubmitting || submiting} type="submit" btnText="Update Socials" sx={{ mt: '1rem' }} />
    </UserProfileForm>
  );
};

export default CandidateProfilePageSocials;
