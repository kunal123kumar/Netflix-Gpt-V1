// MainContainer.js
import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Headers from "./Header.js";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  const topMovie = movies[0];
  const { id, title, overview } = topMovie;

  return (
    <div className=" relative w-screen h-screen">
      <Headers />
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
