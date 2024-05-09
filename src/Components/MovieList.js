import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {

  return (
    <div className=" px-6 ">
      <h1 className="text-lg font-semibold md:font-normal md:text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">

          {
            movies?.map(movie =>
              <Link key={movie.id} to={"/movie/" + movie.id} >
                <MovieCard posterPath={movie?.poster_path} />
              </Link>)
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
