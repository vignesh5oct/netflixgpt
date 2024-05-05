import React from 'react'
import { IMG_BD_CDN } from '../utils/constants'

const SliderCard = ({ poster, title, description }) => {


    return (
        <>
            <img className='min-w-full scrollbar-hide md:h-[370px] object-cover object-left-top m-6 rounded-md scrollbar-hide hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out cursor-pointer' alt='sliderlog' src={IMG_BD_CDN + poster}></img>
        </>

    )
}

export default SliderCard
