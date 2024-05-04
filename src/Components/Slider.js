import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import SliderCard from './SliderCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';


const Slider = () => {

    const { popularMovie } = useSelector(store => store?.movies);

    const screenWidth = window.innerWidth;

    const slideClick = useRef();
    if (!popularMovie) return;

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 80;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 80;
    }

    return (
        <div ref={slideClick} className='flex overflow-x-auto w-full px-16 py-4 scroll-smooth'>
            <HiChevronLeft onClick={() => { sliderLeft(slideClick.current) }} className='hidden md:block text-white text-[30px] absolute -mx-2 mt-[190px] cursor-pointer' />
            {popularMovie?.map((movie) => (
                
                <SliderCard key={movie.id} poster={movie.backdrop_path} title={movie.title} description={movie.overview} />
            ))}
            <HiChevronRight onClick={() => { sliderRight(slideClick.current) }} className='hidden md:block text-white text-[30px] absolute mx-4 mt-[190px] cursor-pointer right-0' />
        </div>
    )
}

export default Slider
