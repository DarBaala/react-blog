import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";
import FormAuth from "./FormAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();

  const history = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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

  return (
    <div>
      <FormAuth title="register" handleClick={handleRegister} />
    </div>
  );
};

export default SignUp;
