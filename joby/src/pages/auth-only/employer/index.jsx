import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';
import { authSelector } from '../../../store/auth';
import MainContentContainer from '../../../components/container/main-content-container';
import SecondaryContentContainer from '../../../components/container/secondary-content-container';
import ImageContainer from '../../../components/container/image-container';
import Image from '../../../components/image';
import ButtonUpdate from '../../../components/button/button-update';
import FormTextField from '../../../components/text-field/form-text-field';
import ButtonOutlined from '../../../components/button/button-outlined';
import ButtonContained from '../../../components/button/button-contained';

const htmlData = '<h2>Lorem</h2><p></p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nisi sit, maiores commodi explicabo nobis perspiciatis id amet omnis culpa fugit a vitae, unde minima, nemo dolore consequuntur dignissimos? Iste fugit omnis nisi fuga nam asperiores reprehenderit, ratione voluptatum quod natus aut alias dicta ut reiciendis quae fugiat vel dolorum necessitatibus praesentium molestias. Sed quaerat laudantium, ab rerum cumque blanditiis similique voluptatem dicta veritatis esse at omnis nesciunt voluptate possimus, eum eligendi dolorem doloribus impedit sint. </p><p></p><h2>Similique </h2><ul><li>Sed quaerat laudantium.</li><li>Sapiente voluptatem!</li><li>Deserunt natus autem.</li></ul><p></p><p>Sapiente ullam ipsa provident quaerat, illo, alias earum sint cupiditate eius, recusandae commodi facilis odit fugiat qui ipsam nostrum officiis placeat assumenda velit perferendis voluptatem maxime reiciendis dicta nesciunt. Ipsum praesentium, minima ratione alias assumenda ullam eligendi, ea quisquam facere esse iusto debitis omnis autem eius in voluptatibus cumque! Dolor voluptates expedita recusandae ratione, suscipit vel! Sit magni blanditiis, sint ea facilis id beatae veritatis tenetur voluptatibus dolorum cumque autem repellat accusamus dicta, repellendus doloribus amet voluptatem perspiciatis nihil? Nulla, deleniti facere inventore, illum dicta facilis suscipit nostrum architecto enim ut laboriosam nam fugiat eaque consectetur aliquam assumenda cupiditate veniam soluta ab non sapiente voluptatem! Facere labore soluta voluptatum id ratione natus fugiat perspiciatis. Deserunt natus autem velit quae vitae ad corporis animi ut!</p>';

const EmployerProfilePage = () => {
  const { user } = useSelector(authSelector);
  const [image, setImage] = useState();
  const [editorContent, setEditorContent] = useState();
  const [initEditorContent, setInitEditorContent] = useState();
  const uploadInputRef = useRef(null);
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

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    // console.log(event.target.files[0]);
  };

  return (
    <MainContentContainer>
      <Typography component="h2" variant="h4" textAlign="center">Profile</Typography>
      <SecondaryContentContainer>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4.7} sx={{ display: { xs: 'flex', md: 'block', lg: 'block' }, alignItems: 'center', flexDirection: 'column' }}>
            <ImageContainer>
              <Image src={image || 'https://unsplash.it/500/400'} />
            </ImageContainer>
            <ButtonUpdate onClick={() => uploadInputRef.current.click()} size="large" btnText="Change image" fullWidth />
            <input ref={uploadInputRef} onChange={handleImageUpload} type="file" accept="image/*" hidden />
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2} sx={{ mt: { xs: '1rem', md: 0 } }}>
              <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FormTextField
                  name="oldPassword"
                  label="Old password"
                  fullWidth
                  size="medium"
                  sx={{ maxWidth: '400px' }}
                />
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
                <ButtonUpdate size="large" btnText="Update accoount" fullWidth />
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

export default EmployerProfilePage;
