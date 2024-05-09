import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const GptMovieSuggestion = () => {
  const { searchMovie } = useSelector((store) => store?.movies);

  if (!searchMovie) return null;
  console.log(searchMovie)

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">


      <h1 className="text-2xl pb-4 ">Top Results</h1>
      <div className="flex flex-wrap py-2">
        {searchMovie?.map((movie, index) => (
          <div>
            <Link key={movie.id} to={"/movie/" + movie.id} >
              <span className=""><MovieCard posterPath={movie.poster_path} /></span>
            </Link>
          </div>
        ))}
      </div>


    </div>
  );
};

export default GptMovieSuggestion;
