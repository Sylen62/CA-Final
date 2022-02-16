import React from 'react';
import { Grid, Typography } from '@mui/material';
import CardCandidate from '../../components/card/card-candidate';
import MainContentContainer from '../../components/container/main-content-container';

const data = [
  {
    id: 1,
    candidateLogo: 'https://unsplash.it/200/201',
    candidateName: 'Candidate 1',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
    // Social links
  },
  {
    id: 2,
    candidateLogo: 'https://unsplash.it/200/202',
    candidateName: 'Candidate 2',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit? sadasd ads asd sdfjsdlkf sdjf lksdjf lskdj lsdkfj sldk asd asddasdasdas asd asd asd ads asd asd asd asd asd asd asd a sda sd asd asd asd asd asd as da sd asd asd asd ads asdasda sda sd, asdasd',
  },
  {
    id: 3,
    candidateLogo: 'https://unsplash.it/200/203',
    candidateName: 'Candidate 3',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
  {
    id: 4,
    candidateLogo: 'https://unsplash.it/200/204',
    candidateName: 'Candidate 4',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
  {
    id: 5,
    candidateLogo: 'https://unsplash.it/200/205',
    candidateName: 'Candidate 5',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
  {
    id: 6,
    candidateLogo: 'https://unsplash.it/200/206',
    candidateName: 'Candidate 6',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
];

const CandidatePage = () => (
  <MainContentContainer maxWidth="xl">
    <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem', mt: '1rem' }}>Candidates</Typography>
    <Grid container columnSpacing={2} rowSpacing={4}>
      { data.map((candidateData) => (
        <Grid item key={candidateData.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardCandidate data={candidateData} maxWidth="300px" height="180px" />
        </Grid>
      ))}
    </Grid>
  </MainContentContainer>
);

export default CandidatePage;
