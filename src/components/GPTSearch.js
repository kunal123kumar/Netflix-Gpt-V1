import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GPTSearch = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        {/* Background Image */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Search Bar (centered in hero) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <GPTSearchBar />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-10 absolute top-1/2 w-full">
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
