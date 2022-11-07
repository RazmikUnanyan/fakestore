import React, { FC } from 'react'
import { MainProps } from './Main.props'
import style from './Main.module.scss'
import { useGetProductsQuery, useGetProductsWithCategoryQuery } from '../../redux/apiSlice'
import { Card } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'

const Main: FC<MainProps> = ({ ...props }) => {
  const { category } = useParams()

  const { data: products = [], isLoading } = useGetProductsQuery()
  const { data: productsWithCategory = [], isLoading: isLoadingProductsWCategory } = useGetProductsWithCategoryQuery({ category })
  const navigate = useNavigate()

  return (
        <div className={style.content} {...props}>
            {isLoading || isLoadingProductsWCategory
              ? 'Loading...'
              : (productsWithCategory || products)?.map(p => (
                    <Card key={p.id}
                          image={p.image}
                          price={p.price}
                          title={p.title}
                          rating={p.rating}
                          onClick={() => navigate(`/product/${p.id}`)}
                    />
                ))}
        </div>
  )
}

export default Main
