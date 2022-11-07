import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string
  price: number
  title: string
  rating: {
    count: number
    rate: number
  }
}
