import React, { FC } from 'react'
import style from './Link.module.scss'
import { LinkProps } from './Link.props'
import { NavLink } from 'react-router-dom'

export const Link: FC<LinkProps> = ({ children, ...props }) => (
    <NavLink {...props}
             style={({ isActive }) => ({ color: isActive ? '#970808' : '' })}
             className={style.link}
    >
        {children}
    </NavLink>
)
