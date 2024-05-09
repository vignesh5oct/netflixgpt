import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovie } from "../utils/moviesSlice";


const GptSearchBar = () => {

  const dispatch = useDispatch();
  const languageKey = useSelector(store => store.config.language);
  const searchText = useRef(null);

  const searchMovieTMDB = async () => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + searchText.current.value + "&include_adult=false&language=en&page=1", API_OPTIONS)
    const json = await data.json();
    dispatch(addSearchMovie(json.results));
  }

  return (
    <div className="sm:w-[50%] md:pt-[5%] mb-3 w-[90%] mx-[auto]">
      <form className="relative mb-4 flex w-full flex-wrap items-stretch" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out"
          placeholder={language[languageKey]?.gptSearchplaceholder}
        />
        <button className=" relative z-[2] text-white rounded-r border-2 border-primary px-6 py-2 uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5" onClick={searchMovieTMDB}>
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
