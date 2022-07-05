import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeUser } from "../redux/slices/userSlice";

import { useAuth } from "../hooks/use-auth";

export const Admin = () => {
const dispatch = useDispatch()

  const { isAuth, email } = useAuth();

  const location = useLocation();

  return isAuth ? (
    <div>
      <h2>Вы - админ!</h2>
      
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
