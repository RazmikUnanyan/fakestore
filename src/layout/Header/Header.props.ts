import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface HeaderProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  setTheme: () => void
  theme: 'light' | 'dark'
}
