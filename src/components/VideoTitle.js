// ViedoTitle.js
import React from "react";
import { Info, Play } from "lucide-react";
import { useSelector } from "react-redux";
import lang from "../utils/LangauageConstant.js";

const ViedoTitle = ({ title, overview }) => {
  const currentLanguage = useSelector((state) => state.config.lang);
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 lg:px-20 bg-gradient-to-r from-black/80 via-black/40 to-transparent text-white">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
        {title}
      </h1>

      {/* Overview */}
      <p className="text-sm md:text-base lg:text-lg max-w-xl mb-6 text-gray-200 drop-shadow-lg">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button onClick ={() => console.log("Play")} className="bg-white text-black font-semibold px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 shadow-lg">
          <Play /> {lang[currentLanguage]?.Play || "Play"}
        </button>
        <button onClick={() => console.log("More Info")} className="bg-gray-800/70 text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-2 shadow-lg">
          <Info /> {lang[currentLanguage]?.MoreInfo || "More Info"}
        </button>
        
      </div>
    </div>
  );
};

export default ViedoTitle;
