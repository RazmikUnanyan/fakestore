import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { ITheme } from '../../context/app.context'

export interface HeaderProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  setTheme: () => void
  theme: ITheme
}
