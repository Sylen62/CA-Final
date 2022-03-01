import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledImageContainer = styled(Box)(({ theme }) => ({
  padding: '10px',
  maxWidth: '500px',
  height: '350px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '500px',
    height: '380px',
  },
}));

const ImageContainer = ({ children, ...restProps }) => (
  <StyledImageContainer {...restProps}>
    {children}
  </StyledImageContainer>
);

export default ImageContainer;
