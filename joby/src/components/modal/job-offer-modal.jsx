import React, { useEffect, useState } from 'react';
import {
  Modal, Typography, Box, Container, Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {
  convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';

import FormTextField from '../text-field/form-text-field';
import ButtonContained from '../button/button-contained';
import ButtonOutlined from '../button/button-outlined';

const StyledModalContent = styled(Container)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  boxShadow: 24,
  padding: 10,
  backgroundColor: theme.palette.primary.main,
}));

const htmlData = '<h2>Lorem</h2><p></p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nisi sit, maiores commodi explicabo nobis perspiciatis id amet omnis culpa fugit a vitae, unde minima, nemo dolore consequuntur dignissimos? Iste fugit omnis nisi fuga nam asperiores reprehenderit, ratione voluptatum quod natus aut alias dicta ut reiciendis quae fugiat vel dolorum necessitatibus praesentium molestias. Sed quaerat laudantium, ab rerum cumque blanditiis similique voluptatem dicta veritatis esse at omnis nesciunt voluptate possimus, eum eligendi dolorem doloribus impedit sint. </p><p></p><h2>Similique </h2><ul><li>Sed quaerat laudantium.</li><li>Sapiente voluptatem!</li><li>Deserunt natus autem.</li></ul><p></p>';

// eslint-disable-next-line max-len
/* <p>Sapiente ullam ipsa provident quaerat, illo, alias earum sint cupiditate eius, recusandae commodi facilis odit fugiat qui ipsam nostrum officiis placeat assumenda velit perferendis voluptatem maxime reiciendis dicta nesciunt. Ipsum praesentium, minima ratione alias assumenda ullam eligendi, ea quisquam facere esse iusto debitis omnis autem eius in voluptatibus cumque! Dolor voluptates expedita recusandae ratione, suscipit vel! Sit magni blanditiis, sint ea facilis id beatae veritatis tenetur voluptatibus dolorum cumque autem repellat accusamus dicta, repellendus doloribus amet voluptatem perspiciatis nihil? Nulla, deleniti facere inventore, illum dicta facilis suscipit nostrum architecto enim ut laboriosam nam fugiat eaque consectetur aliquam assumenda cupiditate veniam soluta ab non sapiente voluptatem! Facere labore soluta voluptatum id ratione natus fugiat perspiciatis. Deserunt natus autem velit quae vitae ad corporis animi ut!</p>
*/

const JobOfferModal = ({ open, handleOpenModal }) => {
  const [value, setValue] = React.useState(null);
  const [editorContent, setEditorContent] = useState();
  const [initEditorContent, setInitEditorContent] = useState();
  const textEditorControls = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'undo', 'redo', 'numberList', 'bulletList', 'clear'];

  const handleSave = () => {
    handleOpenModal(false);
    console.log(editorContent);
    console.log('saving');
  };

  useEffect(() => {
    const data = convertFromHTML(htmlData);
    const state = ContentState.createFromBlockArray(data.contentBlocks, data.entityMap);
    setInitEditorContent(JSON.stringify(convertToRaw(state)));
  }, []);

  const handleChange = (data) => {
    setEditorContent(convertToHTML(data.getCurrentContent()));
  };

  return (
    <Modal
      open={open}
      onClose={() => handleOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        maxHeight: '800px',
        overflow: 'auto',
        my: '7vh',
        py: '7vh',
      }}
    >
      <StyledModalContent maxWidth="lg">
        <Typography textAlign="center" id="modal-modal-title" variant="h5" component="h2">
          Create / Edit Offer
        </Typography>
        <Box id="modal-modal-description" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormTextField
                name="offerName"
                label="Offer Name"
                placeholder="Junior web developer"
                fullWidth
                size="medium"
              />
              <FormTextField
                name="salaryFrom"
                label="Salary From"
                type="number"
                fullWidth
                size="medium"
                sx={{ mt: '1rem' }}
              />
              <FormTextField
                name="salaryTo"
                label="Salary To"
                type="number"
                fullWidth
                size="medium"
                sx={{ mt: '1rem' }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: { xs: '1rem', md: 0 } }}>
              <FormTextField
                name="salaryType"
                label="Salary Type"
                placeholder="Net / Gross"
                fullWidth
                size="medium"
              />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  name="activeFrom"
                  label="Active From"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <FormTextField sx={{ mt: '1rem' }} fullWidth {...params} />}
                  InputAdornmentProps={{
                    sx: {
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                  }}
                  PaperProps={{
                    sx: {
                      backgroundColor: 'black',
                      color: 'white',
                      '& .MuiPickersDay-root': {
                        backgroundColor: 'green',
                      },
                      '& .MuiTypography-root': {
                        color: 'white',
                      },
                    },
                  }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  name="activeUntill"
                  label="Active Untill"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <FormTextField sx={{ mt: '1rem' }} fullWidth {...params} />}
                  InputAdornmentProps={{
                    sx: {
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid item sx={{ mt: '1rem' }}>
            <MUIRichTextEditor
              label="Start typing..."
              value={initEditorContent}
              controls={textEditorControls}
              onChange={(data) => handleChange(data)}
            />
          </Grid>
          {/* <FormTextField
            name="offerName"
            label="Offer Name"
            fullWidth
            size="medium"
          />
          <FormTextField
            name="offerName"
            label="Offer Name"
            fullWidth
            size="medium"
            sx={{ mt: '1rem' }}
          /> */}
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'flex-end', gap: '1rem', mt: '1rem',
        }}
        >
          <ButtonOutlined onClick={() => handleOpenModal(false)} btnText="close" />
          <ButtonContained onClick={handleSave} btnText="Save" />
        </Box>
      </StyledModalContent>
    </Modal>
  );
};

export default JobOfferModal;
