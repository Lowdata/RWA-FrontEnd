/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = ({ element: Element, ...rest }) => {
  const admin = useSelector((state) => state.auth.role);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const isAdmin = () => {
    if (admin !== "admin") return false;
    return true;
  };

  return isAdmin && isLoggedIn ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/not-authorised" />
  );
};

export const PrivateRouteAdmin = (props) => <Private {...props} />;
