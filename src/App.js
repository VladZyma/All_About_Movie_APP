import {Routes, Route, Navigate} from 'react-router-dom';
import {ThemeSwitcherProvider} from "react-css-theme-switcher";


import './App.css';

import {MainLayout} from "./layouts";
import {MoviesPage, MovieInfoPage, FoundMoviesPage} from "./pages";

const themes = {
    light: './style-light.css',
    dark: './public/style-light.css',
}
function App() {

    return (
        <ThemeSwitcherProvider defaultTheme='light' insertionPoint='inject-styles-here' themeMap={themes}>
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
        </ThemeSwitcherProvider>
    );
}

export default App;
