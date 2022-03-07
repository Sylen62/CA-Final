import React from 'react';
import {
  PUBLIC_ONLY,
  EMPLOYER,
  CANDIDATE,
} from '../auth-types';

import PublicOnlyProtector from './public-only-protector';
import EmployerProtector from './employer-protector';
import CandidateProtector from './candidate-protector';

const protectPageEnum = {
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  [EMPLOYER]: (Page) => <EmployerProtector><Page /></EmployerProtector>,
  [CANDIDATE]: (Page) => <CandidateProtector><Page /></CandidateProtector>,
};

export default protectPageEnum;
