import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        videoTrailer: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovie: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addVideoTrailer: (state, action) => {
            state.videoTrailer = action.payload;
        },
        addPopularMovie: (state, action) => {
            state.popularMovie = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovie = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovie = action.payload;
        }
    },
});


export const { addNowPlayingMovies, addVideoTrailer, addPopularMovie, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

