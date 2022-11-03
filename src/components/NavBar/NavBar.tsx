import React, {FC} from 'react';
import style from "./NavBar.module.scss";
import {NavBarProps} from "./NavBar.props";

export const NavBar: FC<NavBarProps> = ({...props}) => (
    <nav {...props}>
        <ul className={style.ul}>
            <li><a href="src/components/NavBar/NavBar#">Профель</a></li>
            <li><a href="src/components/NavBar/NavBar#">Настройки</a></li>
            <li><a href="src/components/NavBar/NavBar#">Корзина</a></li>
            <li><a href="src/components/NavBar/NavBar#">Выйти</a></li>
        </ul>
    </nav>
);