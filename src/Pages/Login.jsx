import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { checkValidation } from "../utils/Validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(false);

  const SubmitHandler = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (!message) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-3/12 absolute p-12 m-12 bg-black/85 mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50"
      >
        <h1 className=" font-bold text-3xl py-4">Sign In</h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full border border-gray-600 rounded-l "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full border border-gray-600 rounded-l "
        />
        <p className="text-red-500 ">{errorMessage}</p>
        <button
          onClick={SubmitHandler}
          className="p-6 my-6 bg-red-700 w-full rounded-lg cursor-pointer "
        >
          Sign In
        </button>
        <p className="py-4">
          New to Netflix? <Link to="/signup">Sign up now.</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
