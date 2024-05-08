import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  // console.log(posterPath)
  return (
    <div className='w-36 md:w-48 pr-0 hover:-translate-y-0.5'>
        <img className='pr-4' alt="Movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard;