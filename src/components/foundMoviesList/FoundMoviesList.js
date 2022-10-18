import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import {FoundMoviesListCard} from "../foundMoviesListCard/FoundMoviesListCard";
import {moviesActions} from "../../redux";

const FoundMoviesList = () => {

    const dispatch = useDispatch();
    const {searchValue} = useSelector(state => state.moviesReducer);

    const {foundMovies} = useSelector(state => state.moviesReducer);

    const [newPage, setNewPage] = useState(1);


    useEffect(() => {
        console.log('work', newPage)
        dispatch(moviesActions.findMovies({value:searchValue, page: newPage.toString()}));
    }, [newPage, dispatch, searchValue]);



    return (
        <div>
            <div>
                {foundMovies.map(movie => <FoundMoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button disabled={newPage === 1}  onClick={() => setNewPage(newPage - 1)}>prev</button>
                <button onClick={() => setNewPage(newPage + 1)}>next</button>
            </div>

        </div>
    );
}

export {FoundMoviesList}