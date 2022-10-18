import {NavLink, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useThemeSwitcher} from "react-css-theme-switcher";


import css from './Header.module.css'
import logo from '../../img/logo-icon.svg';
import avatar from '../../img/avatars/man_avatar_icon.svg';

import {moviesActions} from "../../redux";



const Header = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const {switcher, themes, currentTheme, status} = useThemeSwitcher();
    const [isDarkTheme, setIsDarkTheme] = useState(false);


    function submit(movie) {
        dispatch(moviesActions.SetSearchValue(movie.name));
        navigate('/search');
    }

    function themeSwitcher() {
        setIsDarkTheme(prev => {
            switcher({theme: prev ? themes.light : themes.dark});
            return !prev;
        });
    }


    // let isDarkTheme = false;
    // function themeSwitcher() {
    //    // switcher({theme: !isDarkTheme ? themes.dark : themes.light});
    //    // isDarkTheme = true;
    //     console.log('Start',isDarkTheme);
    //     if (!isDarkTheme) {
    //        switcher({theme: themes.dark});
    //        isDarkTheme = true;
    //    } else {
    //        switcher({theme: themes.light});
    //        isDarkTheme = false;
    //    }
    //     console.log('End',isDarkTheme);
    // }


    return (
        <header className={css.Header}>

            <div className={css.HeaderRowTop}>

                <div className={css.HeaderLogoWrapper}  onClick={() => navigate('/movies')}>
                    <div className={css.HeaderLogo}>
                        <img src={logo}/>
                    </div>
                    <h1>All About Movie</h1>
                </div>


                <div  className={css.HeaderFormWrapper}>
                    <form onSubmit={handleSubmit(submit)}>
                        <input className={css.HeaderFormInput} type={'text'} {...register('name')}/>
                    </form>
                </div>


                <div className={css.HeaderAvatarWrapper}>
                    <div className={css.HeaderAvatar}>
                        <img src={avatar}/>
                    </div>
                    <p>user name</p>
                </div>

            </div>


            <div className={css.HeaderRowBottom}>
                <nav  className={css.HeaderNav}>
                    <ul className={css.HeaderNavList}>
                        <li>
                            <NavLink to={'/movies'}>All movies</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/movies'}>All movies</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/movies'}>All movies</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/movies'}>All movies</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button className={isDarkTheme ? css.Night : css.Day} onClick={themeSwitcher}></button>
                </div>
            </div>



        </header>
    );
}

export {Header}