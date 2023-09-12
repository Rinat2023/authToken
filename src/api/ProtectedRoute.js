import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
  isAllowed,
  children,
  redirectPath = '/landing',
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
