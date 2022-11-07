import React, { FC } from 'react'
import style from './Card.module.scss'
import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import { CardProps } from './Card.props'

export const Card: FC<CardProps> = ({ image, rating, price, title, ...props }) => (
    <div className={style.card} {...props}>
        <div className={style.imgWrapper}>
            <img src={image} alt="img" className={style.img}/>
        </div>
        <div className={style.detail}>
            <p className={style.title}>{title}</p>
            <p className={style.price}>{price} $</p>
            <p className={style.rating}>{rating.count} sold <StarIcon width={18}/> {rating.rate}</p>
        </div>
    </div>
)
