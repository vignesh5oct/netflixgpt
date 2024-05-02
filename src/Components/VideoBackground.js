import React from 'react'
import { useSelector } from 'react-redux';
import useGetMovieVideo from '../hooks/useGetMovieVideo';

const VideoBackground = ({ movieId }) => {
  const videoTrailer = useSelector((store) => store.movies?.videoTrailer);

  useGetMovieVideo(movieId);


  return (
    <div className='-mt-14'>
      <iframe className='w-screen aspect-video'  
      src={"https://www.youtube.com/embed/" + videoTrailer?.key + "?autoplay=1&mute=1&rel=0" } 
      title="YouTube video player"></iframe>
    </div>
  )
}

export default VideoBackground;
