import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ poster }) => {

  // console.log(poster);
  return (
    <div>
      <div className='w-56 p-2'>
        <img alt='poster' src={IMG_CDN + poster}></img>
      </div>
    </div>
  )
}

export default MovieCard;
