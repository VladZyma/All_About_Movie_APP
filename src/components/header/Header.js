import {NavLink, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import css from './Header.module.css'
import logo from '../../img/logo-icon.svg';
import avatar from '../../img/avatars/man_avatar_icon.svg';

const Header = () => {

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

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
                    <form>
                        <input className={css.HeaderFormInput}/>
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
            </div>



        </header>
    );
}

export {Header}