import {Routes, Route, Navigate} from 'react-router-dom';


import './App.css';

import {MainLayout} from "./layouts";
import {MoviesPage, MovieInfoPage, FoundMoviesPage} from "./pages";


function App() {

    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/info'} element={<MovieInfoPage/>}/>
                    <Route path={'/search'} element={<FoundMoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
