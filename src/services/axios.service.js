import axios from 'axios';

import {baseURL} from "../configs";

const accessTokenKey = process.env.REACT_APP_API_KEY;


const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {

    if (accessTokenKey) {
        //config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDAyNjkyZGRlNzgyYzE1ZmNjMjA5ZGE1M2Q5ZDU3ZSIsInN1YiI6IjYzNGE2MzBjMTA4OWJhMDA4MmVmN2U2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r_-3Vpj3zoNT1NnE-NCpZUBL8XyRZuqnHcYSXYneMY0`;
        config.headers.Authorization = `Bearer ${accessTokenKey}`;
    }

    return config;
});




export {axiosService}