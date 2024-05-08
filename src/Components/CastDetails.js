import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const CardDetails = ({name, posterPath }) => {
  if (!posterPath) return null;
  // console.log(posterPath)
  return (
    <div className='p-2 w-'>
      <h1 className='text-xl'>{name}</h1>
      <img className='' alt="Movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default CardDetails;