import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import useCastDetails from '../hooks/useCastDetails';
import MoreInfo from './MoreInfo';
import VideoCardBackground from './VideoCardBackground';
import MainShimmer from './ShimmerUI/MainShimmer';

const MovieCardDetails = () => {
    const { resId } = useParams();
    const movieInfo = useMovieDetails(resId);
    const castInfo = useCastDetails(resId);

    const movie = useSelector(store => store?.movies?.movieDetail);
    

    if (!movie) return;

    const {original_title, overview, id} = movie;

    console.log(original_title,overview);

    if(movieInfo && castInfo === null)
        return null

    return (
        <div className='-my-32'>
            <VideoTitle resId={id} title={original_title} overview={overview} />
            <VideoCardBackground  movieId={id}/>
            <MoreInfo />
        </div>
    )
}

export default MovieCardDetails
