import {useSelector} from 'react-redux';

import {MovieInfo} from "../../components";

const MovieInfoPage = () => {

    const {genres} = useSelector(state => state.genresReducer);
    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});


    return (

        <div>
            {genresObj && <MovieInfo genre={genresObj}/>}
        </div>

    );
}
export {MovieInfoPage}