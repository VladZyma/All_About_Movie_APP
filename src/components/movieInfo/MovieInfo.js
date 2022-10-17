import {useLocation} from "react-router-dom";
import {Badge} from "@mui/material";

import css from './MovieInfo.module.css';

import {GenreBadge} from "../genreBadge/GenreBage";

import {urls} from "../../configs";

const MovieInfo = (props) => {

    const {state, state: {
        backdrop_path,
        genre_ids,
        original_language,
        original_title,
        overview,
        popularity,
        release_date,
        title,
    }} = useLocation();

    const {genre} = props;
    console.log('Props',genre[12].name);

    return (
        <div>
            <div>
                <img src={`${urls.posters}${backdrop_path}`}/>
            </div>
            <div>
                <ul>
                    <li>
                        title: {title}
                    </li>
                    <li>
                        original_title: {original_title}
                    </li>
                    <li>
                        original_language: {original_language}
                    </li>
                    <li className={css.Badges}>
                        genre_ids: <div className={css.BadgesRow}>{genre_ids.map(id => <GenreBadge genre={genre[id].name}/>)}</div>
                    </li>
                    <li>
                        release_date: {release_date}
                    </li>
                    <li>
                        popularity: {popularity}
                    </li>
                    <li>
                        overview: {overview}
                    </li>
                </ul>
            </div>
        </div>
    );
}
export {MovieInfo}