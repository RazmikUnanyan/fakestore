import React, {FC} from 'react';
import style from "./NavBar.module.scss";
import {NavBarProps} from "./NavBar.props";

const NavBar: FC<NavBarProps> = ({...props}) => (
    <nav {...props}>
        <ul role="list" className={style.ul}>
            <li><a href="#">Профель</a></li>
            <li><a href="#">Настройки</a></li>
            <li><a href="#">Корзина</a></li>
            <li><a href="#">Выйти</a></li>
        </ul>
    </nav>
);

export default NavBar;