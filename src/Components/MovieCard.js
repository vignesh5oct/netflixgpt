import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ poster }) => {

  // console.log(poster);
  return (
    <div>
      <div className='w-[190px] p-2'>
        <img className='rounded-lg border-[1px] hover:-translate-y-1 hover:scale-100 duration-300' alt='poster' src={IMG_CDN + poster}></img>
      </div>
    </div>
  )
}

export default MovieCard;
