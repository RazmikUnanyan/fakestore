import React, { FC } from 'react'
import style from './Button.module.scss'
import { ButtonProps } from './Button.props'

export const Button: FC<ButtonProps> = ({ icon, children, ...props }) => (
    <button className={style.button} {...props}>
        {icon}
        {children}
    </button>
)
