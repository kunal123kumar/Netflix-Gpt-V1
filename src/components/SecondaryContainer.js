import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/LangauageConstant.js";
const SecondaryContainer = () => {
  const movie = useSelector((state) => state.movie);
  const currentLanguage = useSelector((state) => state.config.lang);
  return (
    <div className="bg-black">
      <div className="-mt-40  pl-10 relative z-20">
        <MovieList
          categeory={lang[currentLanguage]?.NowPlayingMovies || "Now Playing"}
          movie={movie.nowPlayingMovies}
          type="now_playing"
        />
        <MovieList
          categeory={lang[currentLanguage]?.PopularMovies || "Popular Movies"}
          movie={movie.popularMovies}
          type="popular"
        />
        <MovieList
          categeory={lang[currentLanguage]?.TopRatedmovies || "Top Rated"}
          movie={movie.topRatedMovies}
          type="top_rated"
        />
        <MovieList
          categeory={lang[currentLanguage]?.UpCommingMovies || "Upcoming Movies"}
          movie={movie.upComingMovies}
          type="upcoming"
        />
      </div>
    </div>
  );
};
export default SecondaryContainer;
