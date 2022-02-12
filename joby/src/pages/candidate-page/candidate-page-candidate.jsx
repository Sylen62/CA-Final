import React, { useEffect, useRef } from 'react';
import {
  Box, Container, Grid, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image } from 'mui-image';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import ButtonOutlined from '../../components/button/button-outlined';
import SocialLinksContainer from '../../components/containers/social-links-container';

const CandidateInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    height: '228px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '228px',
    // maxWidth: '80%',
  },
  [theme.breakpoints.up('md')]: {
    height: '266px',
    // maxWidth: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    height: '266px',
  },
}));

const StyledContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    marginLeft: '1rem',
    marginTop: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '1rem',
  },
}));

const JobInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const data = {
  id: 1,
  image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  candidateFullName: 'Vards Pavards',
  linkedIn: 'https://www.linkedin.com/',
  facebook: 'https://lt-lt.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  // Max 775 characters;
  candidateShortDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit esse asperiores perspiciatis reprehenderit qui harum, aut, blanditiis culpa, vitae possimus accusantium quia nulla voluptas dolore ea temporibus? Reiciendis libero quos inventore unde excepturi voluptatem placeat aspernatur. Ea harum aliquam ex ipsum earum dolores pariatur exercitationem! Quis blanditiis obcaecati repellendus aliquid libero, explicabo, ullam exercitationem, corrupti sapiente in nemo quod mollitia doloribus. Soluta quisquam expedita earum, nemo ab aspernatur quo enim quaerat nulla animi nam, veritatis excepturi accusamus rerum nihil similique iusto porro unde explicabo! Minima unde molestiae expedita reiciendis ipsa, veniam vero. Minima iste aperiam laborum placeat earum quae!',
  candidateFullDescription: '<p><strong>Professional Summary</strong></p><p>Dependable and goal-oriented IT Specialist with 5+ years of experience maintaining in-house IT systems and providing comprehensive customer support. At XYZ Global, saved 4 workhours a week for a team of 15 specialists through creating scripts to automate scheduled system patching. Seeking to join ABC Corp to optimize your IT processes while effectively cutting costs.</p><p><strong>Work History</strong></p><p><strong>Senior IT Specialist</strong></p><p>XYZ Global, Manhattan, NY</p><p>Jan 2018–Present</p><ul><li>Maintained 250+ Windows computers and peripherals, including all configuring and monitoring. Worked with vendors to cut equipment costs by 20%.</li><li>Installed 200+ desktop computers during a company-wide upgrade.</li><li>Improved the overall network capabilities by 18% through designing and implementing new connectivity network configurations.</li><li>Spearheaded hardware and software upgrade rollouts.</li></ul><p><strong>Key achievement:</strong> Wrote scripts to automate scheduled system patching. Saved 4 hours a week.</p><p><strong>IT Support Specialist</strong></p><p>Zero Web, Newark, NJ<br/>Dec 2015–Dec 2017</p><ul><li>Provided Help Desk-based IT phone support to end-users for a fast-paced web hosting firm, including troubleshooting, server support, and customer service.</li><li>Maintained 15% above average customer satisfaction in post-call surveys. Used deep compassion and listening skills for the best customer experience.</li><li>Became a trusted resource through high-level problem-solving skills. Solved customer issues with 12% more success than the company average.</li><li>Kept 250 employees up and running on Windows 10.</li></ul><p><strong>Junior Desktop Support Engineer</strong></p><p>Calumcoro Medical, Queens, NY</p><p>Jan 2014–Dec 2015</p><ul><li>Handled all desktop support issues in a high-volume manufacturing firm.</li><li>Handled trouble tickets 25% faster than other desktop support engineers.</li><li>Commended by management for exemplary troubleshooting skills.</li></ul><p><strong>Education</strong></p><p>BSc, Computer Science<br/>The State University of New York, Queens, NY</p><p>2014</p><p><strong>Key Skills</strong></p><ul><li>System Administration</li><li>Network Configuration</li><li>Software Installation</li><li>Troubleshooting</li><li>Windows Environment</li><li>Customer Service</li><li>Technical Support</li></ul><p><strong>Certifications</strong></p><ul><li>2016, CompTIA A+</li><li>2019, MS Server</li></ul>',
};

const CandidatePageCandidate = () => {
  const navigate = useNavigate();
  const cadidateInfoRef = useRef(null);

  useEffect(() => {
    cadidateInfoRef.current.innerHTML = data.candidateFullDescription;
  }, []);
  return (
    <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '3vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h4" variant="h4" textAlign="center" sx={{ mb: '1rem' }}>Candidate</Typography>
        <CandidateInfoContainer>
          <Grid container sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={12} md={4} sx={{ width: '100%', maxHeight: { xs: '10%', sm: '30%', lg: '100%' } }}>
              <StyledImageBox>
                <Image
                  src={data.image}
                  duration={500}
                  height="100%"
                  width="100%"
                  sx={{
                    borderRadius: '10px',
                    objectPosition: 'center',
                  }}
                />
              </StyledImageBox>
            </Grid>
            <Grid item xs={12} md={8}>
              <StyledContentContainer>
                <Grid container sx={{ display: 'flex' }}>
                  <Grid item xs={12} sm={6}>
                    <Typography component="div" variant="h5" sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                      {data.candidateFullName}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: 'flex', width: '100%', justifyContent: { xs: 'center', sm: 'flex-end' }, flexWrap: 'wrap',
                    }}
                  >
                    <SocialLinksContainer
                      linkedIn={data.linkedIn}
                      facebook={data.facebook}
                      instagram={data.instagram}
                      twitter={data.twitter}
                    />
                  </Grid>
                  <Grid item>
                    <p>{data.candidateShortDescription}</p>
                  </Grid>
                </Grid>
              </StyledContentContainer>
            </Grid>
          </Grid>
        </CandidateInfoContainer>
        <Typography component="h4" variant="h4" textAlign="center" sx={{ mt: '1rem' }}>About Candidate</Typography>
        <JobInfoContainer sx={{ mt: '1rem' }}>
          <Box ref={cadidateInfoRef} />
        </JobInfoContainer>
        <Box sx={{ alignSelf: 'start', mt: '2rem' }}>
          <ButtonOutlined onClick={() => navigate(-1)} btnText="Return" btnReturn sx={{ mr: '1rem' }} />
        </Box>
      </Box>
    </Container>
  );
};

export default CandidatePageCandidate;
