import React from 'react';
import {
  TabPanelUnstyled, TabsListUnstyled, TabsUnstyled, TabUnstyled,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SignUpCandidateForm from './sign-up-candidate-form';
import SignUpEmployerForm from './sign-up-employer-form';

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '8px',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'space-between',
}));

const Tab = styled(TabUnstyled)(({ theme }) => ({
  color: theme.palette.common.white,
  cursor: 'pointer',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  width: '100%',
  padding: '12px 16px',
  margin: '6px 6px',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '2px',
  outline: `2px solid ${theme.palette.common.white}`,
  outlineOffset: '2px',
  '&:hover': {
    color: theme.palette.secondary.main,
    borderRadius: '2px',
    outline: `2px solid ${theme.palette.secondary.main}`,
    outlineOffset: '2px',
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
    borderRadius: '2px',
    outline: `2px solid ${theme.palette.secondary.main}`,
    outlineOffset: '2px',
  },
}));

const SignUpTabContainer = ({
  handleResetForm,
  isSubmitting,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  handleEmailChange,
  handleEmailBlur,
  emailEndornment,
}) => (
  <TabsUnstyled defaultValue={0}>
    <TabsList>
      <Tab type="button" onClick={() => handleResetForm('CANDIDATE')}>Candidate</Tab>
      <Tab type="button" onClick={() => handleResetForm('EMPLOYER')}>Employer</Tab>
    </TabsList>
    <TabPanelUnstyled value={0}>
      <SignUpCandidateForm
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        touched={touched}
        errors={errors}
        handleEmailChange={handleEmailChange}
        handleEmailBlur={handleEmailBlur}
        emailEndornment={emailEndornment}
      />
    </TabPanelUnstyled>
    <TabPanelUnstyled value={1}>
      <SignUpEmployerForm
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        touched={touched}
        errors={errors}
        handleEmailChange={handleEmailChange}
        handleEmailBlur={handleEmailBlur}
        emailEndornment={emailEndornment}
      />
    </TabPanelUnstyled>
  </TabsUnstyled>
);

export default SignUpTabContainer;
