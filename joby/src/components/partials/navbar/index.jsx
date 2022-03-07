import React, { useState } from 'react';
import {
  AppBar, Container, Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import Desktop from './desktop';
import Mobile from './mobile';
import NavbarUserMenu from './navbar-user-menu';

const breakPoint = 'md';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  zIndex: '1400',
}));

const Navbar = () => {
  const auth = useSelector(authSelector);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Mobile
            breakPoint={breakPoint}
            loggedIn={auth.loggedIn}
            openDrawer={openDrawer}
            handleToggleDrawer={handleToggleDrawer}
          />
          <Desktop
            breakPoint={breakPoint}
            loggedIn={auth.loggedIn}
            handleToggleDrawer={handleToggleDrawer}
          />
          {auth.loggedIn
            ? <NavbarUserMenu />
            : null}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
