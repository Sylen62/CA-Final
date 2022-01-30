import PageLayout from '../components/layouts/page-layout';

// no-auth
import HomePage from '../pages/home-page';
import JobPage from '../pages/job-page';
import CandidatePage from '../pages/candidate-page';
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
  CandidatePage,
  SignInPage,
  SignUpPage,
  CandidateProfilePage,
  EmployerProfilePage,
};
