import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import MoreInfo from './MoreInfo';
import VideoCardBackground from './VideoCardBackground';

const MovieCardDetails = () => {
    const { resId } = useParams();
    
    const movie = useSelector(store => store?.movies?.movieDetail);
    

    if (!movie) return;

    const {original_title, overview, id} = movie;

    console.log(original_title,overview);

    
    return (
        <div className='-my-32'>
            <VideoTitle resId={id} title={original_title} overview={overview} />
            <VideoCardBackground  movieId={id}/>
            <MoreInfo />
        </div>
    )
}

export default MovieCardDetails
