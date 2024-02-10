import { NavLink } from 'react-router-dom';
import cls from './header.module.css';

const Header = () => {

    return (
        <header className={cls.wrapper}>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/product'}>Product</NavLink>
        </header>
    )
};

export default Header;