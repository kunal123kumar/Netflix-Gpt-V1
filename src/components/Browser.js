import React from "react";
import useNowPlayingMovies from "/src/hooks/useNowPlayingMovie.js";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "/src/hooks/usePopularMovies.js";
import useTopRatedMovies from "/src/hooks/useTopRatedMovies.js";
import useUpComingMovie from "/src/hooks/useUpComingMovie.js";
import Header from "./Header.js";
import GPTSearch from "./GPTSearch.js";
import { useSelector } from "react-redux";
import Infomation from "./Information.js";
const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovie();
  const showGptSearch = useSelector((state) => state.gpt.isGptSearchView);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Infomation />
    </div>
  );
};
export default Browser;
