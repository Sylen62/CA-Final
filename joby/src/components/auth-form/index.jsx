import React from 'react';
import {
  Box, CircularProgress, Container, Paper, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormButton from './auth-form-button';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
}));

const AuthForm = ({
  children,
  title,
  linkTo,
  linkTitle,
  loading,
  onSubmit,
  isValid,
}) => (
  <Container
    maxWidth="sm"
    component="main"
    sx={(theme) => ({ py: '4vh', minHeight: theme.mixins.content.minContentHeight })}
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
              ? <CircularProgress sx={(theme) => ({ color: theme.palette.common.black })} />
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
