import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {MovieInfo} from "../../components";

const MovieInfoPage = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genresReducer);
    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});
    console.log(genres);
    console.log('genresObj',genresObj);


    return (

        <div>
            {genresObj && <MovieInfo genre={genresObj}/>}
        </div>

    );
}
export {MovieInfoPage}