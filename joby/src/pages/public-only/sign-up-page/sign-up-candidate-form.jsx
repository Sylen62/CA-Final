import React from 'react';
import { Grid, InputAdornment } from '@mui/material';
import FormTextField from '../../../components/text-field/form-text-field';

const SignUpCandidateForm = ({
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
  <Grid container spacing={2} sx={{ mb: 2 }}>
    <Grid item xs={12} sm={6}>
      <FormTextField
        name="name"
        label="Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
        disabled={isSubmitting}
        fullWidth
        variant="outlined"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <FormTextField
        name="surname"
        label="Surname"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.surname}
        error={touched.surname && Boolean(errors.surname)}
        helperText={touched.surname && errors.surname}
        disabled={isSubmitting}
        fullWidth
        variant="outlined"
      />
    </Grid>
    <Grid item xs={12}>
      <FormTextField
        name="email"
        label="Email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        value={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        disabled={isSubmitting}
        fullWidth
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {emailEndornment}
            </InputAdornment>
          ),
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <FormTextField
        name="password"
        label="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        disabled={isSubmitting}
        fullWidth
        variant="outlined"
        type="password"
      />
    </Grid>
    <Grid item xs={12}>
      <FormTextField
        name="passwordConfirmation"
        label="Repeat password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.passwordConfirmation}
        error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
        helperText={touched.passwordConfirmation && errors.passwordConfirmation}
        disabled={isSubmitting}
        fullWidth
        variant="outlined"
        type="password"
      />
    </Grid>
  </Grid>
);

export default SignUpCandidateForm;
