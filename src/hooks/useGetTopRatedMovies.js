import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie, addTopRatedMovies } from "../utils/moviesSlice";

const useGetTopRatedMovies = () => {

    const dispatch = useDispatch();


    async function  getTopRatedMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', OPTIONS)

        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useGetTopRatedMovies;