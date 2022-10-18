
const FoundMoviesListCard = (props) => {

    const {movie} = props;
    // console.log(movie);


    return (
        <div>{movie.original_title}</div>
    );
}

export {FoundMoviesListCard}