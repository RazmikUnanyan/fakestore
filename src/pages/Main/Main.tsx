import React, { FC, useContext } from 'react'
import { MainProps } from './Main.props'
import style from './Main.module.scss'
import { useGetProductsQuery, useGetProductsWithCategoryQuery } from '../../redux/apiSlice'
import { Card } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../context/app.context'

const Main: FC<MainProps> = ({ ...props }) => {
  const { category } = useParams()
  const { searchParams } = useContext(AppContext)
  const { data: products = [], isLoading } = useGetProductsQuery()
  const { data: productsWithCategory = [], isLoading: isLoadingProductsWCategory } = useGetProductsWithCategoryQuery({ category })
  const navigate = useNavigate()

  const searchFilter = searchParams?.get('search')
  return (
        <div className={style.content} {...props}>
            {isLoading || isLoadingProductsWCategory
              ? 'Loading...'
              : (productsWithCategory || products)
                  .filter((product) => product.title.toLowerCase().includes(searchFilter ?? ''))
                  .map(product => (
                    <Card key={product.id}
                          image={product.image}
                          price={product.price}
                          title={product.title}
                          rating={product.rating}
                          onClick={() => navigate(`/product/${product.id}`)}
                    />
                  ))}
        </div>
  )
}

export default Main
