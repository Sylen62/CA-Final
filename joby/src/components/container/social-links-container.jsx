import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';

const SocialLinksContainer = ({
  linkedIn, facebook, twitter, instagram, iconButtonProps, containerProps,
}) => {
  const themes = useTheme();
  const iconStyle = {
    color: themes.palette.common.white,
    '&:hover': {
      color: themes.palette.secondary.main,
    },
  };
  return (
    <Box {...containerProps}>
      {linkedIn ? (
        <IconButton href={linkedIn} target="blank" {...iconButtonProps}>
          <LinkedInIcon sx={iconStyle} />
        </IconButton>
      ) : null}
      {facebook ? (
        <IconButton href={facebook} target="blank" {...iconButtonProps}>
          <FacebookIcon sx={iconStyle} />
        </IconButton>
      ) : null}
      {twitter ? (
        <IconButton href={twitter} target="blank" {...iconButtonProps}>
          <TwitterIcon sx={iconStyle} />
        </IconButton>
      ) : null}
      {instagram ? (
        <IconButton href={instagram} target="blank" {...iconButtonProps}>
          <InstagramIcon sx={iconStyle} />
        </IconButton>
      ) : null}
    </Box>
  );
};

export default SocialLinksContainer;
