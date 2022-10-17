import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getAllMovies: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    // findMovies: (value) => axiosService.get(`${urls.search}=${value}`),
    findMovies: (query= '') => axiosService.get(urls.search, {params: {query}}),
}

export {moviesService}