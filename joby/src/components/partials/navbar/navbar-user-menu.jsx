import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box, Divider, IconButton, ListItemIcon, Menu, MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { authSelector } from '../../../store/auth';
import AuthService from '../../../services/auth-service';

const NavbarUserMenu = () => {
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = useSelector(authSelector);

  const handleToggleMenu = (open) => setMenuOpen(open);

  const handleLogout = () => {
    handleToggleMenu(false);
    AuthService.logout();
  };

  const handleProfileClick = () => {
    handleToggleMenu(false);
    if (auth.user.role === 'CANDIDATE') navigate('candidate/profile');
    if (auth.user.role === 'EMPLOYER') navigate('employer/profile');
  };

  return (
    <Box>
      <IconButton
        size="large"
        sx={{
          color: 'white', position: 'absolute', right: 0, top: 0,
        }}
        onClick={() => handleToggleMenu(!menuOpen)}
        ref={anchorRef}
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        open={menuOpen}
        onClose={() => handleToggleMenu(false)}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            color: 'white',
            backgroundColor: 'primary.main',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'secondary.main',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },

          },
        }}
      >
        <MenuItem onClick={handleProfileClick}>
          <ListItemIcon sx={{ color: 'white' }}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider sx={{ my: 0.5, backgroundColor: 'secondary.main' }} />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon sx={{ color: 'white' }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarUserMenu;
