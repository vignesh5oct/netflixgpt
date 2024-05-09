import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import useMovieCardTrailer from "../hooks/useMovieCardTrailer";
import VideoBackgroundShimmer from "./ShimmerUI/VideoBackgroundShimmer";

const VideoCardBackground = ({ movieId }) => {

    const trailerInfo = useMovieCardTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerCardVideo);
    console.log(trailerVideo && true);


    const getWatchData = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId, API_OPTIONS);
        const json = await data.json();
    };

    useEffect(() => {
        !trailerInfo && getWatchData();
    })
    if (trailerInfo === null)
        return null;
    return (
        <div>
            <iframe
                className="w-full aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoCardBackground;
