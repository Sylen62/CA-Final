import React, { useState, useRef } from 'react';
import {
  Modal, Typography, Box, Grid, Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
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
  boxShadow: 24,
  padding: 10,
  backgroundColor: theme.palette.primary.main,
}));

const SendCvModal = ({ open, handleOpenModal }) => {
  const [file, setFile] = useState('');
  const uploadInputRef = useRef(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0].name);
  };

  const handleSendCV = () => {
    handleOpenModal(false);
  };
  return (
    <Modal
      open={open}
      onClose={() => handleOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModalContent maxWidth="sm">
        <Typography textAlign="center" id="modal-modal-title" variant="h5" component="h2">
          Send your CV
        </Typography>
        <Box id="modal-modal-description" sx={{ mt: 2 }}>
          <input
            ref={uploadInputRef}
            style={{ display: 'none' }}
            type="file"
            onChange={onFileChange}
            accept="application/pdf"
          />
          <FormTextField
            name="file"
            label="Upload your CV (only .pdf files)"
            fullWidth
            size="medium"
            value={file}
            onClick={() => uploadInputRef.current.click()}
          />
          <FormTextField
            name="name"
            label="Name"
            fullWidth
            size="medium"
            sx={{ mt: '1rem' }}
          />
          <FormTextField
            name="surname"
            label="Surname"
            fullWidth
            size="medium"
            sx={{ mt: '1rem' }}
          />
          <FormTextField
            name="email"
            label="Email"
            fullWidth
            size="medium"
            sx={{ mt: '1rem' }}
          />
          <Grid container spacing={2} sx={{ mt: '1rem', display: 'flex' }}>
            <Grid item xs={6}>
              <ButtonOutlined onClick={() => handleOpenModal(false)} btnText="Close" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <ButtonContained onClick={handleSendCV} btnText="Send" fullWidth />
            </Grid>
          </Grid>
        </Box>
      </StyledModalContent>
    </Modal>
  );
};

export default SendCvModal;
