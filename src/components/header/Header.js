import {NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import css from './Header.module.css'

const Header = () => {

    const {register, handleSubmit} = useForm();

    return (
        <header className={css.Header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/movies'}>All movies</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <form>
                    <input/>
                </form>
            </div>
        </header>
    );
}

export {Header}