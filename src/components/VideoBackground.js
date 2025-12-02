import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const getTrailerUrl = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    const trailer =
      filterData?.length === 0 ? json?.results?.[0] : filterData?.[0];
    setTrailerKey(trailer?.key);
  };

  useEffect(() => {
    getTrailerUrl();
  }, [movieId]);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden">
      {trailerKey ? (
        <>
          {/* Re-render iframe whenever isMuted changes */}
          <iframe
            key={`${trailerKey}-${isMuted}`} // Re-render only when trailer OR mute state changes
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
              isMuted ? 1 : 0
            }&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerKey}&fs=1`}
            title="Movie Trailer"
            allow="autoplay; encrypted-media; fullscreen"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none"></div>
        </>
      ) : (
        <p className="text-white">Loading trailer...</p>
      )}

      {/* Mute Button */}
      <button
        onClick={() => {
          setIsMuted(!isMuted);
          console.log("Mute toggled");
        }}
        className="absolute bottom-5 right-5 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-full shadow-lg transition"
      >
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
};

export default VideoBackground;
