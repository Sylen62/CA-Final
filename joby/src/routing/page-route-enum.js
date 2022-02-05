import PageLayout from '../components/layouts/page-layout';

// no-auth
import HomePage from '../pages/home-page';
import JobPage from '../pages/job-page';
import JobPageJob from '../pages/job-page/job-page-job';
import CandidatePage from '../pages/candidate-page';
import CandidatePageCandidate from '../pages/candidate-page/candidate-page-candidate';
// import ErrorPage from '../pages/error-page';
// public-only
import SignInPage from '../pages/public-only/sign-in-page';
import SignUpPage from '../pages/public-only/sign-up-page';
// employee
// candidate
import CandidateProfilePage from '../pages/auth-only/candidate';
import EmployerProfilePage from '../pages/auth-only/employer';

export default {
  PageLayout,
  HomePage,
  JobPage,
  JobPageJob,
  CandidatePage,
  CandidatePageCandidate,
  SignInPage,
  SignUpPage,
  CandidateProfilePage,
  EmployerProfilePage,
};
