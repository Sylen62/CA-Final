import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../../store/auth';
import MainContentContainer from '../../../../components/container/main-content-container';
import SecondaryContentContainer from '../../../../components/container/secondary-content-container';
import InfoSnackbar from '../../../../components/snackbar';
import UserProfilePageTextEditor from '../../../../components/text-editor/user-profile-page-text-editor';
import EmployerProfilePageUser from './employer-profile-page-user';
import EmployerProfilePageImage from './employer-profile-page-image';

const EmployerProfilePage = () => {
  const { user } = useSelector(authSelector);
  const [submiting, setSubmiting] = useState(false);
  const [infoSnackbar, setInfoSnackbar] = useState({ open: false, success: false, message: '' });

  const handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setInfoSnackbar({ open: false });
  };

  return (
    <MainContentContainer>
      <InfoSnackbar {...infoSnackbar} handleSnackbarClose={handleSnackbarClose} />
      <Typography component="h2" variant="h4" textAlign="center">Profile</Typography>
      <SecondaryContentContainer>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4.7} sx={{ display: { xs: 'flex', md: 'block', lg: 'block' }, alignItems: 'center', flexDirection: 'column' }}>
            <EmployerProfilePageImage
              user={user}
              submiting={submiting}
              setSubmiting={setSubmiting}
              setInfoSnackbar={setInfoSnackbar}
            />
          </Grid>
          <Grid item xs={12} md={7} sx={{ mx: 'auto' }}>
            <EmployerProfilePageUser
              user={user}
              submiting={submiting}
              setSubmiting={setSubmiting}
              setInfoSnackbar={setInfoSnackbar}
            />
          </Grid>
        </Grid>
      </SecondaryContentContainer>
      <Typography component="h2" variant="h4" textAlign="center">About You</Typography>
      <SecondaryContentContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <UserProfilePageTextEditor
          user={user}
          submiting={submiting}
          setSubmiting={setSubmiting}
          setInfoSnackbar={setInfoSnackbar}
        />
      </SecondaryContentContainer>
    </MainContentContainer>
  );
};

export default EmployerProfilePage;
