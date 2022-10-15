import css from './MovieListCard.module.css';

import {urls} from "../../configs";


const MoviesListCard = (props) => {

    const {posters} = props;

    return (
        <div className={css.MovieListCard}>
            {Object.keys(posters).map(key =>
                <img key={key} src={`${urls.posters}${posters[key].poster_path}`}
                     alt={`${posters[key].original_title}`}/>
            )}
        </div>
    );
}

export {MoviesListCard}