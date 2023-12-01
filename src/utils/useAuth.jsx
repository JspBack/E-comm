import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Navigate from "react-router-dom";

const useAuth = () => {
  const { isAuthenticated } = useStateContext();
  const checkAuth = () => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace={true} />;
    }
  };

  return { checkAuth };
};

export default useAuth;
