import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { authSelector } from '../../../store/auth';
import MainContentContainer from '../../../components/container/main-content-container';
import SecondaryContentContainer from '../../../components/container/secondary-content-container';
import ImageContainer from '../../../components/container/image-container';
import Image from '../../../components/image';
import ButtonUpdate from '../../../components/button/button-update';
import FormTextField from '../../../components/text-field/form-text-field';
import ButtonOutlined from '../../../components/button/button-outlined';
import ButtonContained from '../../../components/button/button-contained';
import ProfileService from '../../../services/profile-service';
import UserProfileForm from '../../../components/form/user-profile-form';
import InfoSnackbar from '../../../components/snackbar';

const EmployerProfilePage = () => {
  const { user } = useSelector(authSelector);
  const [image, setImage] = useState(user.image);
  const [editorContent, setEditorContent] = useState();
  const [initEditorContent, setInitEditorContent] = useState();
  const [submiting, setSubmiting] = useState(false);
  const [infoSnackbar, setInfoSnackbar] = useState({ open: false, success: false, message: '' });
  const uploadInputRef = useRef(null);
  const textEditorControls = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'undo', 'redo', 'numberList', 'bulletList', 'clear'];

  const handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setInfoSnackbar({ open: false });
  };

  const validationSchema = yup.object({
    employerName: yup.string()
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
    employerName: user.employerName,
    email: user.email,
    newPassword: '',
    repeatNewPassword: '',
  };

  const onSubmit = async (data) => {
    setSubmiting(true);
    const { success, message } = await ProfileService.updateUserData(data);
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
    // isValid,
    // dirty,
    // setFieldValue,
    // setValues,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    resetForm(initialValues);
  }, [isSubmitting]);

  useEffect(() => {
    if (!user.employerDescription) return;
    const data = convertFromHTML(JSON.parse(user.employerDescription));
    const state = ContentState.createFromBlockArray(data.contentBlocks, data.entityMap);
    setInitEditorContent(JSON.stringify(convertToRaw(state)));
  }, []);

  const handleDescriptionChange = (data) => {
    setEditorContent(convertToHTML(data.getCurrentContent()));
  };

  const handleDescriptionSubmit = async (action) => {
    setSubmiting(true);
    if (action) setInitEditorContent('');
    const { success, message } = await ProfileService.updateEmployerDescription({
      description: action ? '' : JSON.stringify(editorContent),
    });
    setInfoSnackbar({ open: true, success, message });
    setSubmiting(false);
  };

  const handleImageUpload = async (event) => {
    setSubmiting(true);
    setImage(URL.createObjectURL(event.target.files[0]));
    const { success, message } = await ProfileService.updateImage(event.target.files);
    setInfoSnackbar({ open: true, success, message });
    setSubmiting(false);
  };

  return (
    <MainContentContainer>
      <InfoSnackbar {...infoSnackbar} handleSnackbarClose={handleSnackbarClose} />
      <Typography component="h2" variant="h4" textAlign="center">Profile</Typography>
      <SecondaryContentContainer>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4.7} sx={{ display: { xs: 'flex', md: 'block', lg: 'block' }, alignItems: 'center', flexDirection: 'column' }}>
            <ImageContainer>
              <Image src={image || null} />
            </ImageContainer>
            <ButtonUpdate onClick={() => uploadInputRef.current.click()} loading={isSubmitting || submiting} btnText="Change image" />
            <input ref={uploadInputRef} onChange={handleImageUpload} type="file" accept="image/*" hidden />
          </Grid>
          <Grid item xs={12} md={7}>
            <UserProfileForm onSubmit={handleSubmit}>
              <Grid container spacing={2} sx={{ pt: { xs: '1rem', md: '0.5rem' } }}>
                <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <FormTextField
                    name="employerName"
                    label="Employer name"
                    fullWidth
                    size="medium"
                    sx={{ maxWidth: '400px' }}
                    // formik
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.employerName}
                    error={touched.employerName && Boolean(errors.employerName)}
                    helperText={touched.employerName && errors.employerName}
                  />
                  <FormTextField
                    name="email"
                    label="Email"
                    fullWidth
                    size="medium"
                    sx={{ mt: '1rem', maxWidth: '400px' }}
                    value={values.email}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <FormTextField
                    name="newPassword"
                    label="New password"
                    type="password"
                    fullWidth
                    size="medium"
                    sx={{ maxWidth: '400px' }}
                    // formik
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newPassword}
                    error={touched.newPassword && Boolean(errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                  />
                  <FormTextField
                    name="repeatNewPassword"
                    label="Repeat new password"
                    type="password"
                    fullWidth
                    size="medium"
                    sx={{ mt: '1rem', maxWidth: '400px' }}
                    // formik
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatNewPassword}
                    error={touched.repeatNewPassword && Boolean(errors.repeatNewPassword)}
                    helperText={touched.repeatNewPassword && errors.repeatNewPassword}
                  />
                  <ButtonUpdate loading={isSubmitting || submiting} type="submit" btnText="Update accoount" sx={{ mt: '1rem' }} />
                </Grid>
              </Grid>
            </UserProfileForm>
          </Grid>
        </Grid>
      </SecondaryContentContainer>
      <Typography component="h2" variant="h4" textAlign="center">About You</Typography>
      <SecondaryContentContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <MUIRichTextEditor
          label="Start typing..."
          value={initEditorContent}
          controls={textEditorControls}
          onChange={(data) => handleDescriptionChange(data)}
        />
        <Box sx={{ alignSelf: 'end', mt: '2rem' }}>
          <ButtonOutlined loading={submiting} btnText="Delete" sx={{ mr: '1rem' }} onClick={() => handleDescriptionSubmit(true)} />
          <ButtonContained loading={submiting} btnText="Save" onClick={() => handleDescriptionSubmit(false)} />
        </Box>
      </SecondaryContentContainer>
    </MainContentContainer>
  );
};

export default EmployerProfilePage;
