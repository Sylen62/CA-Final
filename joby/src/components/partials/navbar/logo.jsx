import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import logoIcon from '../../svg/logo.svg';

const LogoContainer = styled(Link)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(2, 0),
  textDecoration: 'none',
  color: theme.palette.common.white,
}));

const Logo = (props) => (
  <LogoContainer to="/" {...props}>
    <img src={logoIcon} alt="" style={{ marginRight: '5px' }} />
    <Typography component="h2" variant="h5" sx={{ mt: { xs: '0px', sm: '2px' } }}>JOBY</Typography>
  </LogoContainer>
);

export default Logo;
