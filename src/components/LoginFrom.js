import { useRef, useState } from "react";
import InputBox from "./InputBox";
import CheckValidata from "../utils/Validata";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [newuser, setNewuser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();


  const handelButtonClick = () => {
    console.log(email);
    console.log(password);
    const Message = CheckValidata(email.current.value, password.current.value);
    setErrorMessage(Message);

    {
      /* Create account in web app */
    }

    if (Message) return;
    if (newuser) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/Browser");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/Browser");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

 return (
    <div className="w-full max-w-md bg-black/80 p-6 sm:p-8 rounded-sm text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Sign In</h1>

      <input
        type="email"
        placeholder="Email or phone number"
        className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      <input
        type="password"
        placeholder="Enter password"
        className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      <button className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold mb-4">
        Sign In
      </button>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-2 text-gray-400 text-sm">OR</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <button className="w-full bg-gray-700 hover:bg-gray-600 transition p-3 rounded font-semibold">
        Use a Sign-In Code
      </button>

      <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-red-600" />
          <span>Remember me</span>
        </label>
        <span className="cursor-pointer hover:underline">Need help?</span>
      </div>

      <p className="mt-6 text-gray-400">
        New to Netflix?{" "}
        <span className="text-white cursor-pointer hover:underline">
          Sign up now.
        </span>
      </p>

      <p className="mt-4 text-xs text-gray-500">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );

};

export default LoginForm;
