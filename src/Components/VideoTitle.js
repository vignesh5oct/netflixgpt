import React from 'react'

const VideoTitle = ({ title, description }) => {


  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{description}</p>
      <div>
        <button className='bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition-colors '> ▷ Play</button>
        <button className='bg-gray-800  text-white px-6 py-3 rounded-md m-2 hover:opacity-80'> ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
