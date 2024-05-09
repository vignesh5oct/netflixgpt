import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addSearchMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from '../utils/constants';

const useSearchMovie = (movie) => {
    const dispatch = useDispatch();

    const getMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "godzilla&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json();
        dispatch(addSearchMovie(json.results));
    };

    useEffect(() => {
        getMovies();
    }, []);

}

export default useSearchMovie;
