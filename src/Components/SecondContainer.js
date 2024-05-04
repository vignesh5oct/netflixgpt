import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondContainer = () => {

  const movies = useSelector(store => store.movies);
  // const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies)


  return (
    movies.nowPlayingMovies &&
    (
      <div className=''>
        <div className='relative z-10'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
          <MovieList title={"Popular"} movies={movies.popularMovie} />
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondContainer
