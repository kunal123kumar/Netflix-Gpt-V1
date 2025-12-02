import { Cpu } from "lucide-react";
import lang from "../utils/LangauageConstant.js";
import { useRef } from "react";
import { useSelector } from "react-redux";
import openai from "../utils/openai.js";
import { API_OPTIONS } from "../utils/constant.js";
import { addGptSearchResults } from "../utils/gptSlice.js";
import { useDispatch } from "react-redux";

const GPTSearchBar = () => {
  const currentLang = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMBD = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=+" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    return json.results;
  };
  const handelGPTSearchClick = async () => {
    console.log("Search Text: ", searchText.current.value);

    const GPTQuery =
      "Act as a Movies Recommendation system and suggest me some movies related to " +
      searchText.current.value +
      "only give  me name of the movies with comma separated  add description of the movies like the example  result is example result is : Inception, The Dark Knight, Interstellar, The Matrix, Fight Club ";
    // const GPTQuery ="Find me some movies related to " + searchText.current.value + " on Netflix";
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o",
      messages: [
        {
          role: "user",
          content: GPTQuery,
        },
      ],
      max_tokens: 1000,
    });
    console.log(completion.choices[0].message.content);
    // make array of movies from the response
    const GPTList = completion.choices[0].message.content.split(",");
    console.log(GPTList);

    // for each movie in the array search it on TMBD and get the details
    const data = GPTList.map(async (movie) => searchMovieTMBD(movie));
    // wait for all the promises to resolvec

    const tmbdResults = await Promise.all(data);
    console.log("TMBD Results: ", tmbdResults);
    // dispatch the results to the store
    dispatch(
      addGptSearchResults({ moviename: GPTList, tmbdResults: tmbdResults })
    );
  };
  return (
    <div className="mt-20 w-full px-4 justify-center flex">
      <form className="w-1/2" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <input
            ref={searchText}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 
                       focus:ring-blue-500 focus:border-blue-500 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={lang[currentLang].GPT_Placeholder}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                       focus:ring-4 focus:outline-none focus:ring-blue-300 
                       font-medium rounded-lg text-sm px-6 py-2 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handelGPTSearchClick}
          >
            {lang[currentLang].Search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
