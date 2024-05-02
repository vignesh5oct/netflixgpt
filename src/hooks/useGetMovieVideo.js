import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";

const useGetMovieVideo = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const videoInfo = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", OPTIONS);
        const json = await videoInfo.json();
        // console.log(json.results);

        const filterTrailerInfo = json.results.filter(movie => movie.type === "Trailer");
        const trailerInfo = filterTrailerInfo.length ? filterTrailerInfo[0] : json.results[0];
        // console.log(trailerInfo);
        dispatch(addVideoTrailer(trailerInfo));
    }

    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useGetMovieVideo;