import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moveSlice";
import { API_OPTIONS } from "../utils/constant";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import lang from "../utils/LangauageConstant.js";

const MovieList = ({ movie, categeory, type }) => {
  const [page, setPage] = useState(1);
  const [autoScroll, setAutoScroll] = useState(false);
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.config.lang);

  const fetchMovies = async (pageNo) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${pageNo}`,
      API_OPTIONS
    );
    const json = await data.json();
    // choose reducer based on type
    if (type === "now_playing") dispatch(addNowPlayingMovies(json.results));
    // same pattern for popular, top_rated, upcoming
  };

  // infinite scroll
  useEffect(() => {
    if (!autoScroll) return;
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoScroll]);

  useEffect(() => {
    if (page > 1) fetchMovies(page);
  }, [page]);

  if (!movie || movie.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">Loading movies...</div>
    );
  }

  return (
    <div className="px-6 lg:px-12 py-6">
      <h1 className="text-xl lg:text-2xl font-bold text-white mb-4">
        {categeory}
      </h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide pb-4">
        {movie.map((m) => (
          <div key={m.id} className="min-w-[180px]">
            <MovieCard movieData={m} />
          </div>
        ))}

        {!autoScroll && (
          <Link to={`/movies/${type}`}>
            <button className="text-white bg-red-600 rounded-lg px-10 py-5">
              {lang[currentLanguage]?.View_More || "View More"}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MovieList;
