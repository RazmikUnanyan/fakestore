import React, { FC } from 'react'
import style from './Select.module.scss'
import { SelectProps } from './Select.props'

export const Select: FC<SelectProps> = ({ children, ...props }) => {
  return (
      <select className={style.select} {...props}>
        {children}
      </select>
  )
}
