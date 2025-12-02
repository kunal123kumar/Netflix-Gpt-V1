import { IMG_BASE_URL } from "../utils/constant";

export const MovieCard = ({ movieData }) => {
  const { poster_path, title } = movieData;
  return (
    
      <div >
        <img className="w-44" src={IMG_BASE_URL + poster_path} alt={title} />
      </div>
   
  );
};
export default MovieCard;
