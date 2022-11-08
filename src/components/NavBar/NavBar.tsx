import React, { FC } from 'react'
import style from './NavBar.module.scss'
import { NavBarProps } from './NavBar.props'
import { Link } from '../_ui/Link/Link'

export const NavBar: FC<NavBarProps> = ({ categories, ...props }) => (
    <nav {...props}>
        <ul role="list" className={style.ul}>
            {categories.map((c, index) => (
                <li key={index}>
                    <Link to={`${c}`}>
                        {`${c}`}
                    </Link>
                </li>
            ))}
            <li>
                <Link to={'/'}>
                    all
                </Link>
            </li>
        </ul>
    </nav>
)
