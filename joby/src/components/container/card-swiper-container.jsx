import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(() => ({
  width: '100%',
  // overflow: 'hidden',
  // backgroundColor: theme.palette.primary.main,
  // border: `1px solid ${theme.palette.secondary.main}`,
  // borderRadius: '10px',
  // padding: '10px 10px',
}));

const CardSwiperContainer = ({ children }) => (
  <StyledBox>{children}</StyledBox>
);

export default CardSwiperContainer;
