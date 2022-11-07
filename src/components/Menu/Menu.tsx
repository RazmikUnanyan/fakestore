import React, { FC } from 'react'
import style from './Manu.module.scss'
import cn from 'classnames'
import { ManuProps } from './Manu.props'

export const Menu: FC<ManuProps> = ({ isOpen, ...props }) => (
    <div className={cn(style.menu, {
      [style.close]: !isOpen,
      [style.open]: isOpen
    })}
         {...props}
    >
        <span></span>
        <span></span>
        <span></span>
    </div>
)
