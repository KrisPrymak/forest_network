import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.icon} src="https://cdn-icons-png.flaticon.com/512/9115/9115806.png" alt="icon" />
            <ul className={s.colors}>
                <li>#FFFFFF</li>
                <li>#FB6376</li>
                <li>#F2DDDD</li>
                <li>#0197F6</li>
                <li>#000000</li>
            </ul>
        </div>
    );
};

export default Header;