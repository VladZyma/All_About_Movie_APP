import {Badge} from "@mui/material";

import css from './GenreDadge.module.css';

const GenreBadge = ({genre}) => {

    return (
        <div className={css.GenreBadge}>
            <p>{genre}</p>
        </div>
    );

}

export {GenreBadge}
