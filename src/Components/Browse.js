import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import useGetPopularMovies from '../hooks/useGetPopularMovies'
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies'
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies'


const Browse = () => {

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  return (

    <div>
      <Header />
      <div>
        <MainContainer />
        <SecondContainer />
      </div>
    </div>


  )
}

export default Browse
