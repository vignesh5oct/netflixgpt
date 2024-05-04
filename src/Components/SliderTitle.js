import React from 'react'
import { useSelector } from 'react-redux';

const SliderTitle = (title, description) => {


    // const { popularMovie } = useSelector(store => store?.movies);

    return (
        <div>
            {

            }



            <div className='absolute'>
                <h1 className='text-5xl font-bold'>{title}</h1>
                <p className='py-6 text-lg w-1/4'>{description}</p>
                <div>
                    <button className='bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition-colors '> ▷ Play</button>
                    <button className='bg-gray-800  text-white px-6 py-3 rounded-md m-2 hover:opacity-80'> ⓘ More Info</button>
                </div>
            </div>
        </div>
    )
}

export default SliderTitle
