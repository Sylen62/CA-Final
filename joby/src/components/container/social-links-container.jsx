import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, IconButton } from '@mui/material';

const SocialLinksContainer = ({
  linkedIn, facebook, twitter, instagram, iconButtonProps, containerProps,
}) => (
  <Box {...containerProps}>
    {linkedIn ? (
      <IconButton href={linkedIn} target="blank" {...iconButtonProps}>
        <LinkedInIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
    ) : null}
    {facebook ? (
      <IconButton href={facebook} target="blank" {...iconButtonProps}>
        <FacebookIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
    ) : null}
    {twitter ? (
      <IconButton href={twitter} target="blank" {...iconButtonProps}>
        <TwitterIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
    ) : null}
    {instagram ? (
      <IconButton href={instagram} target="blank" {...iconButtonProps}>
        <InstagramIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
    ) : null}
  </Box>
);

export default SocialLinksContainer;
