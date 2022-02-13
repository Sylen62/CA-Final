import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMainContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: '4vh',
  paddingBottom: '4vh',
  minHeight: theme.mixins.content.minContentHeight,
}));

const MainContentContainer = ({ children, ...restProps }) => (
  <StyledMainContentContainer maxWidth="lg" {...restProps}>
    {children}
  </StyledMainContentContainer>
);

export default MainContentContainer;
