const baseURL = process.env.REACT_APP_API;


const urls = {
    movies: '/discover/movie',
    posters: 'https://image.tmdb.org/t/p/w500',
    genres: '/genre/movie/list',
    // search: '/search/keyword?query',
    search: '/search/multi',
}

export {
    baseURL,
    urls,
}