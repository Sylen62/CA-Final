import {
  PUBLIC_ONLY,
  // // AUTH,
  EMPLOYER,
  CANDIDATE,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'PageLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'jobs', pageName: 'JobPage' },
      { path: 'jobs/:id', pageName: 'JobPageJob' },
      { path: 'candidates', pageName: 'CandidatePage' },
      { path: 'candidates/:id', pageName: 'CandidatePageCandidate' },
      { path: 'sign-in', pageName: 'SignInPage', auth: PUBLIC_ONLY },
      { path: 'sign-up', pageName: 'SignUpPage', auth: PUBLIC_ONLY },
      { path: 'candidate/profile', pageName: 'CandidateProfilePage', auth: CANDIDATE },
      { path: 'employer/profile', pageName: 'EmployerProfilePage', auth: EMPLOYER },
      { path: '*', pageName: 'HomePage' },
    ],
  },
];

export default routeStructure;
