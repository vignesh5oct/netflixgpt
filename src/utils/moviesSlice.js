import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        trailerCardVideo: null,
        movieDetail: null,
        searchMovie: null,
        castDetail:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.nowUpcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.nowTopRatedMovies = action.payload;
        },
        addTVSeries: (state, action) => {
            state.nowTVSeries = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTrailerCardVideo: (state, action) => {
            state.trailerCardVideo = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
        addMovieDetail: (state, action) => {
            state.movieDetail = action.payload;
        },
        addCast: (state, action) => {
            state.castDetail = action.payload;
        },
        addSearchMovie: (state, action) => {
            state.searchMovie = action.payload;
        }

    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopRatedMovies, addTVSeries, addTrailer, addMovieDetail, addCast, addSearchMovie, addTrailerCardVideo } = moviesSlice.actions;

export default moviesSlice.reducer;