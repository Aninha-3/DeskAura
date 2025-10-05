import React, { useContext, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth?.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};
