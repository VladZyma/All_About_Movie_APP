import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './MoviesList.module.css';

import {genreActions, moviesActions} from "../../redux";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";


const MoviesList = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const {movies, page} = useSelector(state => state.moviesReducer);


    // let postersArr = movies.map(movie => movie.poster_path);

    let postersObj = movies.reduce((accum, movie) => {
        accum[movie.id] = movie;
        return accum;
    }, {});



    useEffect(() => {
        dispatch(moviesActions.getMovies({page: query.get('page')}));
    }, [query, dispatch]);

    useEffect(() => {
        dispatch(genreActions.getGenres());
    }, [dispatch]);


    function pageIncrement() {
        setQuery(value => ({page: +value.get('page') + 1}));
    }

    function pageDecrement() {
        setQuery(value => ({page: value.get('page') - 1}));
    }

    return (
        <div className={css.MoviesList}>
            <div className={css.CardRow}>
                <MoviesListCard posters={postersObj}/>
            </div>
            <div className={css.BtnRow}>
                <button disabled={page === 1} onClick={pageDecrement}>prev</button>
                <button onClick={pageIncrement}>nex</button>
            </div>
        </div>
    );

}

export {MoviesList}