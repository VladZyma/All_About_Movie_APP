import {Link} from 'react-router-dom';

import css from './MovieListCard.module.css';

import {urls} from "../../configs";
import {StarsRating} from "../starsReting/StarsRating";


const MoviesListCard = (props) => {

    const {posters} = props;


    return (
            <div className={css.MovieListCard}>

                {Object.keys(posters).map(key =>

                    <div key={key} className={css.CardDetails}>
                        <Link to={'/info'} state={{...posters[key]}}>
                            <div className={css.CardPoster}>
                                <img src={`${urls.posters}${posters[key].poster_path}`}
                                     alt={`${posters[key].original_title}`}/>
                            </div>
                            <div className={css.CardReiting}>
                                <StarsRating rating={posters[key].vote_average}/>
                                {/*<p>vote_average: {posters[key].vote_average}</p>*/}
                                {/*<p>vote_count: {posters[key].vote_count}</p>*/}
                            </div>
                        </Link>
                    </div>

                )}
            </div>
    );
}

export {MoviesListCard}