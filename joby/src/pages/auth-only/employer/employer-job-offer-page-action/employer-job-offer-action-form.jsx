/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Grid, MenuItem } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonContained from '../../../../components/button/button-contained';
import JobOfferDatepicker from '../../../../components/datepicker/job-offer-datepicker';
import UserProfileForm from '../../../../components/form/user-profile-form';
import FormTextField from '../../../../components/text-field/form-text-field';
import FormSelect from '../../../../components/select/form-select';
import JobOfferService from '../../../../services/job-offer-service';
import { authSelector } from '../../../../store/auth';

const validationSchema = yup.object({
  offerName: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  salaryFrom: yup.number()
    .required('Is required'),
  salaryTo: yup.number()
    .required('Is required'),
  salaryType: yup.string()
    .required('Is required'),
  city: yup.string()
    .required('Is required'),
  activeFrom: yup.date()
    .required('Is required'),
  activeUntill: yup.date()
    .required('Is required'),
});

const activeFrom = new Date();
const activeUntill = new Date();

const EmployerJobOfferActionForm = ({ pageAction, jobOffer }) => {
  const [editorContent, setEditorContent] = useState();
  const [initEditorContent, setInitEditorContent] = useState();
  const { user } = useSelector(authSelector);
  const textEditorControls = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'undo', 'redo', 'numberList', 'bulletList', 'clear'];
  const navigate = useNavigate();

  const initialValues = {
    offerName: jobOffer?.offerName ?? '',
    salaryFrom: jobOffer?.salaryFrom ?? '',
    salaryTo: jobOffer?.salaryTo ?? '',
    salaryType: jobOffer?.salaryType ?? '',
    city: jobOffer?.city ?? '',
    activeFrom: jobOffer?.activeFrom ?? activeFrom,
    activeUntill: jobOffer?.activeUntill ?? activeUntill,
  };
  useEffect(() => {
    if (pageAction === 'edit') {
      const data = convertFromHTML(JSON.parse(jobOffer.description));
      const state = ContentState.createFromBlockArray(data.contentBlocks, data.entityMap);
      setInitEditorContent(JSON.stringify(convertToRaw(state)));
    }
  }, []);

  const onSubmit = async (data) => {
    if (pageAction === 'edit') {
      const { success, message } = await JobOfferService.updateJobOffer({
        ...data,
        description: JSON.stringify(editorContent),
        id: jobOffer.id,
      });
      navigate('/employer/job-offers', { state: { open: true, success, message } });
    } else {
      const { success, message } = await JobOfferService.createJobOffer({
        ...data,
        description: JSON.stringify(editorContent),
        user: user.id,
      });
      navigate('/employer/job-offers', { state: { open: true, success, message } });
    }
  };

  const handleDescriptionChange = (data) => {
    setEditorContent(convertToHTML(data.getCurrentContent()));
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
    // resetForm,
    // isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <UserProfileForm onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormTextField
            name="offerName"
            label="Offer Name"
            placeholder="Junior web developer"
            fullWidth
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.offerName}
            error={touched.offerName && Boolean(errors.offerName)}
          />
          <FormTextField
            name="salaryFrom"
            label="Salary From"
            type="number"
            fullWidth
            size="medium"
            sx={{ mt: '1rem' }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.salaryFrom}
            error={touched.salaryFrom && Boolean(errors.salaryFrom)}
          />
          <FormTextField
            name="salaryTo"
            label="Salary To"
            type="number"
            fullWidth
            size="medium"
            sx={{ mt: '1rem' }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.salaryTo}
            error={touched.salaryTo && Boolean(errors.salaryTo)}
          />
          <FormTextField
            name="city"
            label="City"
            fullWidth
            placeholder="Vilnius"
            size="medium"
            sx={{ mt: '1rem' }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            error={touched.city && Boolean(errors.city)}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: { xs: '1rem', md: 0 } }}>
          <FormSelect
            name="salaryType"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.salaryType}
            error={touched.salaryType && Boolean(errors.salaryType)}
          >
            <MenuItem value="Net">Net</MenuItem>
            <MenuItem value="Gross">Gross</MenuItem>
          </FormSelect>
          <JobOfferDatepicker
            name="activeFrom"
            label="Active From"
            selected={values.activeFrom}
            onChange={(date) => setFieldValue('activeFrom', date)}
            value={values.activeFrom}
            error={touched.activeFrom && Boolean(errors.activeFrom)}
          />
          <JobOfferDatepicker
            name="activeUntill"
            label="Active Untill"
            selected={values.activeUntill}
            onChange={(date) => setFieldValue('activeUntill', date)}
            value={values.activeUntill}
            error={touched.activeUntill && Boolean(errors.activeUntill)}
          />
        </Grid>
      </Grid>
      <Grid item sx={{ mt: '1rem' }}>
        <MUIRichTextEditor
          label="Start typing..."
          value={initEditorContent}
          controls={textEditorControls}
          onChange={(data) => handleDescriptionChange(data)}
        />
      </Grid>
      <Box sx={{
        display: 'flex', justifyContent: 'flex-end', gap: '1rem', mt: '1rem',
      }}
      >
        <ButtonContained type="submit" btnText="Save" />
      </Box>
    </UserProfileForm>
  );
};

export default EmployerJobOfferActionForm;
