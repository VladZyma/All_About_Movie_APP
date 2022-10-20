import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import css from './FoundMoviesList.module.css'

import {FoundMoviesListCard, Loading} from "../../components";
import {moviesActions} from "../../redux";

const FoundMoviesList = () => {

    const dispatch = useDispatch();

    const {foundMovies,searchValue, loading} = useSelector(state => state.moviesReducer);

    const [newPage, setNewPage] = useState(1);


    useEffect(() => {
        dispatch(moviesActions.findMovies({value:searchValue, page: newPage.toString()}));
    }, [newPage, dispatch, searchValue]);



    return (
        <div className={css.MoviesList}>
            {loading && <Loading/>}
            <div className={css.CardRow}>
                 <FoundMoviesListCard movies={foundMovies}/>
            </div>
            { foundMovies?.length > 0 &&
            <div className={css.BtnRow}>
                <button className={css.PrevBtn} disabled={newPage === 1}  onClick={() => setNewPage(newPage - 1)}></button>
                <button className={css.NextBtn} disabled={newPage > 500} onClick={() => setNewPage(newPage + 1)}></button>
            </div> }

        </div>
    );
}

export {FoundMoviesList}