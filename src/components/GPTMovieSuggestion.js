import React from "react";
import { useSelector } from "react-redux";
import GPTList from "./GPTList";

const GPTMovieSuggestion = () => {
  const gpt = useSelector((state) => state.gpt);
  const { moviename, tmbdResults } = gpt;
  if (!moviename) return null;

  return (
    <div className=" text-white bg-black w-full ">
      <div>
        {moviename.map((name, index) => (
          <GPTList 
            key={name}
            categeory={name} // category name (e.g., "Blue Is the Warmest Color")
            movie={tmbdResults[index]} // actual array of movie objects
            type={name} // or whatever type fits your case
          />
        ))}
      </div>
    </div>
  );
};
export default GPTMovieSuggestion;
