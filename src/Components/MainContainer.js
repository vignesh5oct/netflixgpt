import React from 'react'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import Slider from './Slider';

const MainContainer = () => {



    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!nowPlayingMovies) return;
    // console.log(nowPlayingMovies);
    const { original_title, id, overview } = nowPlayingMovies[0];
    


    return (

        <div>


            <Slider />

            {/* <VideoTitle title={original_title} description={overview} /> */}
           
           
           
            {/* <VideoBackground movieId={id} /> */}
        </div>
    )
}

export default MainContainer
