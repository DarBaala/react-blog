import FormAuth from "./FormAuth";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setUser } from "../redux/slices/userSlice";

const LoginAuto = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        history("/");
      })
      .catch(console.error);
  };
  return <FormAuth title="sign in" handleClick={handleLogin} />;
};

export default LoginAuto;
