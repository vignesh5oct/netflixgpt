import React from 'react'
import { useSelector } from 'react-redux';
import useGetMovieVideo from '../hooks/useGetMovieVideo';

const VideoBackground = ({ movieId }) => {
  const videoTrailer = useSelector((store) => store.movies?.videoTrailer);

  useGetMovieVideo(movieId);


  return (
    <div className=''>
      <iframe className='w-screen aspect-video'  
      src={"https://www.youtube.com/embed/" + videoTrailer?.key + "?autoplay=0&mute=1"} 
      title="YouTube video player"></iframe>
    </div>
  )
}

export default VideoBackground;
