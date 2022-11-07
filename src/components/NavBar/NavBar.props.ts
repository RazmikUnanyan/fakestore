import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface NavBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: string[]
}
