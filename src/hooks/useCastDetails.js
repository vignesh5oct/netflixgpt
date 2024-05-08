import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addCast, addMovieDetail } from "../utils/moviesSlice";



const useCastDetails = (movieId) => {
    const dispatch = useDispatch();
    const getCastDetails = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/credits?language=en-US", API_OPTIONS);

        const json = await data.json();

        console.log(json);
        dispatch(addCast(json));
    }

    useEffect(() => {
        getCastDetails();
    }, []);


}

export default useCastDetails
