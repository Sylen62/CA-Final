import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (propName) => propName !== 'breakPoint',
})(({ theme, breakPoint }) => ({
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  width: '100%',
  '& svg': {
    marginBottom: '4px',
    marginRight: '4px',
  },
  '& button': {
    color: theme.palette.common.white,
  },
  [theme.breakpoints.up(breakPoint)]: {
    padding: theme.spacing(2),
    width: 'auto',
  },
  '& .MuiIconButton-root:hover': {
    color: theme.palette.secondary.main,
  },
  '&.active button': {
    color: theme.palette.secondary.main,
  },
}));

export default StyledNavLink;
