import {Link} from 'react-router-dom';

import css from './MovieListCard.module.css';

import {urls} from "../../configs";
import {StarsRating} from "../starsReting/StarsRating";
import {GenreBadge} from "../genreBadge/GenreBage";


const MoviesListCard = (props) => {

    const {movies, genres} = props;


    return (
            <div className={css.MovieListCard}>

                {Object.keys(movies).map(key =>

                    <div key={key} className={css.CardDetails}>

                        <Link to={'/info'} state={{...movies[key]}}>

                            <div className={css.CardPoster}>
                                <img src={`${urls.posters}${movies[key].poster_path}`}
                                     alt={`${movies[key].original_title}`}/>
                            </div>

                            <GenreBadge movie={movies[key]} genres={genres}/>

                            <div className={css.CardReiting}>
                                <StarsRating rating={movies[key].vote_average}/>
                            </div>

                        </Link>

                    </div>

                )}
            </div>
    );
}

export {MoviesListCard}