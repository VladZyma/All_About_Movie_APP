import {useLocation} from "react-router-dom";



import {urls} from "../../configs";

const MovieInfo = () => {
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
    console.log(genre_ids);


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
                    <li>
                        genre_ids:
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