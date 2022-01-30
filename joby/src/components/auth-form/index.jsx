import React from 'react';
import {
  Box, CircularProgress, Container, Paper, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormButton from './auth-form-button';

const StyledLink = styled(Link)(({ theme }) => ({
  // color: theme.palette.secondary.main,
  color: theme.palette.common.white,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme.palette.primary.main,
  // boxShadow: '0 1px 5px #4BD6D0',
  border: `1px solid ${theme.palette.secondary.main}`,
  // border: `1px solid ${theme.palette.common.white}`,
}));

const AuthForm = ({
  children, // Form content
  title, // Form title
  linkTo, // Link for sign up
  linkTitle, // Link to sign up title
  loading, // boolean to show loading animation for button
  onSubmit, // submit function
  isValid, // boolean check if from is valid before enabeling button
}) => (
  <Container
    maxWidth="sm"
    component="main"
    sx={{ pt: '7vh', height: 'calc(100vh - 122px)' }}
  >
    <StyledPaper elevation={0}>
      <Box component="form" onSubmit={onSubmit}>
        <Box sx={{
          mb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Typography component="h1" variant="h4" color="common.white">
            {title}
          </Typography>
        </Box>
        {children}
        <FormButton disabled={!isValid}>
          {
            loading
              ? <CircularProgress color="inherit" />
              : title
          }
        </FormButton>
        <StyledLink to={linkTo}>
          {linkTitle}
        </StyledLink>
      </Box>
    </StyledPaper>
  </Container>
);

export default AuthForm;
