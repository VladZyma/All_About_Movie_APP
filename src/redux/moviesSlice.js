import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


import {moviesService} from "../services";




const initialState = {
    movies: [],
    foundMovies: [],
    page: null,
    searchQuery: null,
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
            rejectWithValue(e.response.data?.status_message);
        }

    }
);

const findMovies = createAsyncThunk(
    'moviesSlice/findMovies',
    async ({query}, {rejectWithValue}) => {
        try {
            const {data:{results}} = await moviesService.findMovies(query);
            return results;
        } catch (e) {
            rejectWithValue(e.response.data?.errors);
            console.log(e);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        SetSearchQuery: (state, action) => {
            console.log(action.payload);
            state.searchQuery = action.payload;
        }
    },
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

            .addCase(findMovies.fulfilled, (state, action) => {
                state.foundMovies = action.payload;
            })
});

const {reducer: moviesReducer, actions: {SetSearchQuery}} = moviesSlice;
const moviesActions = {getMovies, findMovies, SetSearchQuery}

export {
    moviesReducer,
    moviesActions
}