import {useLocation} from "react-router-dom";


import css from './MovieInfo.module.css';

import {urls} from "../../configs";

const MovieInfo = (props) => {

    const {state, state: {
        backdrop_path,
        genre_ids,
        original_language,
        original_title,
        overview,
        popularity,
        vote_count,
        vote_average,
        release_date,
        title,
    }} = useLocation();

    const {genre} = props;


    return (

        <div className={css.Move_info}>

            <div className={css.top_row}>

                <div className={css.movie_img_wrap}>
                    <img className={css.movie_img} src={`${urls.posters}${backdrop_path}`} alt={title}/>
                </div>

                <div className={css.movie_description_wrap}>
                    <ul className={css.movie_description_list}>
                        <li>
                            Title : {title}
                        </li>
                        <li>
                            Original title : {original_title}
                        </li>
                        <li>
                            Original language : {original_language}
                        </li>
                        <li className={css.genres}>
                            Genres : <div className={css.genresRow}>{genre_ids.map(id => <p key={id}>{genre[id].name}</p>)}</div>
                        </li>
                        <li>
                            Release date : {release_date}
                        </li>
                        <li>
                            Popularity : {popularity}
                        </li>
                        <li>
                            Vote count : {vote_count}
                        </li>
                        <li>
                            Vote average : {vote_average}
                        </li>
                    </ul>
                </div>

            </div>

            <div className={css.bottom_row}>
                <p>{overview}</p>
            </div>

        </div>
    );
}
export {MovieInfo}