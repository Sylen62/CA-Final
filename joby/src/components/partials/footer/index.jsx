import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  height: theme.mixins.footer.height,
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
