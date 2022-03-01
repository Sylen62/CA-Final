import React from 'react';
import { TextareaAutosize } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  marginTop: '1rem',
  minHeight: '67px',
  maxHeight: '317px',
  padding: '12px',
  overflow: 'auto !important',
  border: `1px solid ${theme.palette.common.white}`,
  '&:hover': {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  '&:focus-visible': {
    outline: 'none !important',
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '400px',
    alignSelf: 'center',
  },
}));

const CandidateDescriptionTextArea = ({ name, ...restProps }) => (
  <StyledTextArea
    name={name}
    placeholder="Developer looking for..."
    maxLength="300"
    style={{ width: '100%' }}
    {...restProps}
  />
);

export default CandidateDescriptionTextArea;
