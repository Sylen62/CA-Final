import React, { useState } from 'react';
import {
  Box, Button, Container, Grid,
} from '@mui/material';
import Image from 'mui-image';
import { useSelector } from 'react-redux';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
// import MUIEditor, { MUIEditorState } from 'react-mui-draft-wysiwyg';
import {
  convertFromHTML, ContentState, convertToRaw, convertFromRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';
import { authSelector } from '../../../store/auth';
import FormTextField from '../../../components/text-field/form-text-field';

const StyledImageBox = styled(Box)(({ theme }) => ({
  padding: '12px',
  maxWidth: '400px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '10px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  // backgroundColor: theme.palette.common.white,
  border: 'none',
  fontWeight: '600',
  marginTop: '10px',
  maxWidth: '400px',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    // backgroundColor: theme.palette.common.white,
    border: 'none',
    // '-webkit-text-decoration': 'none',
    textDecoration: 'none',
  },
  '&.Mui-disabled': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    // borderColor: theme.palette.secondary.main,
    borderColor: theme.palette.common.white,
    borderRadius: '4px',
  },
}));

const CandidateProfilePage = () => {
  const { user } = useSelector(authSelector);
  const sampleMarkup = '<b>Bold text</b>, <i>Italic text</i><br/ ><br />Other text';
  const contentHTML = convertFromHTML(sampleMarkup);
  const state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap);
  // console.log(convertToRaw(state));
  const content = JSON.stringify(convertToRaw(state));

  const [test, setTest] = useState(null);

  const handleSave = (data) => {
    // console.log(data);
    // console.log(convertFromRaw(data));
    const t = JSON.parse(data);
    const s = convertFromRaw(t);
    // console.log(s);
    // console.log(convertToHTML(s));
    setTest(convertToHTML(s));
  };

  console.log(user);
  return (
    <Container maxWidth="lg" sx={{ py: '7vh', minHeight: 'calc(100vh - 124px)' }}>
      <Box>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledImageBox>
              <Image src="https://unsplash.it/500/400" duration={500} height="100%" sx={{ borderRadius: '10px' }} />
            </StyledImageBox>
            <StyledButton fullWidth>
              Change image
            </StyledButton>
            <FormTextField
              name="linkedIn"
              label="LinkedIn"
              fullWidth
              size="small"
              placeholder="Your link"
              sx={{ mt: '1rem', maxWidth: '400px' }}
              InputProps={{
                startAdornment: <LinkedInIcon position="start" sx={{ mr: '5px' }} />,
              }}
            />
            <FormTextField
              name="facebook"
              label="Facebook"
              fullWidth
              size="small"
              placeholder="Your link"
              sx={{ mt: '1rem', maxWidth: '400px' }}
              InputProps={{
                startAdornment: <FacebookIcon position="start" sx={{ mr: '5px' }} />,
              }}
            />
            <FormTextField
              name="twitter"
              label="Twitter"
              fullWidth
              size="small"
              placeholder="Your link"
              sx={{ mt: '1rem', maxWidth: '400px' }}
              InputProps={{
                startAdornment: <TwitterIcon position="start" sx={{ mr: '5px' }} />,
              }}
            />
            <FormTextField
              name="instagram"
              label="Instagram"
              fullWidth
              size="small"
              placeholder="Your link"
              sx={{ mt: '1rem', maxWidth: '400px' }}
              InputProps={{
                startAdornment: <InstagramIcon position="start" sx={{ mr: '5px' }} />,
              }}
            />
            <StyledButton fullWidth>
              Update Socials
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormTextField
                  name="name"
                  label="Name"
                  fullWidth
                  size="medium"
                  value={user.name}
                />
                <FormTextField
                  name="surname"
                  label="Surname"
                  fullWidth
                  size="medium"
                  sx={{ mt: '1rem' }}
                  value={user.surname}
                />
                <FormTextField
                  name="email"
                  label="Email"
                  fullWidth
                  size="medium"
                  sx={{ mt: '1rem' }}
                  value={user.email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTextField
                  name="newPassword"
                  label="New password"
                  fullWidth
                  size="medium"
                />
                <FormTextField
                  name="repeatNewPassword"
                  label="Repeat new password"
                  fullWidth
                  size="medium"
                  sx={{ mt: '1rem' }}
                />
              </Grid>
              <Grid item xs={12}>
                <MUIRichTextEditor label="Start typing..." defaultValue={content} onSave={handleSave} />
                <div dangerouslySetInnerHTML={{ __html: test }} />
                {/* <MUIEditor editorState={editorState} onChange={onChange} /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CandidateProfilePage;
