import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledSecondaryContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  marginTop: '1rem',
  marginBottom: '1rem',
}));

const SecondaryContentContainer = ({ children, ...otherProps }) => (
  <StyledSecondaryContentContainer {...otherProps}>
    {children}
  </StyledSecondaryContentContainer>
);

export default SecondaryContentContainer;
