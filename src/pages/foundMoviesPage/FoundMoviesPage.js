import {useSelector} from 'react-redux';
import {useSearchParams} from "react-router-dom";

import {FoundMoviesList} from "../../components";


const FoundMoviesPage = () => {

    const {searchQuery} = useSelector(state => state.moviesReducer);
    const [query, setQuery] = useSearchParams({query: 'super'});
    setQuery(searchQuery);


    return (
        <div>
            <FoundMoviesList query={query.get('query')}/>
        </div>
    );
}
export {FoundMoviesPage}