import LanguageSelect from "./LanguageSlect";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router";
import Profile from "./Profile";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../utils/userSlice";
import { toggleGptSearchview } from "../utils/gptSlice";
import { useSelector } from "react-redux";
import lang from "../utils/LangauageConstant.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isGptSearchView = useSelector((state) => state.gpt.isGptSearchView);
  const currentLanguage = useSelector((state) => state.config.lang);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(setUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(clearUser());
        navigate("/");
      }
    });
  }, []);
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchview());
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-2 lg:px-40 py-1 bg-black text-white shadow-md">
      {/* Logo */}
      <div>
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>

      {/* Language and Sign In */}
      <div className="flex items-center space-x-4">
        <LanguageSelect />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-500 text-white text-sml px-2 py-2   rounded hover:bg-red-700 transition"
        >
          {isGptSearchView
            ? lang[currentLanguage].Home
            : lang[currentLanguage].GPT_Search}
        </button>
        <button
          onClick={logout}
          className="bg-red-500 text-white text-sml px-2 py-2   rounded hover:bg-red-700 transition"
        >
          {lang[currentLanguage].Logout}
        </button>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
