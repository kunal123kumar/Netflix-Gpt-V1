import MovieCard from "./MovieCard";

const GPTList = ({ movie, categeory, type }) => {
  if (!movie || movie.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">Loading movies...</div>
    );
  }
   return (
    <div className="px-6 lg:px-12 py-6">
      <h1 className="text-xl lg:text-2xl font-bold text-white mb-6">
        {categeory}
      </h1>

      {/* Grid view instead of horizontal scroll */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movie.map((m) => (
          <MovieCard key={m.id} movieData={m} />
        ))}
      </div>
    </div>
  );
};
export default GPTList;