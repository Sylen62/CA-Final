import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const CandidateProtector = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={`${routes.SignInPage}?redirectTo=${pathname}`} />;
  }

  if (auth.user.role !== 'CANDIDATE') {
    return <Navigate to={routes.HomePage} />;
  }

  return children;
};

export default CandidateProtector;
