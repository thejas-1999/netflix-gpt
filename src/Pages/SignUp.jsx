import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { checkValidation } from "../utils/Validate";

const SignUp = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setErrorMessage(message);
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
        <h1 className=" font-bold text-3xl py-4">Sign Up</h1>
        <input
          ref={name}
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full border border-gray-600 rounded-l "
        />
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
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-6 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={submitHandler}
        >
          Sign Up
        </button>
        <p className="py-4">
          Already have a account?<Link to="/"> Sign in now.</Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
