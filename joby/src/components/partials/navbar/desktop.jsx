import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';

// Mano
import Logo from './logo';
import StyledNavLink from './styled-nav-link';

const Desktop = ({ breakPoint, loggedIn, handleToggleDrawer }) => {
  const desktopStyles = {
    display: { xs: 'none', [breakPoint]: 'flex' },
  };
  return (
    <>
      <Logo onClick={() => handleToggleDrawer(false)} sx={{ ...desktopStyles }} />
      <Box sx={{
        height: '100%',
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: {
          md: loggedIn ? '50px' : 0,
          lg: loggedIn ? '50px' : 0,
        },
        ...desktopStyles,
      }}
      >
        <StyledNavLink onClick={() => handleToggleDrawer(false)} to="/" breakPoint={breakPoint}>
          <IconButton size="small" disableRipple>
            <HomeIcon />
            {' '}
            Home
          </IconButton>
        </StyledNavLink>
        <StyledNavLink to="/jobs" breakPoint={breakPoint}>
          <IconButton size="small" disableRipple>
            <WorkOutlineIcon />
            {' '}
            Jobs
          </IconButton>
        </StyledNavLink>
        <StyledNavLink to="/candidates" breakPoint={breakPoint}>
          <IconButton size="small" disableRipple>
            <PersonIcon />
            {' '}
            Candidates
          </IconButton>
        </StyledNavLink>
        { !loggedIn
          ? (
            <>
              <StyledNavLink to="/sign-up" breakPoint={breakPoint}>
                <IconButton size="small" disableRipple>
                  <PersonAddAltIcon />
                  {' '}
                  Sign Up
                </IconButton>
              </StyledNavLink>
              <StyledNavLink to="/sign-in" breakPoint={breakPoint}>
                <IconButton size="small" disableRipple>
                  <LoginIcon />
                  {' '}
                  Sign In
                </IconButton>
              </StyledNavLink>
            </>
          )
          : null}
      </Box>
    </>
  );
};

export default Desktop;
