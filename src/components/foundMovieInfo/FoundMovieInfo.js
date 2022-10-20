import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import css from "../movieInfo/MovieInfo.module.css";

import {urls} from "../../configs";

const FoundMovieInfo = () => {

    const {id} = useParams();

    const {foundMovies} = useSelector(state => state.moviesReducer);
    const {genres} = useSelector(state => state.genresReducer);
    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});
    console.log(genresObj);

    const movie = foundMovies.find(movie => movie.id === +id);
    console.log(movie);

    return (

        <div className={css.Move_info}>

            <div className={css.top_row}>
                <div className={css.movie_img_wrap}>
                    <img className={css.movie_img} src={`${urls.posters}${movie.backdrop_path}`} alt={movie.title}/>
                </div>

                <div className={css.movie_description_wrap}>
                    <ul className={css.movie_description_list}>
                        <li>
                            Title : {movie.title || movie.name}
                        </li>
                        <li>
                            Original title : {movie.original_title || movie.name}
                        </li>
                        <li>
                            Original language : {movie.original_language}
                        </li>
                        <li className={css.genres}>
                            Genres : <div className={css.genresRow}>{movie.genre_ids.map(id => <p key={id}>{genresObj[id].name}</p>)}</div>
                        </li>
                        <li>
                            Release date : {movie.release_date || movie.first_air_date}
                        </li>
                        <li>
                            Popularity : {movie.popularity}
                        </li>
                        <li>
                            Vote count : {movie.vote_count}
                        </li>
                        <li>
                            Vote average : {movie.vote_average}
                        </li>
                    </ul>
                </div>
            </div>

            <div className={css.bottom_row}>
                <p>{movie.overview}</p>
            </div>

        </div>
    );
}

export {FoundMovieInfo}