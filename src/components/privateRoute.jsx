/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const isLoggedIn = true;

  return isLoggedIn ? <Element {...rest} /> : <Navigate to="/" />;
};

export const PrivateRouteDashboard = (props) => <PrivateRoute {...props} />;
export const PrivateRouteMarketPlace = (props) => <PrivateRoute {...props} />;
