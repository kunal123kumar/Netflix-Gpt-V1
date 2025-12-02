import React, { useState } from "react";
import { Languages } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { setLang } from "../utils/configSlice.js";  

const LanguageSelect = () => {
  const [language, setLanguage] = useState("english");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value);
    setLanguage(event.target.value);
    dispatch(setLang(event.target.value));
  };

  return (
    <div className="px-0.5 py=0.5">
      <div className="relative">
        {/* Icon inside the box */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Languages className="w-5 h-5 text-gray-500" />
        </div>

        {/* Select box with left padding to make room for the icon */}
        <select
          value={language}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded appearance-none bg-black/100 text-white"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))  }
        </select>
      </div>
    </div>
  );
};

export default LanguageSelect;
