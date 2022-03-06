import React from 'react';
import {
  Box, Card, CardContent, CardMedia, Divider, Typography, styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Image } from 'mui-image';
import SocialLinksContainer from '../container/social-links-container';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  width: '300px',
  height: '500px',
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  position: 'relative',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: '200px',
  maxWidth: '300px',
  objectFit: 'cover',
  objectPosition: 'center',
  padding: '10px',
  borderRadius: '20px',
}));

const CardCandidate = ({ data }) => (
  <StyledCard>
    <Link
      to={`/candidates/${data.id}`}
      style={{
        textDecoration: 'none',
        textTransform: 'none',
        color: 'white',
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <StyledCardMedia>
          <Image
            src={data.image || ''}
            duration={500}
            height="100%"
            width="100%"
            sx={{
              borderRadius: '10px',
              objectPosition: 'center',
            }}
          />
        </StyledCardMedia>
        <Divider variant="middle" sx={(theme) => ({ backgroundColor: theme.palette.secondary.main })} />
        <Box
          title={`${data.name} ${data.surname}`}
          sx={{
            p: 0,
            my: '5px',
            height: '32px',
            width: '270px',
            alignSelf: 'center',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography component="h4" variant="h5" textAlign="center" sx={{ width: '270px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {`${data.name} ${data.surname}`}
          </Typography>
        </Box>
        <CardContent
          sx={{
            py: 0,
            px: '10px',
            mt: '5px',
            display: 'flex',
            height: '200px',
          }}
        >
          <Typography
            variant="body2"
            textAlign="center"
          >
            {data.shortDescription ?? 'No description'}
          </Typography>
        </CardContent>
      </Box>
    </Link>
    <Box sx={{
      display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 19, height: '40px', width: '100%',
    }}
    >
      <SocialLinksContainer
        linkedIn={data.linkedIn}
        facebook={data.facebook}
        instagram={data.instagram}
        twitter={data.twitter}
      />
    </Box>
  </StyledCard>
);

export default CardCandidate;
