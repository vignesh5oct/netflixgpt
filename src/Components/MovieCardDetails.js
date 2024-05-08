import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import useCastDetails from '../hooks/useCastDetails';
import MoreInfo from './MoreInfo';

const MovieCardDetails = () => {
    const { resId } = useParams();
    useMovieDetails(resId);
    useCastDetails(resId);

    const movie = useSelector(store => store?.movies?.movieDetail);
    

    if (!movie) return;

    const {original_title, overview, id} = movie;

    console.log(original_title,overview);


    return (
        <div className='-my-32'>
            <VideoTitle resId={id} title={original_title} overview={overview} />
            <VideoBackground  movieId={id}/>
            <MoreInfo />
        </div>
    )
}

export default MovieCardDetails
