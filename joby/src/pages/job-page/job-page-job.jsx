import React, { useEffect, useRef, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {
  Container, Box, Grid, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image } from 'mui-image';
import { useNavigate } from 'react-router-dom';
import ButtonContained from '../../components/button/button-contained';
import ButtonOutlined from '../../components/button/button-outlined';
import SendCvModal from '../../components/modal/send-cv-modal';

// import PDF from './Pro.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `
// unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

// // Nezinau ar reikia
// const options = {
//   cMapUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps`,
//   cMapPacked: true,
// };

// const StyledCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.primary.main,
//   border: `1px solid ${theme.palette.secondary.main}`,
//   borderRadius: '10px',
//   padding: '12px',
//   [theme.breakpoints.up('xs')]: {
//     width: '600px',
//     alignItems: 'center',
//   },
//   [theme.breakpoints.up('md')]: {
//     width: '900px',
//     height: '250px',
//     // alignItems: 'center',
//   },
//   [theme.breakpoints.up('lg')]: {
//     width: '1200px',
//     height: '250px',
//     // alignItems: 'center',
//   },
// }));

// const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
//   objectFit: 'cover',
//   objectPosition: 'center',
//   borderRadius: '20px',
//   [theme.breakpoints.up('xs')]: {
//     width: '100%',
//     height: '50%',
//   },
// }));

const CompanyInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  // maxHeight: '255px',
  // [theme.breakpoints.up('sm')]: {
  //   height: '525px',
  // },
  // [theme.breakpoints.up('md')]: {
  //   height: '250px',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   height: '255px',
  // },
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '227px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '227px',
  },
  [theme.breakpoints.up('md')]: {
    height: '227px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    height: '250px',
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

const AditionalInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '200px',
}));

const test = '<p><strong>Job description</strong></p><p>Furniture1 needs people with PHP Developer experience, ready to work with multiple European markets (13+) and we are looking for a solution focused individuals who are always looking for the best way to execute a project.</p><ul><li>Develop new features and maintain existing web applications.</li><li>Integrate various REST APIs.</li><li>Working on projects that are based on PHP.</li><li>Troubleshooting issues and identifying solutions.</li><li>Test and maintain software to ensure quality and performance.</li><li>Work in a multi-functional, self-organized team based on Agile principles and Scrum framework.</li></ul><p><strong>Requirements</strong></p><ul><li>Knowledge of PHP / MySQL.</li><li>Knowledge of Javascript / Jquery.</li><li>Ability to work in team and multi-task effectively.</li><li>Attention to quality and details.</li><li>Good time &amp; task management skill</li></ul><p><strong>Company offers</strong></p><ul><li>Experience with Smarty (PHP template engine).</li><li>Experience with Github versioning system.</li><li>Experience in e-commerce field.</li></ul><p>We provide flexible working conditions (working in the office or partially remote), competitive salary based on experience, all of the usual office perks and more. You would have an opportunity to contribute to meaningful and challenging projects, therefore we guarantee that everyday life will definitely not be boring!</p>';

const data = {
  id: '1',
  img: 'https://unsplash.it/500/400',
  employerName: 'Employer Name 1',
  employerFullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum dolores volupt ea iure, molestiae doloribus, soluta velit cum fugiat tempore facere sint corpor, esse mollitia quo repellendus dolor veritatis. Provident molestias neque minus oa nostrum, odit quibusdam soluta eum quas iusto voluptates in natus, numquam laborua quae nemo? (Elmoyer short info) Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, deserunt.',
  jobOffer: {
    title: 'Junior - Mid PHP developer',
    offer: test,
  },
  salaryFrom: 1300,
  salaryTo: 2000,
  salaryType: 'Net',
  city: 'Vilnius',
  activeFor: 12,
};

const JobPageJob = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const jobOfferRef = useRef(null);
  // const [file, setFile] = useState(''); // ./pedeef.pdf
  // const [numPages, setNumPages] = useState(null);

  // useEffect(() => {
  //   setFile(PDF);
  // }, []);

  // const onFileChange = (event) => {
  //   setFile(event.target.files[0]);
  //   console.log(event.target.files[0]);
  // };

  // const onDocumentLoadSuccess = ({ nextNumPages }) => {
  //   setNumPages(nextNumPages);
  // };
  const handleReturn = () => navigate(-1);
  const handleOpenModal = (openModal) => setOpen(openModal);

  useEffect(() => {
    jobOfferRef.current.innerHTML = data.jobOffer.offer;
  }, []);

  return (
    <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '3vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h4" variant="h4" textAlign="center" sx={{ mb: '1rem' }}>Employer</Typography>
        <CompanyInfoContainer>
          <Grid container sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={12} md={4} sx={{ width: '100%', maxHeight: { xs: '10%', sm: '30%', lg: '100%' } }}>
              <StyledImageBox>
                <Image
                  src={data.img}
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
                <Typography component="div" variant="h5" sx={{ mb: '1rem' }}>
                  {data.employerName}
                </Typography>
                <p>{data.employerFullDescription}</p>
              </StyledContentContainer>
            </Grid>
          </Grid>
        </CompanyInfoContainer>
        <Typography component="h4" variant="h4" textAlign="center" sx={{ mt: '1rem' }}>Job Offer</Typography>
        <JobInfoContainer sx={{ mt: '1rem' }}>
          <Typography component="h4" variant="h4">{data.jobOffer.title}</Typography>
          {/* <div ref={div} dangerouslySetInnerHTML={{ __html: test }} /> */}
          <Box ref={jobOfferRef} />
        </JobInfoContainer>
        <Typography component="h4" variant="h4" textAlign="center" sx={{ my: '1rem' }}>Additional Information</Typography>
        <Box>
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <AditionalInfoContainer>
                <Typography component="h5" variant="h5">Salary</Typography>
                <p>
                  {data.salaryFrom}
                  {' '}
                  -
                  {' '}
                  {data.salaryTo}
                  {' '}
                  € / mon.
                  {' '}
                  {data.salaryType}
                </p>
              </AditionalInfoContainer>
            </Grid>
            <Grid item>
              <AditionalInfoContainer>
                <Typography component="h5" variant="h5">City</Typography>
                <p>{data.city}</p>
              </AditionalInfoContainer>
            </Grid>
            <Grid item>
              <AditionalInfoContainer>
                <Typography component="h5" variant="h5">Time left</Typography>
                <p>
                  {data.activeFor}
                  d.
                </p>
              </AditionalInfoContainer>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ alignSelf: 'start', mt: '2rem' }}>
          <ButtonOutlined onClick={handleReturn} btnText="Return" btnReturn sx={{ mr: '1rem' }} />
          <ButtonContained onClick={() => handleOpenModal(true)} btnText="Send CV" />
        </Box>
      </Box>
      <SendCvModal open={open} handleOpenModal={handleOpenModal} />
      {/* <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>
          {' '}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadError={(error) => console.log(error)}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div> */}
    </Container>
  );
};

export default JobPageJob;
