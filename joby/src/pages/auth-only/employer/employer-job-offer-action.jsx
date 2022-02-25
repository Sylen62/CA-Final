import React, { useEffect, useState } from 'react';

import {
  Box, Grid, Typography,
} from '@mui/material';
import {
  convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import MainContentContainer from '../../../components/container/main-content-container';
import FormTextField from '../../../components/text-field/form-text-field';
import ButtonOutlined from '../../../components/button/button-outlined';
import ButtonContained from '../../../components/button/button-contained';
import JobOfferDatepicker from '../../../components/datepicker/job-offer-datepicker';
import SecondaryContentContainer from '../../../components/container/secondary-content-container';
import UserProfileForm from '../../../components/form/user-profile-form';
import JobOfferService from '../../../services/job-offer-service';

const htmlData = '<h2>Lorem</h2><p></p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nisi sit, maiores commodi explicabo nobis perspiciatis id amet omnis culpa fugit a vitae, unde minima, nemo dolore consequuntur dignissimos? Iste fugit omnis nisi fuga nam asperiores reprehenderit, ratione voluptatum quod natus aut alias dicta ut reiciendis quae fugiat vel dolorum necessitatibus praesentium molestias. Sed quaerat laudantium, ab rerum cumque blanditiis similique voluptatem dicta veritatis esse at omnis nesciunt voluptate possimus, eum eligendi dolorem doloribus impedit sint. </p><p></p><h2>Similique </h2><ul><li>Sed quaerat laudantium.</li><li>Sapiente voluptatem!</li><li>Deserunt natus autem.</li></ul><p></p>';

const EmployerJobOfferAction = () => {
  const [editorContent, setEditorContent] = useState();
  const [initEditorContent, setInitEditorContent] = useState();
  const textEditorControls = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'undo', 'redo', 'numberList', 'bulletList', 'clear'];
  const [pageAction, setPageAction] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector(authSelector);

  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const handleSave = (event) => {
    event.preventDefault();
    console.log(editorContent);
    const formData = new FormData(document.querySelector('form'));
    formData.append('description', JSON.stringify(editorContent));
    formData.append('user', user.id);// = user;
    JobOfferService.createJobOffer(Object.fromEntries(formData));
  };

  useEffect(() => {
    if (location.pathname.includes('/create')) setPageAction('Create');
    else setPageAction('Edit');
    const data = convertFromHTML(htmlData);
    const state = ContentState.createFromBlockArray(data.contentBlocks, data.entityMap);
    setInitEditorContent(JSON.stringify(convertToRaw(state)));
  }, []);

  const handleChange = (data) => {
    setEditorContent(convertToHTML(data.getCurrentContent()));
  };

  return (
    <MainContentContainer maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '3vh' }}>
      <Typography textAlign="center" id="modal-modal-title" variant="h5" component="h2">
        {pageAction}
        {' '}
        Offer
      </Typography>
      <SecondaryContentContainer sx={{ mt: 2 }}>
        <UserProfileForm onSubmit={handleSave}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormTextField
                name="offerName"
                label="Offer Name"
                placeholder="Junior web developer"
                fullWidth
                size="medium"
              />
              <FormTextField
                name="salaryFrom"
                label="Salary From"
                type="number"
                fullWidth
                size="medium"
                sx={{ mt: '1rem' }}
              />
              <FormTextField
                name="salaryTo"
                label="Salary To"
                type="number"
                fullWidth
                size="medium"
                sx={{ mt: '1rem' }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: { xs: '1rem', md: 0 } }}>
              <FormTextField
                name="salaryType"
                label="Salary Type"
                placeholder="Net / Gross"
                fullWidth
                size="medium"
              />
              <JobOfferDatepicker name="activeFrom" label="Active From" />
              <JobOfferDatepicker name="activeUntill" label="Active Untill" />
            </Grid>
          </Grid>
          <Grid item sx={{ mt: '1rem' }}>
            <MUIRichTextEditor
              label="Start typing..."
              value={initEditorContent}
              controls={textEditorControls}
              onChange={(data) => handleChange(data)}
            />
          </Grid>
          <Box sx={{
            display: 'flex', justifyContent: 'flex-end', gap: '1rem', mt: '1rem',
          }}
          >
            <ButtonContained type="submit" btnText="Save" />
          </Box>
        </UserProfileForm>
      </SecondaryContentContainer>
      <Box sx={{
        display: 'flex', justifyContent: 'flex-start', gap: '1rem', mt: '1rem',
      }}
      >
        <ButtonOutlined onClick={() => navigate(-1)} btnText="Return" btnReturn />
      </Box>
    </MainContentContainer>
  );
};
export default EmployerJobOfferAction;
