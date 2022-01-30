import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  position: 'relative',
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: theme.palette.primary.main,
  borderTop: '1px solid #4BD6D0',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
}));

const Footer = () => (
  <StyledFooter>
    <Container maxWidth="xs">
      <Typography textAlign="center">Something copyrights &copy;</Typography>
    </Container>
  </StyledFooter>
);

export default Footer;
