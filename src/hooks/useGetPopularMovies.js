import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/moviesSlice";

const useGetPopularMovies = () => {

    const dispatch = useDispatch();


    async function  getPopularMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovie(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default useGetPopularMovies;