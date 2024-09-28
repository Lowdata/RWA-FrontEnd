import  { useEffect } from "react";
import { useSelector } from "react-redux";

const AuthDebug = () => {
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Auth state:", authState);
  }, [authState]);

  return null; 
};

export default AuthDebug;
