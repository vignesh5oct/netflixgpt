import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";

const useGetUpcomingMovies = () => {

    const dispatch = useDispatch();


    async function  getUpcomingMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', OPTIONS)


        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useGetUpcomingMovies;