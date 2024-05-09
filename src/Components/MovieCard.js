import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4 pb-4 pt-5 max-w-xs transition duration-300 ease-in-out hover:scale-110'>
        <img className='border border-dotted rounded-lg' alt="Movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard;