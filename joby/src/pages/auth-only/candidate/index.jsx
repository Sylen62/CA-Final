import React, { useEffect, useRef, useState } from 'react';
import {
  Grid,
  TextareaAutosize,
  Typography,
  Box,
} from '@mui/material';
// import Image from 'mui-image';
import { useSelector } from 'react-redux';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
import {
  convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';
import { authSelector } from '../../../store/auth';
import FormTextField from '../../../components/text-field/form-text-field';
import MainContentContainer from '../../../components/container/main-content-container';
import SecondaryContentContainer from '../../../components/container/secondary-content-container';
import ImageContainer from '../../../components/container/image-container';
import Image from '../../../components/image';
import ButtonUpdate from '../../../components/button/button-update';
import ButtonOutlined from '../../../components/button/button-outlined';
import ButtonContained from '../../../components/button/button-contained';
import ProfileService from '../../../services/profile-service';

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  marginTop: '1rem',
  minHeight: '67px',
  padding: '12px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {
    width: '400px',
    alignSelf: 'center',
  },
}));

const htmlData = '<h2>Lorem</h2><p></p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nisi sit, maiores commodi explicabo nobis perspiciatis id amet omnis culpa fugit a vitae, unde minima, nemo dolore consequuntur dignissimos? Iste fugit omnis nisi fuga nam asperiores reprehenderit, ratione voluptatum quod natus aut alias dicta ut reiciendis quae fugiat vel dolorum necessitatibus praesentium molestias. Sed quaerat laudantium, ab rerum cumque blanditiis similique voluptatem dicta veritatis esse at omnis nesciunt voluptate possimus, eum eligendi dolorem doloribus impedit sint. </p><p></p><h2>Similique </h2><ul><li>Sed quaerat laudantium.</li><li>Sapiente voluptatem!</li><li>Deserunt natus autem.</li></ul><p></p><p>Sapiente ullam ipsa provident quaerat, illo, alias earum sint cupiditate eius, recusandae commodi facilis odit fugiat qui ipsam nostrum officiis placeat assumenda velit perferendis voluptatem maxime reiciendis dicta nesciunt. Ipsum praesentium, minima ratione alias assumenda ullam eligendi, ea quisquam facere esse iusto debitis omnis autem eius in voluptatibus cumque! Dolor voluptates expedita recusandae ratione, suscipit vel! Sit magni blanditiis, sint ea facilis id beatae veritatis tenetur voluptatibus dolorum cumque autem repellat accusamus dicta, repellendus doloribus amet voluptatem perspiciatis nihil? Nulla, deleniti facere inventore, illum dicta facilis suscipit nostrum architecto enim ut laboriosam nam fugiat eaque consectetur aliquam assumenda cupiditate veniam soluta ab non sapiente voluptatem! Facere labore soluta voluptatum id ratione natus fugiat perspiciatis. Deserunt natus autem velit quae vitae ad corporis animi ut!</p>';

const CandidateProfilePage = () => {
  const { user } = useSelector(authSelector);
  const uploadInputRef = useRef(null);
  const [image, setImage] = useState(user.image);
  const [editorContent, setEditorContent] = useState();
  const [initEditorContent, setInitEditorContent] = useState();
  const textEditorControls = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'undo', 'redo', 'numberList', 'bulletList', 'clear'];

  useEffect(() => {
    const data = convertFromHTML(htmlData);
    const state = ContentState.createFromBlockArray(data.contentBlocks, data.entityMap);
    setInitEditorContent(JSON.stringify(convertToRaw(state)));
  }, []);

  const handleChange = (data) => {
    setEditorContent(convertToHTML(data.getCurrentContent()));
  };

  const handleSave = () => {
    console.log(editorContent);
  };

  const handleImageUpload = async (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    await ProfileService.updateImage(event.target.files);
    // console.log(event.target.files[0]);
  };

  console.log(user);
  return (
    <MainContentContainer>
      <Typography component="h2" variant="h4" textAlign="center">Profile</Typography>
      <SecondaryContentContainer>
        <Grid container spacing={1}>
          <Grid
            item
            spacing={2}
            xs={12}
            sm={12}
            md={4.7}
            sx={{
              display: { xs: 'flex', md: 'block', lg: 'block' }, alignItems: 'center', flexDirection: 'column', margin: 'auto',
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={6} md={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ImageContainer>
                  <Image src={image || 'https://unsplash.it/500/400'} />
                </ImageContainer>
                <ButtonUpdate onClick={() => uploadInputRef.current.click()} size="large" btnText="Change image" fullWidth />
                <input ref={uploadInputRef} onChange={handleImageUpload} type="file" accept="image/*" hidden />
              </Grid>
              <Grid item xs={12} sm={6} md={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                <ButtonUpdate btnText="Update Socials" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} sx={{ margin: 'auto' }}>
            <Grid container spacing={2} sx={{ mt: { xs: '1rem', md: 0 } }}>
              <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FormTextField
                  name="employerName"
                  label="Employer name"
                  fullWidth
                  size="medium"
                  value={user.employerName}
                  sx={{ maxWidth: '400px' }}
                />
                <FormTextField
                  name="email"
                  label="Email"
                  fullWidth
                  size="medium"
                  sx={{ mt: '1rem', maxWidth: '400px' }}
                  value={user.email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <FormTextField
                  name="oldPassword"
                  label="Old password"
                  fullWidth
                  size="medium"
                  sx={{ mt: '1rem', maxWidth: '400px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FormTextField
                  name="newPassword"
                  label="New password"
                  fullWidth
                  size="medium"
                  sx={{ maxWidth: '400px' }}
                />
                <FormTextField
                  name="repeatNewPassword"
                  label="Repeat new password"
                  fullWidth
                  size="medium"
                  sx={{ mt: '1rem', maxWidth: '400px' }}
                />
                <ButtonUpdate size="large" btnText="Update accoount" fullWidth sx={{ mt: '1rem', height: { xs: '42.25px', sm: '56px' } }} />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component="h3" variant="h5" textAlign="center">What kind of job are you looking for?</Typography>
                <Typography component="h3" variant="subtitle2" textAlign="center">Maximum of 300 characters</Typography>
                <StyledTextArea
                  placeholder="Junior developer looking for..."
                  fullWidth
                  maxlength="300"
                  style={{ width: '100%' }}
                />
                <ButtonUpdate size="medium" btnText="Save" sx={{ mt: '1rem', alignSelf: 'flex-end' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SecondaryContentContainer>
      <Typography component="h2" variant="h4" textAlign="center">About You</Typography>
      <SecondaryContentContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <MUIRichTextEditor
          label="Start typing..."
          value={initEditorContent}
          controls={textEditorControls}
          onChange={(data) => handleChange(data)}
        />
        <Box sx={{ alignSelf: 'end', mt: '2rem' }}>
          <ButtonOutlined btnText="Delete" sx={{ mr: '1rem' }} onClick={() => setInitEditorContent('')} />
          <ButtonContained btnText="Save" onClick={handleSave} />
        </Box>
      </SecondaryContentContainer>
    </MainContentContainer>
  );
};

export default CandidateProfilePage;
