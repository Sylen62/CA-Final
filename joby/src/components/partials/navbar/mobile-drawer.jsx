import React from 'react';
import {
  Box, Drawer, IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';
import StyledNavLink from './styled-nav-link';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '.MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  '.MuiDrawer-paperAnchorTop': {
    marginTop: '61px',
  },
  '.MuiBackdrop-root': {
    marginTop: '61px',
  },
}));

const MobileDrawer = ({
  openDrawer, breakPoint, loggedIn, handleToggleDrawer,
}) => (
  <StyledDrawer
    open={openDrawer}
    onClose={() => handleToggleDrawer(false)}
    anchor="top"
  >
    <Box>
      <StyledNavLink onClick={() => handleToggleDrawer(false)} to="/" breakPoint={breakPoint}>
        <IconButton size="small" disableRipple>
          <HomeIcon />
          {' '}
          Home
        </IconButton>
      </StyledNavLink>
      <StyledNavLink onClick={() => handleToggleDrawer(false)} to="/jobs" breakPoint={breakPoint}>
        <IconButton size="small" disableRipple>
          <WorkOutlineIcon />
          {' '}
          Jobs
        </IconButton>
      </StyledNavLink>
      <StyledNavLink onClick={() => handleToggleDrawer(false)} to="/candidates" breakPoint={breakPoint}>
        <IconButton size="small" disableRipple>
          <PersonIcon />
          {' '}
          Candidates
        </IconButton>
      </StyledNavLink>
      { !loggedIn
        ? (
          <>
            <StyledNavLink onClick={() => handleToggleDrawer(false)} to="/sign-up" breakPoint={breakPoint}>
              <IconButton size="small" disableRipple>
                <PersonAddAltIcon />
                {' '}
                Sign Up
              </IconButton>
            </StyledNavLink>
            <StyledNavLink onClick={() => handleToggleDrawer(false)} to="/sign-in" breakPoint={breakPoint}>
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
  </StyledDrawer>
);

export default MobileDrawer;
