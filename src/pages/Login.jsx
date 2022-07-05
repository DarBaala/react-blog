import React from "react";
import Header from "../components/Header";
import LoginAuto from "../components/LoginAuto";
import { useAuth } from "../hooks/use-auth";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeUser } from "../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return (
    <>
      <Header />
      {isAuth ? (
        <button onClick={() => dispatch(removeUser())}>Выйти {email}</button>
      ) : (
        <LoginAuto />
      )}
    </>
  );
};

export default Login;
