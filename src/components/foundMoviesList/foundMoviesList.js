import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";

const FoundMoviesList = ({query}) => {
    console.log(query);

    const dispatch = useDispatch();

    const {foundMovies} = useSelector(state => state.moviesReducer);
    console.log(foundMovies);

    // useEffect(() => {
    //     dispatch(moviesActions.findMovies({query: query}));
    //
    // }, [dispatch]);



    return (
        <div></div>
    );
}

export {FoundMoviesList}