import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledImageContainer = styled(Box)(({ theme }) => ({
  padding: '12px',
  maxWidth: '400px',
  height: '326px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '10px',
}));

const ImageContainer = ({ children, ...restProps }) => (
  <StyledImageContainer {...restProps}>
    {children}
  </StyledImageContainer>
);

export default ImageContainer;
