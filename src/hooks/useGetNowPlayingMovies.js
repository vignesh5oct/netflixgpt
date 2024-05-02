import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { OPTIONS } from '../utils/constants';

const useGetNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS);
        const json = await movies.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

}

export default useGetNowPlayingMovies;
