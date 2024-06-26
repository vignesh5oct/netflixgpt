import React from 'react'
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCastDetails from '../hooks/useCastDetails';

const VideoTitle = ({ resId, title, overview }) => {

  const castInfo = useCastDetails(resId);

  // console.log(resId);
  if (castInfo === null)
    return null;

  return (
    <div className='mt-28 md:mt-0 w-full aspect-video pt-[14%] px-6 md:px-12 absolute text-white md:bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-5xl font-blod md:w-1/3'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-m w-1/4'>{overview}</p>
      <div className='my-2 md:my-0'>
        <button className='hidden md:inline-block bg-white text-black p-0.5 md:p-2 px-2 md:px-10 text-lg  rounded-lg hover:bg-opacity-80'><div className='flex'><FaPlay className='mt-[5px] mr-[5px]' />Play</div></button>
        <Link to={"/movie/" + resId} >
          <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-8 text-lg bg-opacity-50 rounded-lg'><div className='flex'><FaInfoCircle className='mt-[5px] mr-[5px]' />More Info</div></button>
        </Link>
      </div>
    </div >
  )
}

export default VideoTitle;