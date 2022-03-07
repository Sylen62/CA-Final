import React from 'react';
import {
  Box, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './logo';
import MobileDrawer from './mobile-drawer';

const Mobile = ({
  breakPoint, loggedIn, openDrawer, handleToggleDrawer,
}) => {
  const mobileStyles = {
    flexGrow: 1,
    display: { xs: 'flex', [breakPoint]: 'none' },
    position: 'absolute',
  };

  return (
    <>
      <Box sx={mobileStyles}>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => handleToggleDrawer(!openDrawer)}
          color="inherit"
        >
          {openDrawer ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <MobileDrawer
          breakPoint={breakPoint}
          openDrawer={openDrawer}
          handleToggleDrawer={(open) => handleToggleDrawer(open)}
          loggedIn={loggedIn}
        />
      </Box>
      <Logo onClick={() => handleToggleDrawer(false)} sx={{ display: { xs: 'flex', [breakPoint]: 'none' }, flexGrow: 1, justifyContent: 'center' }} />
    </>
  );
};

export default Mobile;
