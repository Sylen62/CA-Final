import React from 'react';
import {
  PUBLIC_ONLY,
  // AUTH,
  EMPLOYER,
  CANDIDATE,
} from '../auth-types';

import PublicOnlyProtector from './public-only-protector';
// import AuthProtector from './auth-protector';
import EmployerProtector from './employer-protector';
import CandidateProtector from './candidate-protector';

const protectPageEnum = {
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  // [AUTH]: (Page) => <AuthProtector><Page /></AuthProtector>,
  [EMPLOYER]: (Page) => <EmployerProtector><Page /></EmployerProtector>,
  [CANDIDATE]: (Page) => <CandidateProtector><Page /></CandidateProtector>,
};

export default protectPageEnum;
