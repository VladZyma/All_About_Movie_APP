import {useSelector} from "react-redux";

import css from './FoundMoviesListCard.module.css';

import {urls} from "../../configs";
import {GenreBadge} from "../genreBadge/GenreBage";

import {StarsRating} from "../starsReting/StarsRating";

const FoundMoviesListCard = (props) => {

    const {movies} = props;
    const {genres} = useSelector(state => state.genresReducer);
    console.log('Genres',genres);
    // console.log(movies);


    return (
        <div className={css.MovieCard}>
            {movies?.map(movie =>

                <div key={movie.id} className={css.CardDetails}>
                    <div className={css.CardPoster}>
                        <img src={`${urls.posters}${movie.poster_path}`}/>
                    </div>

                    <GenreBadge movie={movie} genres={genres}/>


                    <div className={css.CardReiting}>
                        <StarsRating rating={movie.vote_average}/>
                    </div>

                </div>
            )}
        </div>
    );
}

export {FoundMoviesListCard}