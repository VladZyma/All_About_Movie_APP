import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


import {moviesService} from "../services";




const initialState = {
    movies: [],
    page: null,
    loading: false,
    error: null,
}

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {

        try {
            const {data} = await moviesService.getAllMovies(page);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data.status_message);
        }

    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.loading = false;
            })
            .addCase(getMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: moviesReducer, actions: {}} = moviesSlice;
const moviesActions = {getMovies}

export {
    moviesReducer,
    moviesActions
}