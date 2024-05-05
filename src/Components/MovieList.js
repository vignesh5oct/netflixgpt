import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies }) => {


   return (
      <div className="p-6">
         <h1 className="text-white text-3xl m-1">{title}</h1>
         <div className="flex overflow-x-auto  ">

            <div className="flex">
               {/* <MovieCard poster={movies[0].poster_path} /> */}

               {movies?.map((movie) => (
                  <Link><MovieCard key={movie.id} poster={movie.poster_path} /></Link>

               ))}
            </div>


         </div>

      </div>
   )
}

export default MovieList
