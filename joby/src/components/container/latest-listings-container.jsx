import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLatestListingsContainer = styled(Box)(() => ({
  marginTop: '4vh',
  marginBottom: '4vh',
  width: '100%',
}));

const LatestListingsContainer = ({ children, ...restProps }) => (
  <StyledLatestListingsContainer {...restProps}>{children}</StyledLatestListingsContainer>
);

export default LatestListingsContainer;
