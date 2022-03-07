import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(() => ({
  width: '100%',
}));

const CardSwiperContainer = ({ children }) => (
  <StyledBox>{children}</StyledBox>
);

export default CardSwiperContainer;
