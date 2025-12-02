import React, { useRef, useState } from "react";
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
    <div
      className="absolute top-[40%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-full max-w-md bg-black/80 p-8 rounded-sm shadow-lg text-white"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        {newuser ? "Sign up now" : "Sign In"}
      </h1>

      {/* Email Input */}
      <InputBox ref={email} type="email" placeholder="Email or phone number" />

      {/* Name Input */}
      {newuser && <InputBox type="text" placeholder="Enter your name" />}

      {/* Password Input */}
      <InputBox
        ref={password}
        type="password"
        placeholder={newuser ? "Reenter password" : "Enter password"}
      />
      {/*Error Message */}
      <p className="text-red-500 text-xl font-bold mt-2 mb-2">{errorMessage}</p>

      {/* Sign In Button */}
      <button
        onClick={handelButtonClick}
        className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
      >
        {newuser ? "Sign up now" : "Sign In"}
      </button>

      {/* Or Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-2 text-gray-400 text-sm">OR</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Sign in with code */}
      <button className="w-full bg-gray-700 hover:bg-gray-600 transition p-3 rounded font-semibold">
        Use a Sign-In Code
      </button>

      {/* Extra options */}
      <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-red-600" />
          <span>Remember me</span>
        </label>
        <p className="cursor-pointer hover:underline">Need help?</p>
      </div>

      {/* Sign up text */}
      <p className="mt-6 text-gray-400">
        New to Netflix?{" "}
        <span
          onClick={() => setNewuser(!newuser)}
          className="text-white cursor-pointer hover:underline"
        >
          {!newuser ? "Sign up now." : "Sign In"}
        </span>
      </p>

      {/* reCAPTCHA note */}
      <p className="mt-4 text-xs text-gray-500 leading-relaxed">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );
};

export default LoginForm;
