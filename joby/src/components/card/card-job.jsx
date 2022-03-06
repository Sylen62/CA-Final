import React, { useEffect, useRef } from 'react';
import {
  CardContent, CardHeader, Typography, Box, Card, CardMedia, CardActions, Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Image } from 'mui-image';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  width: '300px',
  height: '500px',
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: '200px',
  maxWidth: '300px',
  padding: '10px',
  borderRadius: '20px',
  margin: 'auto',
}));

const CardJob = ({ data }) => {
  const cardTextRef = useRef(null);
  const {
    id, user: { image, employerName }, offerName, salaryFrom, salaryTo, salaryType,
    daysLeft,
  } = data;

  useEffect(() => {
    const wordArray = cardTextRef.current.innerHTML.split(' ');
    while (cardTextRef.current.scrollHeight > cardTextRef.current.offsetHeight) {
      wordArray.pop();
      cardTextRef.current.innerHTML = `${wordArray.join(' ')}...`;
    }
  }, [cardTextRef]);

  return (
    <StyledCard>
      <Link
        to={`/jobs/${id}`}
        style={{
          textDecoration: 'none',
          textTransform: 'none',
          color: 'white',
        }}
      >
        <StyledCardMedia>
          <Image
            src={image ?? ''}
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
        <Box sx={{
          height: '260px', position: 'relative', display: 'flex', flexDirection: 'column',
        }}
        >
          <CardHeader title={employerName} sx={{ py: '10px', textAlign: 'center' }} />
          <CardContent
            ref={cardTextRef}
            sx={{
              py: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '135px',
            }}
          >
            <Typography variant="h6" textAlign="center">
              {offerName}
            </Typography>
          </CardContent>
          <CardActions sx={{
            position: 'absolute', bottom: 0, left: 10, right: 10,
          }}
          >
            <Box sx={{
              mt: '1rem', width: '100%', display: 'flex', justifyContent: 'space-between',
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">
                  {salaryFrom}
                  {' '}
                  -
                  {' '}
                  {salaryTo}
                  {' '}
                  €/month.
                </Typography>
                <Typography variant="caption">{salaryType}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">Vilnius</Typography>
                <Typography variant="caption">
                  Left
                  {' '}
                  {daysLeft}
                  {' '}
                  d.
                </Typography>
              </Box>
            </Box>
          </CardActions>
        </Box>
      </Link>
    </StyledCard>
  );
};

export default CardJob;
