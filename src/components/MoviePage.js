import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";
import { API_OPTIONS } from "../utils/constant";

const MoviePage = () => {
  const { type } = useParams(); // now_playing, popular, etc.
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2); // start from page 2
  const [loading, setLoading] = useState(false);
  const [showAdult, setShowAdult] = useState(true); // filter toggle

  const fetchMovies = async (pageNo) => {
    setLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${pageNo}`,
      API_OPTIONS
    );
    const data = await res.json();
    setMovies((prev) => [...prev, ...data.results]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // filter logic
  // filter logic
const filteredMovies = movies.filter((movie) =>
  showAdult ? movie.adult : !movie.adult
);

return (
  <div className="p-6 bg-black text-white min-h-screen">
    {/* Header */}
    <div className="flex flex-row items-center justify-between mb-6">
      <h1 className="text-2xl font-bold capitalize">
        {type} Movies
      </h1>

      <button
        onClick={() => setShowAdult((prev) => !prev)}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
      >
        {showAdult ? "Show Unadult" : "Show Adult"}
      </button>
    </div>

    {/* Movies Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movieData={movie} />
      ))}
    </div>

    {loading && <p className="text-center mt-4">Loading...</p>}
  </div>
);

};

export default MoviePage;
